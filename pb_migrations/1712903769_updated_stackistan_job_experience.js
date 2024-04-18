/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bmxenzyzrg1unq")

  collection.name = "stackistan_user_job_experience"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bmxenzyzrg1unq")

  collection.name = "stackistan_job_experience"

  return dao.saveCollection(collection)
})
