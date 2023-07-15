// - Write a javascript function to get all village names with population more than 3000 along with unit tests
var villageData;

async function villageDteailsId() {
    try {
        let responce = await fetch('../assignment/village-details.json');
        let responceData = await responce.json();
        let [...data] = await responceData.id;
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}


async function villageDteails() {
    try {
        let responce = await fetch('../assignment/village-details.json');
        let responceData = await responce.json();
        let [...data] = await responceData;
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

// async function villageDteails() {
//     try {
//         let responce = await fetchData();
//         return responce;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

console.log(villageDteails());
console.log(villageDteailsId());

// let contionData = [];

// function findPopulation(array, condition) {
//     array.map((item) => {
//         if (condition) {
//             contionData.push(item.villageName);
//         }
//     })
// }

// findPopulation(villageData, (item.population > 3000));
module.exports = { villageDteails ,villageDteailsId}