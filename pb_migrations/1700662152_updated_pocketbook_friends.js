/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rjrl9uzeu508rf3")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_8UuzTgQ` ON `pocketbook_friends` (\n  `user_a`,\n  `user_b`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vimtxkr9",
    "name": "user_a_follow_user_b",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "yes",
        "no"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rcqmnbcc",
    "name": "user_a",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5sckr8a13top3zs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "edxloh70",
    "name": "user_b",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5sckr8a13top3zs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "scq8yqvr",
    "name": "user_b_follow_user_a",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "yes",
        "no"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rjrl9uzeu508rf3")

  collection.indexes = []

  // remove
  collection.schema.removeField("vimtxkr9")

  // remove
  collection.schema.removeField("rcqmnbcc")

  // remove
  collection.schema.removeField("edxloh70")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "scq8yqvr",
    "name": "user_a_follow_user_b",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "yes",
        "no"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
