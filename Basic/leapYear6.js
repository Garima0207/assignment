function CheckLeapYear(year){
if (year%4==0 || year%400==0)
    return true;

else if(year %100==0)
    return false;
else
return false;
}

console.log(CheckLeapYear(2024));