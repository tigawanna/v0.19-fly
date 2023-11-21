/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m1ibf55enmz09s6")

  collection.name = "tasky_staff_details"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m1ibf55enmz09s6")

  collection.name = "staff_details"

  return dao.saveCollection(collection)
})
