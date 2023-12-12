/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wiu3lrsh66aclxe")

  collection.options = {
    "query": "    SELECT \n    fr.id id,\n    fr.created created,\n    fr.updated updated,\n    fr.user_a user_a,\n    fr.user_b user_b,\n    ua.username user_a_name,\n    ub.username user_b_name,\n    ua.avatar user_a_avatar,\n    ub.avatar user_b_avatar,\n    ua.email user_a_email,\n    ub.email user_b_email\n    FROM pocketbook_friends as fr\nleft JOIN pocketbook_user as ua on ua.id = fr.user_a\nleft JOIN pocketbook_user as ub on ub.id = fr.user_b\n"
  }

  // remove
  collection.schema.removeField("qh0roh6m")

  // remove
  collection.schema.removeField("xfmw0h4g")

  // remove
  collection.schema.removeField("ewg8jq9g")

  // remove
  collection.schema.removeField("evdadmsq")

  // remove
  collection.schema.removeField("zic5ealn")

  // remove
  collection.schema.removeField("kspxge1b")

  // remove
  collection.schema.removeField("sinq41ak")

  // remove
  collection.schema.removeField("zfyniqz2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3siqzrdu",
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
    "id": "2ixnnc37",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lchdipvi",
    "name": "user_a_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uiy5rwgy",
    "name": "user_b_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zaikbc9r",
    "name": "user_a_avatar",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c4drzc5r",
    "name": "user_b_avatar",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ggwsm7e",
    "name": "user_a_email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g4xfyjkn",
    "name": "user_b_email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wiu3lrsh66aclxe")

  collection.options = {
    "query": "    SELECT \n    fr.id id,\n    fr.created created,\n    fr.updated updated,\n    fr.user_a user_a,\n    fr.user_b user_b,\n    ua.username user_a_name,\n    ub.username user_b_name,\n    ua.avatar user_a_avatar,\n    ub.avatar user_b_avatar,\n    ua.email user_a_email,\n    ub.email user_b_email\n    FROM pocketbook_friends as fr\nleft JOIN pocketbook_user as ua on ua.id = fr.user_a\nleft JOIN pocketbook_user as ub on ub.id = fr.user_b\nLIMIT 12;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qh0roh6m",
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
    "id": "xfmw0h4g",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ewg8jq9g",
    "name": "user_a_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evdadmsq",
    "name": "user_b_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zic5ealn",
    "name": "user_a_avatar",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kspxge1b",
    "name": "user_b_avatar",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sinq41ak",
    "name": "user_a_email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfyniqz2",
    "name": "user_b_email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("3siqzrdu")

  // remove
  collection.schema.removeField("2ixnnc37")

  // remove
  collection.schema.removeField("lchdipvi")

  // remove
  collection.schema.removeField("uiy5rwgy")

  // remove
  collection.schema.removeField("zaikbc9r")

  // remove
  collection.schema.removeField("c4drzc5r")

  // remove
  collection.schema.removeField("8ggwsm7e")

  // remove
  collection.schema.removeField("g4xfyjkn")

  return dao.saveCollection(collection)
})
