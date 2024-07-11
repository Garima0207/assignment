function Findexponent(base,exponent){
    let result=1;
    for(let i=0; i<exponent;i++){
        result=result*base;
    }
    return result;
}
const base=2;
const exponent=3;
console.log(Findexponent(base,exponent));