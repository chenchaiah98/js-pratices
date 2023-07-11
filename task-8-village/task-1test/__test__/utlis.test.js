

const { villageDteails } = require('../villageDteails');



test('undefined', async () => {
  const result = await villageDteails(`../assignment/village-details.json`);
  expect(result).toMatch(JSON.stringify([{
    "_id": "64a104007b2eaac9034a99d8",
    "index": 0,
    "guid": "4da9aa68-facd-43a1-9f04-5573846d846a",
    "dailyEarning": "$3,084.96",
    "population": 37644,
    "eyeColor": "brown",
    "villageName": "ZILLAR"
  }]));
});