/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("le01a4rv0cmvouh")

  collection.listRule = "@request.auth.id !=\"\""
  collection.viewRule = "@request.auth.id !=\"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("le01a4rv0cmvouh")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
