// function villageDteails (a, b){
//     return a + b;
// }

// module.exports = { villageDteails }

// - Write a javascript function to get all village names with population more than 3000 along with unit tests
var data;
async function villageDteails() {
    let contionData = [];
    fetch('../assignment/village-details.json')
        .then((res) => {
            return res.json();
        }).then((jsonData) => {
            data = jsonData;
            data.map((item) => {
                if (item.population > 3000) {
                    contionData.push(item.villageName);
                }
            })
        })
    return contionData;
}
console.log(villageDteails());
module.exports = { villageDteails  }