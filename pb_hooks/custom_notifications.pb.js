/// <reference path="../pb_data/types.d.ts" />
routerAdd(
  "GET",
  "/custom_pocketbook_notifications_count",
  (c) => {
    // console.log("custom_pocketbook_notifications_count === ", c.queryParam("created"));
    try {
      const result = new DynamicModel({
        count: 0,
        created: "",
        details: "",
        id: "",
        item_id: "",
        name: "",
        source: "",
        type: "",
        updated: "",
      });

      $app
        .dao()
        .db()
        .newQuery(
          `
          SELECT COUNT(*) AS count, * FROM pocketbook_notifications WHERE created > {:created} ORDER BY created DESC LIMIT 1;
        `
        )
        .bind({
          created: c.queryParam("created"),
        })
        .one(result); // throw an error on db failure

      if (result.length > 0) {
        console.log(result[0].id);
      }

      return c.json(200, { posts: result });
    } catch (e) {
      return c.json(500, {
        error: " Error getting custom_pocketbook_posts: " + e.message,
      });
    }
  } /* optional middlewares */
);
