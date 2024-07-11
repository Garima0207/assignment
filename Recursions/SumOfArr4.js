function sumOfArray(arr){
    let sum=0;
    for(let i=0;i<=arr.length-1;i++){
        sum= sum+arr[i];
    }
    return sum;

}
const numbers=[1,2,3,4,5,6];
console.log("sum ", sumOfArray(numbers));
