/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1icae0pmowb1z4v")

  collection.name = "liquorstore_user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1icae0pmowb1z4v")

  collection.name = "iquorstore_user"

  return dao.saveCollection(collection)
})
