/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ruwcn593pmful7g");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ruwcn593pmful7g",
    "created": "2024-04-13 13:15:03.432Z",
    "updated": "2024-04-13 13:16:36.768Z",
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
      },
      {
        "system": false,
        "id": "d6ngjjm0",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vhegudhz",
        "name": "gender",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "male",
            "female",
            "other"
          ]
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
})
