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

// fires only for "users" and "articles" collections
onRecordBeforeCreateRequest((e) => {
  	const variant = JSON.parse(e.record?.get("variant"));
		if (!variant) {
			throw new ValidationError(
				"invalid product variant",
				"Product variant json with array {price:number;size:number} is required",
			);
		}

		if (!Array.isArray(variant)) {
			throw new ValidationError(
				"invalid product variant",
				"Product variant json with array {price:number;size:number} is required",
			);
		}
		if (variant.length < 1) {
			throw new ValidationError(
				"invalid product variant",
				"Product variant json with array {price:number;size:number} is required",
			);
		}

    for (let i = 0; i < variant.length; i++) {
			const v = variant[i];
			if (!v.price) {
				throw new ValidationError(
					"invalid product variant",
					`Missing product variant "price" for record ${v}`,
				);
			}
			if (!v.size) {
				throw new ValidationError(
					"invalid product variant",
					`Missing product variant "size" for record ${v}`,
				);
			}
			if (!v.quantity) {
				throw new ValidationError(
					"invalid product variant",
					`Missing product variant "quantity) {" for record ${v}`,
				);
			}
		}

}, "liquorstore_products");

onRecordBeforeUpdateRequest((e) => {

	const variant = JSON.parse(e.record?.get("variant"));
	// console.log(" e.record.get(variant)==== ", variant);
	if (!variant) {
		throw new ValidationError(
			"invalid product variant",
			"Product variant json with array {price:number;size:number} is required",
		);
	}

	if (!Array.isArray(variant)) {
		throw new ValidationError(
			"invalid product variant",
			"Product variant json with array {price:number;size:number} is required",
		);
	}
	if (variant.length < 1) {
		throw new ValidationError(
			"invalid product variant",
			"Product variant json with array {price:number;size:number} is required",
		);
	}

	for (let i = 0; i < variant.length; i++) {
		const v = variant[i];
    if (!v.price) {
			throw new ValidationError(
				"invalid product variant",
				`Missing product variant "price" for record ${v}`,
			);
		}
		if (!v.size) {
			throw new ValidationError(
				"invalid product variant",
				`Missing product variant "size" for record ${v}`,
			);
		}
		if (!v.quantity) {
			throw new ValidationError(
				"invalid product variant",
				`Missing product variant "quantity) {" for record ${v}`,
			);
		}
	}
}, "liquorstore_products");
