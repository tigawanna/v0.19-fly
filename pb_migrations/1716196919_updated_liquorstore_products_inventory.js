/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ypwie9u6kbjcho")

  collection.createRule = "@request.auth.email = \"denniskinuthiaw@gmail.com\""
  collection.updateRule = "@request.auth.email = \"denniskinuthiaw@gmail.com\""
  collection.deleteRule = "@request.auth.email = \"denniskinuthiaw@gmail.com\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ypwie9u6kbjcho")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
