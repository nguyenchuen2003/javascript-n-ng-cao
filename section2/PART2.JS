// PART 2 
const massMark = 78 ; 
const heightMark = 1.69 ; 
const massJohn = 85 ; 
const heightjohn = 1.76 ; 

const BMIMark = massMark / heightMark **2 ; 
const BMIJohn = massJohn / (heightjohn*heightjohn) ; 
 console.log(BMIJohn,BMIMark);
if(BMIJohn > BMIMark ){
    console.log(`chỉ số BMI(${BMIJohn}) của John lớn hơn BMI(${BMIMark}) của Mark`);
} else {
    console.log(`chỉ số BMI(${BMIMark}) của Mark lớn hơn BMI(${BMIJohn}) của John`);
}