/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ypwie9u6kbjcho")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "umn0puoc",
    "name": "price",
    "type": "number",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("4ypwie9u6kbjcho")

  // remove
  collection.schema.removeField("umn0puoc")

  return dao.saveCollection(collection)
})
