/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlx5h0gnt1flbyq")

  collection.options = {
    "query": "SELECT id,month,year FROM utility_bills\nWHERE month=6 AND year=2023\n"
  }

  // remove
  collection.schema.removeField("5bqfegui")

  // remove
  collection.schema.removeField("g8my31qt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "grldpvuu",
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
    "id": "kd47xyae",
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
    "query": "SELECT id,month,year FROM utility_bills\n"
  }

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

  // remove
  collection.schema.removeField("grldpvuu")

  // remove
  collection.schema.removeField("kd47xyae")

  return dao.saveCollection(collection)
})
