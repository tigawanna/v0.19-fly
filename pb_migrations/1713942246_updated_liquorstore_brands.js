/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nuzjool1gj5w0r4")

  collection.indexes = [
    "CREATE INDEX `idx_CAKIUQG` ON `liquorstore_brands` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nuzjool1gj5w0r4")

  collection.indexes = []

  return dao.saveCollection(collection)
})
