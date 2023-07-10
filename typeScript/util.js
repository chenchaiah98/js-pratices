// function sum (a, b){
//     return a + b;
// }

// module.exports = { sum }



// interface data {
//     id:number;
//     name: string;
//     username:string;
//     email: number;
// }

let url = `https://jsonplaceholder.typicode.com/users/1`



 async function fetchFunction(url1){
   let responce =await fetch(url1)
    let data = await responce;
        // return userData.id;
        console.log(data);
        return(data.id);
}
// fetchFunction(url)

exports = { fetchFunction };