let url = `https://jsonplaceholder.typicode.com/users/1`


async function fetchFunction(url){
    try
    {
        let responce = await fetch(url);
        let data = await responce.json();
        let id = await data.id;
        return id;
    }
    catch(error){
        console.log(error);
    }
}



module.exports = { fetchFunction }
