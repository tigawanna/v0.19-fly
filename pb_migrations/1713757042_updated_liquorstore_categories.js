/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8maaki7k9aquxy1")

  // remove
  collection.schema.removeField("3garsdzg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mrhufk8h",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8maaki7k9aquxy1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3garsdzg",
    "name": "name",
    "type": "select",
    "required": true,
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
  }))

  // remove
  collection.schema.removeField("mrhufk8h")

  return dao.saveCollection(collection)
})
