/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jlx5h0gnt1flbyq",
    "created": "2024-05-15 15:54:59.578Z",
    "updated": "2024-05-15 15:54:59.578Z",
    "name": "utility_bills_this_month",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id FROM utility_bills\nWHERE month=4 and year= 2024"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jlx5h0gnt1flbyq");

  return dao.deleteCollection(collection);
})
