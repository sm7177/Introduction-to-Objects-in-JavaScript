// var student = {
//     name: "Subrina",
//     age: 17,
//     grade: 12,
//     game: "football",

// }

// var student2 = {
//     name: "Shambhavi",
//     age: 17,
//     grade: 12,
//     game: "Hockey",

// }

// var no=Math.abs(-30)
// console.log(no)


// var no2=Math.acos(-1)
// console.log(no2)

// var no3=Math.asin(-1)
// console.log(no3)

// var no4=Math.atan(-1)
// console.log(no4)

// var no5=Math.floor(10.09878)
// console.log(no5)


function findMax(){
var max=0;
for (i=0;i<arguments.length;i++) {
    if (arguments[i]>max){
        max=arguments[i];
    }
}
return max;
}
document.getElementById("demo").innerHTML=findMax(10,20,70,17,50);

// document.getElementById("demo").innerHTML = "My name is" + student.name + "my age is " + student.age + "I study in " + student.grade + "and my favorite game is " + student.game

// document.getElementById("demos").innerHTML = "My friend's name is " + student2.name + " and her age is " + student2.age + " She studies in " + student2.grade + " and her favorite game is  " + student2.game

