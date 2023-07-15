let url = `https://jsonplaceholder.typicode.com/users`


async function fetchFunction(url){
    try
    {
        let responce = await fetch(url);
        let data = await responce.json();
        let id = await data; 
        return id;
    }
    catch(error){
        console.log(error);
    }
}
fetchFunction(url)


module.exports = { fetchFunction }
