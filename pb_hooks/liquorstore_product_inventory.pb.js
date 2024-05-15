/// <reference path="../pb_data/types.d.ts" />
// @ts-check

// export type LiquorstoreProductsVariants= Array<{
// size:number;
// price:number;
// quantity:number;
// }>

// interface LiqurestoreProduct{
// name: string;
// brand: string;
// abv: number;
// availability: 'in_stock' | 'out_of_stock';
// variant?: LiquorstoreProductsVariants
// image: File | null;
// description?: string;
// }

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

onRecordBeforeCreateRequest((e) => {
  // const variant = JSON.parse(e.record?.get("variant"));
  const productID = e.record?.get("product");
  const productQty = e.record?.get("quantity");
  const productSize = e.record?.get("size");
  const productPrice = e.record?.get("price");

  if (!productID) {
    throw new ValidationError(
      "Product ID required",
      "Product to be updated requires a valid product ID"
    );
  }

  //   console.log(" ==== productId ==== ",productID)
  //   console.log(" ==== quantity ==== ",productQty)
  //   console.log(" ==== size==== ",productSize)

  //   update the record accordingly
  const record = $app.dao().findRecordById("liquorstore_products", productID);
  // console.log(" ==== record ==== ", record);
  if (!record) {
    throw new ValidationError("Product to update not found", "Product to be updated should exist");
  }

  //    arra of product variants
  const oldProductVariant = JSON.parse(record?.get("variant"));
  const form = new RecordUpsertForm($app, record);

  // console.log(" = ========== oldproduct varaint  ===================== ===== ", oldProductVariant);
  if (!oldProductVariant) {
    throw new ValidationError(
      "Product variant array to update not found",
      "Product variant array to be updated should exist"
    );
  }
  const targetVariantIndex = oldProductVariant.findIndex((vrt) => vrt.size === productSize);
  // console.log("=========== target index  =============== ",targetVariantIndex)

  if (targetVariantIndex === -1) {
    //   update the product quantity
    const newProductVariant = {
      price: productPrice,
      quantity: productQty,
      size: productSize,
    };

    oldProductVariant.push(newProductVariant);
    // or form.loadRequest(request, "")
    form.loadData({
      variant: oldProductVariant,
    });
    // validate and submit (internally it calls $app.dao().saveRecord(record) in a transaction)
    form.submit();
    return;
  }
  const newProductCount =
			productQty + oldProductVariant[targetVariantIndex].quantity;
  if(  newProductCount<0){
    throw new ValidationError("Quantity cannot be less than zero", `Quantity cannot be less than zero ${newProductCount}`);
  }
  //   update the product quantity
		const updatedProductVariant = {
			...oldProductVariant[targetVariantIndex],
			quantity: newProductCount,
		};

  oldProductVariant.splice(targetVariantIndex, 1, updatedProductVariant);
  // or form.loadRequest(request, "")
  form.loadData({
    variant: oldProductVariant,
  });
  // validate and submit (internally it calls $app.dao().saveRecord(record) in a transaction)
  form.submit();
}, "liquorstore_products_inventory");

//  ==============================================================
// ======================= update hook ==========================
//  ==============================================================

onRecordBeforeUpdateRequest((e) => {
  const productID = e.record?.get("product");
  const productQty = e.record?.get("quantity");
  const productSize = e.record?.get("size");
  const productPrice = e.record?.get("price");

  // console.log(" ==== productId ==== ", productID);
  // console.log(" ==== quantity ==== ", productQty);
  // console.log(" ==== size==== ", productSize);
  // console.log(" ==== price==== ", productPrice);

  if (!productID) {
    throw new ValidationError(
      "Product ID required",
      "Product to be updated requires a valide product ID"
    );
  }
  //   fupdate the record accordingly
  const record = $app.dao().findRecordById("liquorstore_products", productID);
  if (!record) {
    throw new ValidationError("Product to update not found", "Product to be updated should exist");
  }
  //    array of product variants
  const oldProductVariant = JSON.parse(record?.get("variant"));
  const form = new RecordUpsertForm($app, record);

  // console.log("=============== oldProductVariant ========================= ", oldProductVariant);
  const targetVariantIndex = oldProductVariant.findIndex((vrt) => vrt.size === productSize);
  // console.log("=========== target index  =============== ", targetVariantIndex);

  if (targetVariantIndex < 0) {
    //   update the product quantity
    const newProductVariant = {
      price: productPrice,
      quantity: productQty,
      size: productSize,
    };

    oldProductVariant.push(newProductVariant);
    // or form.loadRequest(request, "")
    form.loadData({
      variant: oldProductVariant,
    });
    // validate and submit (internally it calls $app.dao().saveRecord(record) in a transaction)
    form.submit();
    return;
  }

  const newProductCount =
			productQty + oldProductVariant[targetVariantIndex].quantity;
		if (newProductCount < 0) {
			throw new ValidationError(
				"Quantity cannot be less than zero",
				`Quantity cannot be less than zero ${newProductCount}`,
			);
		}
  //   update the product quantity
  const updatedProductVariant = {
    ...oldProductVariant[targetVariantIndex],
    quantity: productQty + oldProductVariant[targetVariantIndex].quantity,
  };

  oldProductVariant.splice(targetVariantIndex, 1, updatedProductVariant);
  // or form.loadRequest(request, "")
  form.loadData({
    variant: oldProductVariant,
  });
  // validate and submit (internally it calls $app.dao().saveRecord(record) in a transaction)
  form.submit();
}, "liquorstore_products_inventory");

//  ==============================================================
// ======================= delete hook ==========================
//  ==============================================================

onRecordBeforeDeleteRequest((e) => {
  // const variant = JSON.parse(e.record?.get("variant"));
  const productID = e.record?.get("product");
  const productQty = e.record?.get("quantity");
  const productSize = e.record?.get("size");


  if (!productID) {
    throw new ValidationError(
      "Product ID required",
      "Product to be updated requires a valid product ID"
    );
  }
  //   fupdate the record accordingly
  const record = $app.dao().findRecordById("liquorstore_products", productID);
  // console.log(" ==== record ==== ", record);
  if (!record) {
    throw new ValidationError("Product to update not found", "Product to be updated should exist");
  }

  //    arra of product variants
  const oldProductVariant = JSON.parse(record?.get("variant"));
  const form = new RecordUpsertForm($app, record);

  // console.log(" = ========== oldproduct varaint  ===================== ===== ", oldProductVariant);
  if (!oldProductVariant) {
    throw new ValidationError(
      "Product variant array to update not found",
      "Product variant array to be updated should exist"
    );
  }
  const targetVariantIndex = oldProductVariant.findIndex((vrt) => vrt.size === productSize);

  // if (targetVariantIndex < 0) {
		// 	// console.log("=========== target index  =============== ",targetVariantIndex)
		//   //   update the product quantity
		// 	const newProductVariant = {
		// 		price: productPrice,
		// 		quantity: productQty,
		// 		size: productSize,
		// 	};

		// 	oldProductVariant.push(newProductVariant);
		// 	// or form.loadRequest(request, "")
		// 	form.loadData({
		// 		variant: oldProductVariant,
		// 	});
		// 	// validate and submit (internally it calls $app.dao().saveRecord(record) in a transaction)
		// 	form.submit();
		// 	return;
		// }

		//   update the product quantity

		const newProductCount =
			productQty + oldProductVariant[targetVariantIndex].quantity;
		if (newProductCount < 0) {
			throw new ValidationError(
				"Quantity cannot be less than zero",
				`Quantity cannot be less than zero ${newProductCount}`,
			);
		}
  const updatedProductVariant = {
    ...oldProductVariant[targetVariantIndex],
    quantity: productQty - oldProductVariant[targetVariantIndex].quantity,
  };

  oldProductVariant.splice(targetVariantIndex, 1, updatedProductVariant);
  // or form.loadRequest(request, "")
  form.loadData({
    variant: oldProductVariant,
  });
}, "liquorstore_products_inventory");
