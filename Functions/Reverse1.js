function Reverse(){
  var number= 12345;
  var reverse=0;
  while(number!==0){
    let digit= number%10;
    reverse= reverse*10+digit;
    number=Math.floor(number/10);
  }
  console.log(reverse);
}
Reverse();