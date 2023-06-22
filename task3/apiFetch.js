
// Assignment:
// Refer for API contract  :    https://jsonplaceholder.typicode.com/guide.html

// 0. Practice all above details

// 1. Try to update a 'post' resource (Method: PUT)

// 2. Try to do a partial 'post' update (Method: PATCH)

// 3. Try to delete a 'post'  (Method: DELETE)

// 4. In all above scenarios,  add the div to the document object


// knows methos
// example

// POst

let data1 = {
  name: "Rahul",
  gender: "Male",
  email: "rahul@gmail.com",
  status: "Active"
};

let optionsPost = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ACCESS-TOKEN"
  },
  body: JSON.stringify(data)
};






put

let data = {
  name: "Rahul Attuluri"
};

let optionsPut = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ACCESS-TOKEN"
  },
  body: JSON.stringify(data)
};





Delete

let optionsDelete = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ACCESS-TOKEN"
  }
};