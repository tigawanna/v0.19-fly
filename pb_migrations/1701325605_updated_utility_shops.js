/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxuqtyg7",
    "name": "utils",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "elec",
        "water",
        "both",
        "none"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxuqtyg7",
    "name": "utils",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "elec",
        "water",
        "both"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
