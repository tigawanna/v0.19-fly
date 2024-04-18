// @ts-check
/// <reference path="../pb_data/types.d.ts" />
routerAdd(
  "GET",
  "/custom_pocketbook_posts",
  (c) => {
    try {
      function isParamEmpty(param, default_value) {
        if (param === "" || param === undefined || param === null) {
          return default_value;
        }
        return param;
      }
      const result = arrayOf(
        new DynamicModel({
          creator_id: "",
          creator_name: "",
          creator_image: "",
          post_id: "",
          post_body: "",
          post_media: "",
          post_parent: "",
          post_depth: "",
          created_at: "",
          likes: "",
          mylike: "",
          reaction_id: "",
          replies: "",
          myreply: "",
        })
      );

      $app
        ?.dao()
        ?.db()
        ?.newQuery(
          `
      SELECT 
pp.user creator_id,
dv.username creator_name,
dv.avatar creator_image,

pp.id post_id,
pp.body post_body,
pp.media post_media,
pp.created created_at,
pp.depth post_depth,
IFNULL(pp.parent,"op") post_parent,

(SELECT COUNT(*) FROM pocketbook_reactions WHERE liked = 'yes' AND post = pp.id) likes,
IFNULL((SELECT  liked FROM pocketbook_reactions WHERE user = {:user} AND post = pp.id),'virgin') mylike,
IFNULL((SELECT id FROM pocketbook_reactions WHERE user = {:user} AND post = pp.id),"virgin") reaction_id,

(SELECT COUNT(*) FROM pocketbook_posts WHERE parent = pp.id AND depth = pp.depth + 1) replies,
IFNULL((SELECT  id FROM pocketbook_posts WHERE pp.user = {:user} AND parent = pp.id AND depth = pp.depth + 1 ),'virgin') myreply
 
FROM pocketbook_posts pp
LEFT JOIN pocketbook_user dv on dv.id = pp.user
WHERE (
    (pp.created < {:created} OR (pp.created = {:created} AND pp.id < {:id})) 
    AND pp.depth={:depth}
	AND (CASE WHEN {:profile} = 'general' THEN 1 ELSE pp.user = {:profile} END)
  )
ORDER BY pp.created DESC, pp.id DESC
LIMIT {:limit}
      `
        )
        ?.bind({
          user: c.queryParam("user"),
          id: c.queryParam("id"),
          depth: isParamEmpty(c.queryParam("depth"), 0),
          profile: isParamEmpty(c.queryParam("profile"), "general"),
          created: isParamEmpty(c.queryParam("created"), new Date().toISOString()),
          limit: isParamEmpty(c.queryParam("limit"), 5),
        })
        ?.all(result); // throw an error on db failure



      return c.json(200, { result });
    } catch (e) {
      return c.json(500, {
        error: ` Error getting custom_pocketbook_posts: ${e.message}`,
      });
    }
  } /* optional middlewares */
);

// http://127.0.0.1:8090/custom_pocketbook_posts?depth=0&created=2023-11-21T20:44:29+03:00Z&limit=2&profile=general
// parameters required
// id: c.queryParam("id") : id of the post we're looking up
// user: c.queryParam("user") : id of the currently logged in user
// created: c.queryParam("created") : timestamp of the last post that was created (used for pagination)
// depth: c.queryParam("depth") : depth of the post(original posts are at depth 0 and replies are at depth n),
// profile: c.queryParam("profile") : id of the currently logged in user or 'general' to show posts for unlooged in users,
// limit: c.queryParam("limit") " how many posts per request",
