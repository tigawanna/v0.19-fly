/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8maaki7k9aquxy1")

  collection.indexes = [
    "CREATE INDEX `idx_FvOrgWf` ON `liquorstore_categories` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8maaki7k9aquxy1")

  collection.indexes = []

  return dao.saveCollection(collection)
})
