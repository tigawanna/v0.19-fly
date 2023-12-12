// @ts-check
/// <reference path="../pb_data/types.d.ts" />
routerAdd(
  "GET",
  "/custom_one_pocketbook_friends",
  (c) => {
    try {
      function isParamEmpty(param, default_value) {
        if (param === "" || param === undefined || param === null) {
          return default_value;
        }
        return param;
      }
      if (!isParamEmpty(c.queryParam("id"), undefined)) {
        return c.json(400, { message: "id parameter required" });
      }
      if (!isParamEmpty(c.queryParam("logged_in"), undefined)) {
        return c.json(400, { message: "logged_in parameter required" });
      }

      const result = new DynamicModel({
        friendship_id: "",
        friend_avatar: "",
        friend_username: "",
        friend_email: "",
        created: "",
        updated: "",
        user_a: "",
        user_b: "",
        user_a_follow_user_b: "",
        user_b_follow_user_a: "",
        following_me: "",
        followed_by_me: "",
      });

      $app
        ?.dao()
        ?.db()
        ?.newQuery(
          `
    SELECT 
    fr.id friendship_id,
    fr.avatar friend_avatar,
    fr.username friend_username,
    fr.email friend_email,
    fr.created created,
    fr.updated updated,
    fr.user_a user_a,
    fr.user_b user_b,
    fr.user_a_follow_user_b user_a_follow_user_b,
    fr.user_b_follow_user_a user_b_follow_user_a,
    IFNULL(
    (SELECT id FROM pocketbook_friends 
    WHERE 
   ((user_a = {:logged_in} 
		AND 
	(user_b = fr.user_a or user_b = fr.user_b)) and user_b_follow_user_a = "yes") 
    or
    ((user_b = {:logged_in} 
		AND
	(user_a = fr.user_a or user_a = fr.user_b)) and user_a_follow_user_b = "yes" )
    ),'no') as following_me,

    IFNULL(
    (SELECT id FROM pocketbook_friends 
    WHERE 
   ((user_a = {:logged_in} 
		AND
	(user_b = fr.user_a or user_b = fr.user_b)) and user_a_follow_user_b = "yes") 
    or
    ((user_b = {:logged_in} 
		AND
	 (user_a = fr.user_a or user_a = fr.user_b)) and user_b_follow_user_a = "yes" )
    ),'no') as followed_by_me

FROM pocketbook_friends as fr
WHERE (fr.id = {:id})

      `
        )
        ?.bind({
          logged_in: c.queryParam("logged_in"),
          id: c.queryParam("id"),
        })
        ?.one(result); // throw an error on db failure

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
// id: c.queryParam("id") : id of the user who's friendship we're looking up ,
// logged_in: c.queryParam("created") : id of the currently logged in user (used to check if the user is following any of the returned friends)
