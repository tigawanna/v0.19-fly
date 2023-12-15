/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q2inux1nn05ynut")

  // remove
  collection.schema.removeField("ydn6fxof")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "myduwzui",
    "name": "type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "like",
        "reply",
        "follow"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q2inux1nn05ynut")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ydn6fxof",
    "name": "type",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("myduwzui")

  return dao.saveCollection(collection)
})
