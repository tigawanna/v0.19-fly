/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wbq0qz1adwxte2v")

  collection.name = "mashamba_owner"
  collection.indexes = [
    "CREATE INDEX `_wbq0qz1adwxte2v_created_idx` ON `mashamba_owner` (`created`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wbq0qz1adwxte2v")

  collection.name = "owner"
  collection.indexes = [
    "CREATE INDEX `_wbq0qz1adwxte2v_created_idx` ON `owner` (`created`)"
  ]

  return dao.saveCollection(collection)
})
