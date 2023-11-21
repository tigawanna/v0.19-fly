/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wcaptlpivjve1o")

  collection.name = "pocketbook_reactions"
  collection.indexes = [
    "CREATE INDEX `_4wcaptlpivjve1o_created_idx` ON `pocketbook_reactions` (`created`)",
    "CREATE UNIQUE INDEX `one_user_one_post_reaction_unq_idx` ON `pocketbook_reactions` (\n  `user`,\n  `post`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wcaptlpivjve1o")

  collection.name = "reactions"
  collection.indexes = [
    "CREATE INDEX `_4wcaptlpivjve1o_created_idx` ON `reactions` (`created`)",
    "CREATE UNIQUE INDEX `one_user_one_post_reaction_unq_idx` ON `reactions` (`user`, `post`)"
  ]

  return dao.saveCollection(collection)
})
