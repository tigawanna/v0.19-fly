/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgq1h67gj667lh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9rypa6d4",
    "name": "image_url",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgq1h67gj667lh")

  // remove
  collection.schema.removeField("9rypa6d4")

  return dao.saveCollection(collection)
})
