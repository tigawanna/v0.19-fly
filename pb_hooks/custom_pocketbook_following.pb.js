// @ts-check
/// <reference path="../pb_data/types.d.ts" />
routerAdd(
  "GET",
  "/custom_pocketbook_following",
  (c) => {
    try {
      function isParamEmpty(param, default_value) {
        if (param === "" || param === undefined || param === null) {
          return default_value;
        }
        return param;
      }
      if (isParamEmpty(c.queryParam("profile_id"), "") === "") {
        return c.json(400, { message: "profile_id parameter required" });
      }
      if (isParamEmpty(c.queryParam("logged_in"), "") === "") {
        return c.json(400, { message: "logged_in parameter required" });
      }
      const result = arrayOf(
        new DynamicModel({
          friendship_id: "",

          created: "",
          updated: "",
          user_a: "",
          user_b: "",
          user_a_follow_user_b: "",
          user_b_follow_user_a: "",
          following_me: "",
          followed_by_me: "",
          friendship_exists: "",
          user_a_name: "",
          user_b_name: "",
          user_a_avatar: "",
          user_b_avatar: "",
          user_a_email: "",
          user_b_email: "",
        })
      );

      $app
        ?.dao()
        ?.db()
        ?.newQuery(
          `
    SELECT 
    fr.id friendship_id,
    fr.created created,
    fr.updated updated,
    fr.user_a user_a,
    fr.user_b user_b,
    ua.username user_a_name,
    ub.username user_b_name,
    ua.avatar user_a_avatar,
    ub.avatar user_b_avatar,
    ua.email user_a_email,
    ub.email user_b_email,
    fr.user_a_follow_user_b user_a_follow_user_b,
    fr.user_b_follow_user_a user_b_follow_user_a,


  CASE WHEN EXISTS (
    SELECT id
    FROM pocketbook_friends
    WHERE id=fr.id AND
    ((user_a = {:logged_in}) 
    OR 
    (user_b = {:logged_in}))
  ) THEN 'yes' ELSE 'no' END AS friendship_exists,

  CASE WHEN EXISTS (
    SELECT id
    FROM pocketbook_friends
    WHERE id=fr.id AND
    ((user_a = {:logged_in} AND user_b_follow_user_a = 'yes') 
    OR 
    (user_b = {:logged_in} AND user_a_follow_user_b = 'yes'))
  ) THEN 'yes' ELSE 'no' END AS following_me,

  CASE WHEN EXISTS (
    SELECT id
    FROM pocketbook_friends
    WHERE id=fr.id AND
   (
    (user_a = {:profile_id} AND user_a_follow_user_b = 'yes')
     OR
     (user_b = {:profile_id} AND user_b_follow_user_a = 'yes')
     )
  ) THEN 'yes' ELSE 'no' END AS followed_by_me


FROM pocketbook_friends as fr
left JOIN pocketbook_user as ua on ua.id = fr.user_a
left JOIN pocketbook_user as ub on ub.id = fr.user_b
WHERE (
  (fr.user_a = {:profile_id} AND fr.user_a_follow_user_b='yes')
  OR
  (fr.user_b = {:profile_id} AND fr.user_b_follow_user_a='yes')
)
AND 
(
  fr.created < {:created} OR (fr.created = {:created} AND fr.id < {:last_id})
)
ORDER BY fr.created DESC, fr.id DESC
LIMIT {:limit}
      `
        )
        ?.bind({
          logged_in: c.queryParam("logged_in"),
          last_id: c.queryParam("last_id"),
          profile_id: c.queryParam("profile_id"),
          created: isParamEmpty(c.queryParam("created"), new Date().toISOString()),
          limit: isParamEmpty(c.queryParam("limit"), 5),
        })
        ?.all(result); // throw an error on db failure

      // if (result.length > 0) {
      //   console.log(result[0]);
      // }

      return c.json(200, { result });
    } catch (e) {
      return c.json(500, {
        error: " Error getting custom_pocketbook_friends: " + e.message,
      });
    }
  } /* optional middlewares */
);

// http://127.0.0.1:8090/custom_pocketbook_friends?logged_in=co21e3woylnyz62&created=2023-11-23T20:44:29+03:00Z&limit=5&id=co21e3woylnyz62
//  parametes requered
// id: c.queryParam("id") : id of the user who's friends we're looking up ,
// created: c.queryParam("created") : timestamp of the last friend that was created
// logged_in: c.queryParam("created") : id of the currently logged in user (used to check if the user is following any of the returned friends)
// limit: c.queryParam("limit") : number of friends to return
