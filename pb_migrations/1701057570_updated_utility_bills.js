/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.viewRule = "@request.auth.verified = true && @request.auth.type=\"manager\""
  collection.updateRule = "@request.auth.verified = true && @request.auth.type=\"manager\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.viewRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
