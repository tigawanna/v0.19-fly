/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8maaki7k9aquxy1",
    "created": "2024-04-15 17:38:52.429Z",
    "updated": "2024-04-15 17:38:52.429Z",
    "name": "liquorstore_categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3garsdzg",
        "name": "name",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Whisky",
            "Wine",
            "Champagne",
            "Liqueur",
            "Tequila",
            "Gin",
            "Cognac",
            "Beers",
            "Brandy",
            "Rum",
            "Vodka",
            "Vape",
            "Extras"
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
  const collection = dao.findCollectionByNameOrId("8maaki7k9aquxy1");

  return dao.deleteCollection(collection);
})
