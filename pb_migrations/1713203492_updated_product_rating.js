/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yn3523fgovgg0o1")

  collection.name = "liquorstore_product_rating"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yn3523fgovgg0o1")

  collection.name = "product_rating"

  return dao.saveCollection(collection)
})
