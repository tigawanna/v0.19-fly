/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykz3kuydayuev4j")

  collection.name = "stackistan_user_job_application"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ykz3kuydayuev4j")

  collection.name = "stackistan_job_application"

  return dao.saveCollection(collection)
})
