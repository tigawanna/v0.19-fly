/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nuzjool1gj5w0r4",
    "created": "2024-04-15 17:40:25.472Z",
    "updated": "2024-04-15 17:40:25.472Z",
    "name": "liquorstore_brands",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1uaf8gsj",
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
        "id": "gpgp1vmf",
        "name": "category",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "8maaki7k9aquxy1",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("nuzjool1gj5w0r4");

  return dao.deleteCollection(collection);
})
