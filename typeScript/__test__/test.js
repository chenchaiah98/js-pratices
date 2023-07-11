const {fetchFunction} = require('../user');

test('data of id : 2',async ()=>{
  const result = await fetchFunction(`https://jsonplaceholder.typicode.com/users/2`);
  expect(result).toMatchObject({"address": {"city": "Wisokyburgh", "geo": {"lat": "-43.9509", "lng": "-34.4618"}, "street": "Victor Plains", "suite": 
  "Suite 879", "zipcode": "90566-7771"}, "company": {"bs": "synergize scalable supply-chains", "catchPhrase": "Proactive didactic contingency", "name": "Deckow-Crist"}, "email": "Shanna@melissa.tv", "id": 2, "name": "Ervin Howell", "phone": "010-692-6593 x09125", "username": "Antonette", "website": "anastasia.net"});
});


test('data of id : 1', async () => {
  const result = await fetchFunction(`https://jsonplaceholder.typicode.com/users/1`);
  expect(result).toMatchObject({"address": {"city": "Gwenborough", "geo": {"lat": "-37.3159", "lng": "81.1496"}, "street": "Kulas Light", "suite": "Apt. 556", "zipcode": "92998-3874"}, "company": {"bs": "harness real-time e-markets", "catchPhrase": "Multi-layered client-server neural-net", "name": "Romaguera-Crona"}, "email": "Sincere@april.biz", "id": 1, "name": "Leanne Graham", "phone": "1-770-736-8031 x56442", "username": "Bret", "website": "hildegard.org"});
});
