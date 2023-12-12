/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu")

  collection.updateRule = "@request.auth.id != user.id"
  collection.deleteRule = "@request.auth.id != user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu")

  collection.updateRule = "@request.auth.id != user"
  collection.deleteRule = "@request.auth.id != user"

  return dao.saveCollection(collection)
})
