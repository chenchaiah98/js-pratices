// - Write a javascript function to get all village names with dailyEarning more than $5000 along with unit tests
let villageData =[] ;
async function fetchDeatils(){
    try{
    const responce =await fetch('../assignment/village-details.json');
    const data = await responce.json();
    data.map((item)=>{
        if(parseInt(item.dailyEarning.slice(1,-1)) >5){
            villageData.push(item);
        }
    });
    console.log(villageData)
    }
    catch(error){
        console.log(error);
    }
}
fetchDeatils();