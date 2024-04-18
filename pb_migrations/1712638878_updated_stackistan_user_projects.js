/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgq1h67gj667lh")

  // remove
  collection.schema.removeField("x6h460sw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8pe8h0vf",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("jkgq1h67gj667lh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x6h460sw",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("8pe8h0vf")

  return dao.saveCollection(collection)
})
