/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6cn0u02mwxy26z4")

  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6cn0u02mwxy26z4")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
