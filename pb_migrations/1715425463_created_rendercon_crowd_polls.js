/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "49kab0vt4w6afci",
    "created": "2024-05-11 11:04:23.322Z",
    "updated": "2024-05-11 11:04:23.322Z",
    "name": "rendercon_crowd_polls",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "chrtcrem",
        "name": "value",
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
  const collection = dao.findCollectionByNameOrId("49kab0vt4w6afci");

  return dao.deleteCollection(collection);
})
