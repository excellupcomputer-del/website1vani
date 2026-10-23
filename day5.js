//  task 1

  function printNumber1(){  
for(let i = 1; i <=10; i++){
    console.log(i); 
}
} 


function  numberOf1(){ 
    //print 10 to 1                                                        
for(let i = 10; i >=0; i--){
    console.log(i);    
}
}

function printEven1(){
for(let i = 0; i <= 10; i++) {
if(i % 2 == 0){
     console.log(i);   
}   
}
}

function printOdd1(){
for(let i = 1; i < 10; i++){
    if(i % 2 != 0){
        console.log(i);    
    }
}
}   

function printTable1(){
for(let i = 1; i <= 10; i++){
    
  console.log( "5" + "x" + i + "=" + i * 5);
    
}
}


// task 2

function printNumber2(){
let j = 1;
while (j<= 10){
    console.log(j);
    j++;
}
}
                
function numberOfj(){
let j = 10;
while (j >= 1){
    console.log(j);
    j--;
}
}

function printEven2(){
let j = 1;
while (j <= 20){
    if(j % 2 == 0){
        console.log(j);
    }
     j++; 
}
}

function printOdd2(){
let j = 1;
while (j <= 15){
    if(j % 2 !=0){
        console.log(j);
    
    }
    j++;
}
}

function printTable2(){
let j = 5;
while(j <= 50){
    if(j % 5 == 0){
        console.log(j);    
    }
    j++;
}
}


// task 3

function printNumber3(){
let k = 1;
do{
    console.log(k);
    k++;
} while(k<=10);
}

function numberOf3(){
let k = 10;
do{
    console.log(k);
    k--;
} while(k >= 1);
}

function printEven3(){
let k = 1;
do{
    if(k % 2 == 0){
        console.log(k);
        
    }
    k++
} while(k <=20)
}

function printOdd3(){
let k = 1;
do{
    if(k % 2 != 0){
        console.log(k);
        
    }
    k++
}while(k <= 15)
}

function printTable3(){
let k = 1;
do{
    
        console.log("7" + "x" + k + "=" + k * 7);
        
    k++;
}while(k <= 10)
}



function sumOfNumber1(){
    let num = prompt("enter number")
    let sum = 0;

    for(let i = 0; i<=num; i++){
    console.log(i)
    sum = sum + i;
    console.log("sum of number",sum);
    
    }
    }
    

    
function printNumber11(){
    let number = prompt("enter number")
    let sume = 0;

    for(let i = 0; i<=number; i = i + 2){
    console.log(i)
    sume = sume + i;
    console.log("sum of number",sume);
    }
    }

function printNumber22(){
    let number = prompt("enter number")
    let sume = 0;

    for(let i = 1; i<=number; i = i - 2){
    console.log(i)
    sume = sume + i;
    console.log("sum of number",sume);
    
    }
    }


    function printTable33(){
        let num = Number(prompt("Enter number:"));
        let i = 1;
        while(i <= 10){
            console.log(num + "x" + i + "=" + i * num);
           i++; 
        }
    }


    function sumOfNumber2(num1 , num2) {
       return num1 + num2;
    }

    let result = sumOfNumber(8, 9);
    console.log(sumOfNumber(8, 9))
    
  
