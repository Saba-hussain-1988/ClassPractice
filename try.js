"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var ans = await inquirer_1.default.prompt([{
        name: "age",
        type: "number",
        message: "enter your age:"
    }
]);
console.log(chalk_1.default.green("insha Allah, in " + (50 - ans.age) + " years you will be 50 years old,"));
