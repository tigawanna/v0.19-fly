/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mp2cbmdlp96vm9u")

  collection.name = "stackistan_user_resume_profile"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mp2cbmdlp96vm9u")

  collection.name = "stackistan_resume_profile"

  return dao.saveCollection(collection)
})
