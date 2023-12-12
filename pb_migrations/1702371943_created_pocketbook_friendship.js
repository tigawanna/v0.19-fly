/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wiu3lrsh66aclxe",
    "created": "2023-12-12 09:05:43.688Z",
    "updated": "2023-12-12 09:05:43.688Z",
    "name": "pocketbook_friendship",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "    SELECT \n    fr.id id,\n    fr.created created,\n    fr.updated updated,\n    fr.user_a user_a,\n    fr.user_b user_b,\n    ua.username user_a_name,\n    ub.username user_b_name,\n    ua.avatar user_a_avatar,\n    ub.avatar user_b_avatar,\n    ua.email user_a_email,\n    ub.email user_b_email\n    FROM pocketbook_friends as fr\nleft JOIN pocketbook_user as ua on ua.id = fr.user_a\nleft JOIN pocketbook_user as ub on ub.id = fr.user_b\nLIMIT 12;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wiu3lrsh66aclxe");

  return dao.deleteCollection(collection);
})
