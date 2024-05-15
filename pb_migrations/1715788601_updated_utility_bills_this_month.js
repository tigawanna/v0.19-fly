/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlx5h0gnt1flbyq")

  collection.options = {
    "query": "SELECT id FROM utility_bills\n"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlx5h0gnt1flbyq")

  collection.options = {
    "query": "SELECT id FROM utility_bills\nWHERE month=3 AND year=2024"
  }

  return dao.saveCollection(collection)
})
