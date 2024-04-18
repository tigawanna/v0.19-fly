/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8maaki7k9aquxy1")

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8maaki7k9aquxy1")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
