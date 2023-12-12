/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wiu3lrsh66aclxe")

  collection.options = {
    "query": "    SELECT \n    fr.id id,\n    fr.created created,\n    fr.updated updated,\n    fr.user_a user_a,\n    fr.user_b user_b,\n    fr.user_a_follow_user_b user_a_follow_user_b,\n    fr.user_b_follow_user_a user_b_follow_user_a,\n    ua.username user_a_name,\n    ub.username user_b_name,\n    ua.avatar user_a_avatar,\n    ub.avatar user_b_avatar,\n    ua.email user_a_email,\n    ub.email user_b_email\n    FROM pocketbook_friends as fr\nleft JOIN pocketbook_user as ua on ua.id = fr.user_a\nleft JOIN pocketbook_user as ub on ub.id = fr.user_b\n"
  }

  // remove
  collection.schema.removeField("i3ym7a3o")

  // remove
  collection.schema.removeField("d7v4deyw")

  // remove
  collection.schema.removeField("h4cw25tz")

  // remove
  collection.schema.removeField("ixmue73p")

  // remove
  collection.schema.removeField("kvwndkrz")

  // remove
  collection.schema.removeField("4epobjt9")

  // remove
  collection.schema.removeField("h5nctnze")

  // remove
  collection.schema.removeField("aermrhb8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i0ufaagf",
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
    "id": "ew6aezwt",
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
    "id": "a5qiam8n",
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
    "id": "dmbw9tef",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dqkbjjkn",
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
    "id": "d2f29kbh",
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
    "id": "injzhmh7",
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
    "id": "wim7rhmm",
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
    "id": "xkzenujf",
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
    "id": "2m4ejiw3",
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
    "query": "    SELECT \n    fr.id id,\n    fr.created created,\n    fr.updated updated,\n    fr.user_a user_a,\n    fr.user_b user_b,\n    ua.username user_a_name,\n    ub.username user_b_name,\n    ua.avatar user_a_avatar,\n    ub.avatar user_b_avatar,\n    ua.email user_a_email,\n    ub.email user_b_email\n    FROM pocketbook_friends as fr\nleft JOIN pocketbook_user as ua on ua.id = fr.user_a\nleft JOIN pocketbook_user as ub on ub.id = fr.user_b\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i3ym7a3o",
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
    "id": "d7v4deyw",
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
    "id": "h4cw25tz",
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
    "id": "ixmue73p",
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
    "id": "kvwndkrz",
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
    "id": "4epobjt9",
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
    "id": "h5nctnze",
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
    "id": "aermrhb8",
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
  collection.schema.removeField("i0ufaagf")

  // remove
  collection.schema.removeField("ew6aezwt")

  // remove
  collection.schema.removeField("a5qiam8n")

  // remove
  collection.schema.removeField("dmbw9tef")

  // remove
  collection.schema.removeField("dqkbjjkn")

  // remove
  collection.schema.removeField("d2f29kbh")

  // remove
  collection.schema.removeField("injzhmh7")

  // remove
  collection.schema.removeField("wim7rhmm")

  // remove
  collection.schema.removeField("xkzenujf")

  // remove
  collection.schema.removeField("2m4ejiw3")

  return dao.saveCollection(collection)
})
