routerAdd("GET", "/one_custom_pocketbook_post", (c) => {
  try {
    const result = new DynamicModel({
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
    });

    $app
      .dao()
      .db()
      .newQuery(
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
WHERE ( pp.id = {:id})
ORDER BY pp.created DESC, pp.id DESC

      `
      )
      .bind({
        user: c.queryParam("user"),
        id: c.queryParam("id"),
      })
      .one(result); // throw an error on db failure

    if (result.length > 0) {
      console.log(result[0].id);
    }

    return c.json(200, { posts: result });
  } catch (e) {
    return c.json(500, {
      error: "Error getting one_custom_pocketbook_post " + e.message,
    });
  }
});
// http://127.0.0.1:8090/one_custom_pocketbook_post?id=z2elh8fxauby5xx
