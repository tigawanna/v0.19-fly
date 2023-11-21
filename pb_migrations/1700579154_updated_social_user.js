/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5sckr8a13top3zs")

  collection.name = "pocketbook_user"
  collection.indexes = [
    "CREATE INDEX `_5sckr8a13top3zs_created_idx` ON `pocketbook_user` (`created`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5sckr8a13top3zs")

  collection.name = "social_user"
  collection.indexes = [
    "CREATE INDEX `_5sckr8a13top3zs_created_idx` ON `social_user` (`created`)"
  ]

  return dao.saveCollection(collection)
})
