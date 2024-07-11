function AreaOfTriangle(){
    var s1= 5;var s2=6;var s3=7;
    var sp= (s1+s2+s3)/2; //semi-perimeter
    console.log("semi perimeter", sp);

    const area= Math.sqrt(sp*(sp-s1) *(sp-s2)*(sp-s3));
    console.log('Area of triangle',area);
}
AreaOfTriangle();