/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z0mquff8",
    "name": "tenant",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vdjzfr0gybtmwif",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z0mquff8",
    "name": "new_tenant",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vdjzfr0gybtmwif",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
