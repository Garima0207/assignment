const readline = require("readline");
function MulAndDiv() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the first number: ', (input1) => {
        let num1 = parseFloat(input1);
        rl.question('Enter the second number: ', (input2) => {
            let num2 = parseFloat(input2);
            let multiplication = num1 * num2;
            let division = num1 / num2;
            console.log(`Multiplication of ${num1} and ${num2} is: ${multiplication}`);
            console.log(`Division of ${num1} by ${num2} is: ${division}`);
            rl.close();
        });
    });
}
MulAndDiv();