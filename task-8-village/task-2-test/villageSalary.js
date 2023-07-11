// - Write a javascript function to get all village names with dailyEarning more than $5000 along with unit tests
let villageData =[] ;
async function fetchDeatils(url){
    try{
    const responce =await fetch(url);
    const data = await responce.json();
    data.map((item)=>{
        if(parseInt(item.dailyEarning.slice(1,-1)) > 5){
            villageData.push(item);
        }
    });
    return (villageData);
    }
    catch(error){
        console.log(error);
    }
}
fetchDeatils(`../assignment/village-details.json`);
module.exports ={ fetchDeatils } 