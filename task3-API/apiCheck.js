let divTag=document.getElementById('show'); //selecting div with id name as "show"
let btn = document.getElementById('btn'); // button selection


const dataFetch = async(url,options)=>{ // fetch data from api using async function 
    try{
    let resource =await fetch(url,options);
    let response =await resource.json();
        if(response != null && response!="" ){
        var div =document.createElement('div');
        div.innerText =response.title;
        divTag.appendChild(div);
    }
    console.log(response.title);
}
catch(error){
    throw error;
}
};

// get method
function getData(){

const url = 'https://jsonplaceholder.typicode.com/post/1'
const options = {
    method: "GET",
    headers:{
        "Content-Type":"application/json",
        Accept: "application/json",
        Authorization: "bearer ",
    },
    body: JSON.stringify(),

}
const data = new Promise((reslove,reject)=>{
    try{
    reslove(dataFetch(url,options));
}catch(error){
console.log(error);
}
})
}




btn.addEventListener('click',()=>{
    console.log('calling... api');
    getData();
    console.log('end of api call')
});
