import inquirer from "inquirer";
import chalk from "chalk";
//take input from user
let calcu = await inquirer.prompt([
    { name: "num1", type: "number", message: "enter the first number:",
        validate: function (num1) {
            let isValid = !isNaN(num1);
            return isValid || 'please enter a valid number.';
        } },
    { name: "oprator", type: "list", message: "select an oprator:",
        choices: ['+', '-', '*', '/', '%', '**'] },
    { name: "num2", type: "number", message: "enter the second number:",
        validate: function (num2) {
            let isValid = !isNaN(num2);
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
