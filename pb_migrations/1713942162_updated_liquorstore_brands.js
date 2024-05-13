/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nuzjool1gj5w0r4")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nuzjool1gj5w0r4")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
