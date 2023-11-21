/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7yy4zq0mtyj546q")

  collection.name = "mashamba_listings"
  collection.indexes = [
    "CREATE INDEX `_7yy4zq0mtyj546q_created_idx` ON `mashamba_listings` (`created`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7yy4zq0mtyj546q")

  collection.name = "listings"
  collection.indexes = [
    "CREATE INDEX `_7yy4zq0mtyj546q_created_idx` ON `listings` (`created`)"
  ]

  return dao.saveCollection(collection)
})
