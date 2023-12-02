/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vdjzfr0gybtmwif")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlsqbfhx",
    "name": "phone",
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
  const collection = dao.findCollectionByNameOrId("vdjzfr0gybtmwif")

  // remove
  collection.schema.removeField("wlsqbfhx")

  return dao.saveCollection(collection)
})
