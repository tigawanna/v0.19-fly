/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ruwcn593pmful7g",
    "created": "2024-04-13 13:15:03.432Z",
    "updated": "2024-04-13 13:15:03.432Z",
    "name": "brushbox_users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vsqe2pbv",
        "name": "phone",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ruwcn593pmful7g");

  return dao.deleteCollection(collection);
})
