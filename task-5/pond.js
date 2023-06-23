// const asycIterable = {
//     async *[Symbol.asyncIterator]() {
//         let temperature = 30;
//         return {
//             async next() {
//                 if (!temperature > 40) {
//                     await new Promise(reslove => setTimeout(reslove, 1000));
//                     return{value: temperature + 0.02,done:false};
//                 }
//                 else{
//                     return{done:true};
//                 }
//             }
//         };
//     }

// };


// async function consumerIterable() {
//     for await (const value of asycIterable) {
//         console.log(value);
//     }
// }
// consumerIterable();


let temperature=30;
function checkTemp(temperature){
    if(temperature >= 30 && temperature <= 40){
        const a = setTimeout(increase(temperature),1000);
    }
    console.log(temperature);
}
// class pond{
//     constructor(temperature=30){
//         this.temperature ;
//        }
    
// }
function increase(temperature){
    return temperature = temperature + 0.02;
}
function decrease(temperature){
    return temperature =temperature + 0.01;
}
// const pond1 = new pond;
// console.log(checkTemp(30))
// for (temperature = 30,temperature <= 40; temperature ++){
//     checkTemp(temperature);
// }
