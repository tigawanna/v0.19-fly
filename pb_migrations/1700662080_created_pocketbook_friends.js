/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rjrl9uzeu508rf3",
    "created": "2023-11-22 14:08:00.337Z",
    "updated": "2023-11-22 14:08:00.337Z",
    "name": "pocketbook_friends",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "scq8yqvr",
        "name": "user_a_follow_user_b",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "yes",
            "no"
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rjrl9uzeu508rf3");

  return dao.deleteCollection(collection);
})
