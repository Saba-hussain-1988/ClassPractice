import inquirer from "inquirer";
import chalk from "chalk";
//take input from user
let calcu = await inquirer.prompt([
    { name: "num1", type: "number", message: "enter the first number:",
        validate: function (value) {
            let intValue = parseInt(value);
            let floatValue = parseFloat(value);
            let isValid = !isNaN(intValue) && !isNaN(floatValue) && intValue > 0 && floatValue > 0;
            return isValid || 'please enter a valide number greater than 0.';
        } },
    { name: "oprator", type: "list", message: "select an oprator:",
        choices: ['+', '-', '*', '/', '%', '**'] },
    { name: "num2", type: "number", message: "enter the second number:",
        validate: function (value) {
            let intValue = parseInt(value);
            let floatValue = parseFloat(value);
            let isValid = !isNaN(intValue) && !isNaN(floatValue) && intValue > 0 && floatValue > 0;
            return isValid || 'please enter a valid number greater than 0.';
        } }
]);
//print the result according to the user's input
if (calcu.oprator === "+") {
    console.log(chalk.magentaBright(`${calcu.num1} ${calcu.oprator} ${calcu.num2} = ${calcu.num1 + calcu.num2}`));
}
else if (calcu.oprator === "-") {
    console.log(chalk.cyanBright(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 - calcu.num2));
}
else if (calcu.oprator === "*") {
    console.log(chalk.redBright(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 * calcu.num2));
}
else if (calcu.oprator === "/") {
    console.log(chalk.blue(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 / calcu.num2));
}
else if (calcu.oprator === "%") {
    console.log(chalk.yellowBright(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 % calcu.num2));
}
else if (calcu.oprator === "**") {
    console.log(chalk.green(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 ** calcu.num2));
}
