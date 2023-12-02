/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vdjzfr0gybtmwif")

  collection.name = "utility_tenants"

  // remove
  collection.schema.removeField("jmkbfrnk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vdjzfr0gybtmwif")

  collection.name = "utility_tenant"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jmkbfrnk",
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
})
