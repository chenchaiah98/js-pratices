// - Write a javascript function to get all unique eye colors from all villages along with unit tests 

let villageData =[] ;
async function fetchDeatils(){
    try{
    const responce =await fetch('../assignment/village-details.json');
    const data = await responce.json();
    data.map((item)=>{
        if(item){
            villageData.push(item.eyeColor);
        }
    });
    console.log(new Set(villageData));
    }
    catch(error){
        console.log(error);
    }
}
fetchDeatils();