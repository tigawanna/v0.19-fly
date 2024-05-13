/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3bba2k3t6zgcigt")

  collection.createRule = "@request.auth.id  != \"\""
  collection.updateRule = "@request.auth.id  = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3bba2k3t6zgcigt")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
