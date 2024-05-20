/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nuzjool1gj5w0r4")

  collection.createRule = "@request.auth.email = \"denniskinuthiaw@gmail.com\""
  collection.updateRule = "@request.auth.email = \"denniskinuthiaw@gmail.com\""
  collection.deleteRule = "@request.auth.email = \"denniskinuthiaw@gmail.com\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nuzjool1gj5w0r4")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
