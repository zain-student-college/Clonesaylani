// alert('HELLO ZAIN');
// console.log('HI');
// Making Even Number Program
// let numb = 167;

// if (numb % 2 === 0){

//     console.log('Numb is Even', numb);
// }
// else{

//     console.log('Numb is Odd', numb);
// }
// const students = ['Zain','Muzzamil','Shafique'];
// console.table(students);
let marks = Number(prompt('Enter Your Marks'));

if(marks<0 || marks> 100){
console.log('Please Enter Between 0 to 100');
}
else if(marks >=  90 && marks<=100){
console.log('You got A+');
}
else if(marks>=80){
    console.log('You got A');
}
else if(marks>=70){
    console.log('You got B');
}
else if(marks>=60){
    console.log('You got C');
}
else if(marks>=50){
    console.log('You got D');
}
else{
    console.log('Fail hogye ap');
}