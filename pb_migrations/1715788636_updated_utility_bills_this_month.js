/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlx5h0gnt1flbyq")

  collection.options = {
    "query": "SELECT id,month,year FROM utility_bills\n"
  }

  // remove
  collection.schema.removeField("yjxgwbf7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5bqfegui",
    "name": "month",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g8my31qt",
    "name": "year",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlx5h0gnt1flbyq")

  collection.options = {
    "query": "SELECT id,month FROM utility_bills\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yjxgwbf7",
    "name": "month",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("5bqfegui")

  // remove
  collection.schema.removeField("g8my31qt")

  return dao.saveCollection(collection)
})
