/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3bba2k3t6zgcigt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jsqodlqp",
    "name": "isAdmin",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3bba2k3t6zgcigt")

  // remove
  collection.schema.removeField("jsqodlqp")

  return dao.saveCollection(collection)
})
