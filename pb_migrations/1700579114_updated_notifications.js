/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q2inux1nn05ynut")

  collection.name = "pocketbook_notifications"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q2inux1nn05ynut")

  collection.name = "notifications"

  return dao.saveCollection(collection)
})
