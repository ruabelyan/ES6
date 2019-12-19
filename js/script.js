// var city1 = {
//     name:"Yerevan",
//     population:3000000
// }

// // // console.log(city1)

// // var city2 = {
// //     name:"Kanada",
// //     population:2600000
// // }

// function isEmpty(a){
//     for (const key in a) {
      
//            return a[key]
            
        
//     }
//     }
//     isEmpty(city1)

const menq = {
    Narek:3000,
    Ruben:-1000,
    Edgar:15000,
    Ruben2: 'hello'
}
var g = 0;

for (const key in menq) {
    
    const sum = menq[key]
    if(sum > 0){
         
        g = g + sum
    }
    
   
   
}
console.log(g)

// var arr = [1,5,6,7];
// var g = 0
// for (var i = 0; i < arr.length; i++) {

//     g = arr[i]+ g
   
   
// }
// console.log(g)