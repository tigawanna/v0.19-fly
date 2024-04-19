/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6cn0u02mwxy26z4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5gcxvfl1",
    "name": "shipping_fee",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6cn0u02mwxy26z4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5gcxvfl1",
    "name": "shipping_fee",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
