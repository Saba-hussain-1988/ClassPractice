import inquirer from "inquirer";
import chalk from "chalk";
//take input from user
let calcu = await inquirer.prompt([
    { name: "num1", type: "input", message: "enter the first number:",
        validate: function (num1) {
            let intNum = parseInt(num1);
            let floatNum = parseFloat(num1);
            let isValid = !isNaN(intNum) && !isNaN(floatNum);
            return isValid || 'please enter a valid number.';
        } },
    { name: "oprator", type: "list", message: "select an oprator:",
        choices: ['+', '-', '*', '/', '%', '**'] },
    { name: "num2", type: "input", message: "enter the second number:",
        validate: function (num2) {
            let intNum = parseInt(num2);
            let floatNum = parseFloat(num2);
            let isValid = !isNaN(intNum) && !isNaN(floatNum);
            return isValid || 'please enter a valid number.';
        } }
]);
//print the result according to the user's input
if (calcu.oprator === "+") {
    console.log(chalk.magentaBright(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 + calcu.num2));
}
else if (calcu.oprator === "-") {
    console.log(chalk.cyanBright(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 - calcu.num2));
}
else if (calcu.oprator === "*") {
    console.log(chalk.redBright(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 * calcu.num2));
}
else if (calcu.oprator === "/") {
    if (calcu.num2 === 0) {
        console.log(chalk.bgRed('Can not divided by zero. Please enter a non zero second number.'));
    }
    else {
        console.log(chalk.blue(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 / calcu.num2));
    }
}
else if (calcu.oprator === "%") {
    if (calcu.num2 === 0) {
        console.log(chalk.bgRed('Can not divided by zero. Please enter a non zero second number.'));
    }
    else {
        console.log(chalk.blue(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 / calcu.num2));
    }
}
else if (calcu.oprator === "**") {
    console.log(chalk.green(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 ** calcu.num2));
}
