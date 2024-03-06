"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let ans = await inquirer_1.default.prompt([{
        name: "age",
        type: "number",
        message: "enter your age:"
    }
]);
console.log(chalk_1.default.green("insha Allah, in " + (50 - ans.age) + " years you will be 50 years old,"));
