/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ipamtot35z4hzln")

  collection.name = "tasky_tasks"
  collection.indexes = [
    "CREATE INDEX `_ipamtot35z4hzln_created_idx` ON `tasky_tasks` (`created`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ipamtot35z4hzln")

  collection.name = "tasks"
  collection.indexes = [
    "CREATE INDEX `_ipamtot35z4hzln_created_idx` ON `tasks` (`created`)"
  ]

  return dao.saveCollection(collection)
})
