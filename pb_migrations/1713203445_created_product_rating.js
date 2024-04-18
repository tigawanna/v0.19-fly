/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yn3523fgovgg0o1",
    "created": "2024-04-15 17:50:45.612Z",
    "updated": "2024-04-15 17:50:45.612Z",
    "name": "product_rating",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sqzklqik",
        "name": "value",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("yn3523fgovgg0o1");

  return dao.deleteCollection(collection);
})
