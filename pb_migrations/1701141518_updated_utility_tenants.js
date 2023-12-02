/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vdjzfr0gybtmwif")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ljeeeun",
    "name": "avatar",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vdjzfr0gybtmwif")

  // remove
  collection.schema.removeField("6ljeeeun")

  return dao.saveCollection(collection)
})
