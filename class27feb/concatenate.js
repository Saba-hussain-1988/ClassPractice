"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Concatenate
         string supports concatenating with other types of variables.*/
let sing = "song";
let lyrics = 66;
let week = sing + lyrics;
// when I concatenate a string variable with numeric variable.
console.log(week);
//concatenate with boolean
let isFine = true;
let check = sing + isFine;
console.log(check);
////concatenate with null
let did = null;
let have = did + sing;
console.log(have);
//concatenate with undefined
let has = undefined;
let had = has + sing;
console.log(had);
//concatenate with bigint
let are = 3n;
let is = sing + are;
console.log(is);
//concatenate with symbol
let syn = Symbol("lock");
let synt = syn + sing;
// now I learn that other premetive types can concatenate but symbol is not
//concatenate string values wth values of other types
// now I can try with values of other types
console.log('I am ' + 35 + ' years old');
console.log("We use this " + true);
console.log("Now with " + null);
console.log("With " + undefined);
console.log(6n + " is a bigint value.");
// try something complx
console.log('hello' + 5 + 7); // hello57
/* it evaluates left to right
in the first step
hello concatenate with 5
 and thn
 hello5 concatenate with 7  the result will hello57
 we can do like it
  */
console.log('hello' + (5 + 7)); //hello 12
console.log(5 + 'hello' + 7); // 5hello7
console.log(5 + 7 + 'hello'); //12hello
/* as we know it evalutes left to right
5 + 7 = 12
and thn 12 concatenate with hello*/
