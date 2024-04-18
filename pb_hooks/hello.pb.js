/// <reference path="../pb_data/types.d.ts" />
routerAdd(
  "GET",
  "/hello/:name",
  (c) => {
    const name = c.pathParam("name");

    return c.json(200, { message: `Hello ${name}` });
  } /* optional middlewares */
);
