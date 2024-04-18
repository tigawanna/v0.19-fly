/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yn3523fgovgg0o1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1wy8amij",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1icae0pmowb1z4v",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yn3523fgovgg0o1")

  // remove
  collection.schema.removeField("1wy8amij")

  return dao.saveCollection(collection)
})
