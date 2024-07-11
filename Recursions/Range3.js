function range(x,y){
    if(x>=y){
        return[]
    }
    let result=[]; //declare an empty array
    for(let i=x; i<y;i++){
        result.push(i);

    }
    return result;
}
const x=2;
const y=9;
console.log(range(x,y));