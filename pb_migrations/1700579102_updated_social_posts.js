/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu")

  collection.name = "pocketbook_posts"
  collection.indexes = [
    "CREATE INDEX `_vbse1l0qet8z4hu_created_idx` ON `pocketbook_posts` (`created`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu")

  collection.name = "social_posts"
  collection.indexes = [
    "CREATE INDEX `_vbse1l0qet8z4hu_created_idx` ON `social_posts` (`created`)"
  ]

  return dao.saveCollection(collection)
})
