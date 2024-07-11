function LargestNumber(num1,num2){
    if(num1>num2){
        console.log(`${num1} is greater that ${num2}`);
    }
    else if(num2>num1){
        console.log(`${num2} is greater than ${num1}`);
    }
    else{
        console.log("Both numbers are equal")
    }
    
}
const num1=2;
const num2=3;
LargestNumber(num1,num2);