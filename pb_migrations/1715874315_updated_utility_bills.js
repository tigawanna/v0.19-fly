/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.indexes = [
    "CREATE INDEX `idx_BzlhII2` ON `utility_bills` (\n  `year`,\n  `month`,\n  `shop`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.indexes = [
    "CREATE INDEX `idx_BzlhII2` ON `utility_bills` (\n  `year`,\n  `month`\n)"
  ]

  return dao.saveCollection(collection)
})
