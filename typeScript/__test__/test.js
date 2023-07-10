const {fetchFunction} = require('../util');

test('data of id : 2',async ()=>{
  const result = await fetchFunction(`https://jsonplaceholder.typicode.com/users/2`);
  expect(result).toBe(2);
});


test('data of id : 1', async () => {
  const result = await fetchFunction(`https://jsonplaceholder.typicode.com/users/1`);
  expect(result).toBe(1);
});
