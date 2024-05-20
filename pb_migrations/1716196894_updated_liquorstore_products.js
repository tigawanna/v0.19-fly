/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6cn0u02mwxy26z4")

  collection.createRule = "@request.auth.email = \"denniskinuthiaw@gmail.com\""
  collection.updateRule = "@request.auth.email = \"denniskinuthiaw@gmail.com\""
  collection.deleteRule = "@request.auth.email = \"denniskinuthiaw@gmail.com\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6cn0u02mwxy26z4")

  collection.createRule = null
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
