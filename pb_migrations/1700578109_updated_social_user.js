/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xm053rsmx3et3qm")

  collection.name = "social_user_1"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xm053rsmx3et3qm")

  collection.name = "social_user"

  return dao.saveCollection(collection)
})
