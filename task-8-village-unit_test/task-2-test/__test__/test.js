const {fetchDeatils} = require('../villageSalary');

test("undefined",async ()=>{
    const result = await fetchDeatils(`../assignment/village-details.json`);
    expect(result).toBe(undefined);
})