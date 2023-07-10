
// const { sum } = require('../util');

const {fetchFunction} =require('../util');
test('data of id : 1',()=>{
  const result = fetchFunction(`https://jsonplaceholder.typicode.com/users/1`);
  expect(result).toBe(1);
});


// // All below tests should be based on 'Acceptance Criteria'
// test('adds two positive numbers correctly', () => {
//   const result = sum(2, 3);
//   expect(result).toBe(5);
// });

// test('adds a positive number and zero correctly', () => {
//   const result = sum(4, 0);
//   expect(result).toBe(4);
// });

// test('adds a positive number and a negative number correctly', () => {
//   const result = sum(6, -3);
//   expect(result).toBe(3);
// });

// test('adds two negative numbers correctly', () => {
//   const result = sum(-8, -2);
//   expect(result).toBe(-10);
// });

// // Bad test case.
// test('adds two strings', () => {
//     const result = sum('10', '10')
//     expect(result).toBe('1010')
// })

// /*
// test('', function(){
  
// })
// */