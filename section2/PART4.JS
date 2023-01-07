const bill = 430 ; 
const tip = bill <= 300 && bill >= 5 ? bill * 0.15 : bill *0.2 ; 
console.log(`the bill was ${bill} , the tip was ${tip} end the total value ${bill + tip}`);