/// <reference path="../pb_data/types.d.ts" />
// @ts-check


// interface LiqurestoreProductInventory{
//   product?: string;
// 	size?: number;
// 	quantity?: number;
//  price?:number;
// }

//  pocketbase hook to update the liquorstore_product count whenever uitems in prdoduct_inventory are added/ rmoved

//  ==============================================================
// =======================  create  hook ==========================
//  ==============================================================

// // prints "Hello!" every 2 minutes
// cronAdd("hello", "*/2 * * * *", () => {
// 	//  fetch collection by name  or ID
// 	const collection = $app
// 		.dao()
// 		.findCollectionByNameOrId("liquorstore_products_inventory");
// 	const record = new Record(collection);
// 	const form = new RecordUpsertForm($app, record);

// 	// or form.loadRequest(request, "")
// 	form.loadData({
// 		product: "1l7uh7duriintep",
// 		price: 3000,
// 		quantity: 2,
// 		size: 450,
// 	});

// 	// validate and submit (internally it calls $app.dao().saveRecord(record) in a transaction)
// 	form.submit();
//   console.log("cron ran successfully");
// });
