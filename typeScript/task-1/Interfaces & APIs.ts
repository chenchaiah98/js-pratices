// interfaces & APIs:
// *****

// import { userInfo } from "os";

// Start with unit test for below task

// Use interface to define an User with below keys:
//     id: number
//     name: string
//     username: string
//     email: string

// Then use below API to get user details:
//     https://jsonplaceholder.typicode.com/users/<userId>

// Display the above user information in a logger:
//     Use a logger npm like morgan or winston


interface data {
    id:number;
    name: string;
    username:string;
    email: string;
  }

  let url = `https://jsonplaceholder.typicode.com/users/1`
function fetchFunction(url){
    fetch(url)
    .then((responce)=>
    {
        responce.json();
    })
    .then((userData)=>{
        console.log(userData);
    })
}
fetchFunction(url);