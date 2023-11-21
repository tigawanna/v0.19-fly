/// <reference path="../pb_data/types.d.ts" />
routerAdd(
  "GET",
  "/all_custom_posts",
  (c) => {
    let name = c.pathParam("name");
    const result = arrayOf(
      new DynamicModel({
        // describe the shape of the data (used also as initial values)
        id: "",
        body: "",
        user: "",
  
      })
    );

    $app
      .dao()
      .db()
      .newQuery("SELECT id, body, user FROM pocketbook_posts LIMIT 100")
      .all(result); // throw an error on db failure

    if (result.length > 0) {
      console.log(result[0].id);
    }

    return c.json(200, { posts:result});
  } /* optional middlewares */
);
