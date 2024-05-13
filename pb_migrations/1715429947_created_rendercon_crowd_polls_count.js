/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3f5k2yq3vystuij",
    "created": "2024-05-11 12:19:07.436Z",
    "updated": "2024-05-11 12:19:07.436Z",
    "name": "rendercon_crowd_polls_count",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fpxqply0",
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
      },
      {
        "system": false,
        "id": "ktadnbat",
        "name": "count",
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
    "options": {
      "query": "SELECT id AS id, value, COUNT(*) AS count\nFROM \"rendercon_crowd_polls\"\nGROUP BY value;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3f5k2yq3vystuij");

  return dao.deleteCollection(collection);
})
