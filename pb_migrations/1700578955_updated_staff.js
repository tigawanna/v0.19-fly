/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dlvnttlfiw585jv")

  collection.name = "utility_staff"
  collection.indexes = [
    "CREATE INDEX `_dlvnttlfiw585jv_created_idx` ON `utility_staff` (`created`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dlvnttlfiw585jv")

  collection.name = "staff"
  collection.indexes = [
    "CREATE INDEX `_dlvnttlfiw585jv_created_idx` ON `staff` (`created`)"
  ]

  return dao.saveCollection(collection)
})
