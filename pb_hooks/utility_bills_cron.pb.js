/// <reference path="../pb_data/types.d.ts" />
// @ts-check

// $app

cronAdd("bumpBillsEveryMonth", "5 0 1 * *", () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const previousMonth = currentMonth === 12 ? 1 : currentMonth - 1;
  //  the previous yer will be the current month unless if the current month is december
  const previousYear = currentMonth === 12 ? currentYear - 1 : currentYear;

function getPeriodBill() {
    const records = $app.dao().findRecordsByFilter(
      "utility_bills", // collection
      "month = {:month} && year = {:year}", // filter
      "-created", // sort
      500, // limit
      0, // offset
      { month: previousMonth, year: previousYear } // optional filter params
    );
    return records;
  }

  console.log("=========== bumpBillsEveryMonth cron running ============");
  const bills = getPeriodBill();
  for (const bill of bills) {
    if (!bill) return;
    const collection = $app.dao().findCollectionByNameOrId("utility_bills");
    const record = new Record(collection);
    const form = new RecordUpsertForm($app, record);

    const newRecord = {
      shop: bill.get("shop"),
      elec_readings: bill.get("elec_readings"),
      water_readings: bill.get("water_readings"),
      month: currentMonth,
      year: currentYear,
    };
    console.log("============= new record ============= ", JSON.stringify(newRecord, null, 2));
    form.loadData(newRecord);
    form.submit();
  }
  //   console.log(" ============ bills =============== ", JSON.stringify(bills));
});
