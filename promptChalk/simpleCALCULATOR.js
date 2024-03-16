import inquirer from "inquirer";
import chalk from "chalk";
//take input from user
let calcu = await inquirer.prompt([
    { name: "num1", type: "number", message: "enter the first number:" },
    { name: "oprator", type: "string", message: "put an oprator from them +, -, *, /, % or **;" },
    { name: "num2", type: "number", message: "enter the second number:" }
]);
//print the result according to the user's input
if (calcu.oprator === "+") {
    console.log(chalk.magentaBright(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 + calcu.num2));
}
else if (calcu.oprator === "-") {
    console.log(chalk.bgGreen(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 - calcu.num2));
}
else if (calcu.oprator === "*") {
    console.log(chalk.cyanBright(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 * calcu.num2));
}
else if (calcu.oprator === "/") {
    if (calcu.num2 === 0) {
        console.log('Could not divided by zero, plz enter a non zero second number.');
    }
    else {
        console.log(chalk.blue(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 / calcu.num2));
    }
}
else if (calcu.oprator === "%") {
    if (calcu.num2 === 0) {
        console.log('Could not divided by zero, plz enter a non zero second number.');
    }
    else {
        console.log(chalk.yellowBright(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 % calcu.num2));
    }
}
else if (calcu.oprator === "**") {
    console.log(chalk.green(calcu.num1, calcu.oprator, calcu.num2, '=', calcu.num1 ** calcu.num2));
}
else {
    console.log(chalk.redBright("Invalid input, plz put the correct oprator."));
}
