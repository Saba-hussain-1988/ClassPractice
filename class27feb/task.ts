import { isNull } from "util";

        //print hello world
        console.log ("Hello World");

        console.log ("I'm S.R.Chohan.");


                     //Types of variable
                //1,  Premative types

        // a)  string  
          /*  Represents textual Data.
          */

        let singer:string = "Atif Aslam";
        console.log (singer);    //strong typing

        let singer1 = "Noor Jahan";
        console.log(singer1);    //inferance

        /*Concatenate
        supports concatenating with other types of variables.*/
        let sing:string = "song";
        let lyrics:number = 66;
         let week = sing + lyrics;
          // when I concatenate a string variable with numeric variable.
         console.log(week);
         
         //concatenate with boolean
         let isFine:boolean = true;
         let check = sing + isFine;
         console.log(check);

         ////concatenate with null
        let did:null = null;
        let have = did + sing;
        console.log(have);

        //concatenate with undefined
        let has:undefined = undefined;
        let had = has + sing;
        console.log(had);

        //concatenate with bigint
        let are:bigint = 3n;
        let is = sing + are;
        console.log(is);

        //concatenate with symbol
        let syn:symbol = Symbol("lock");
        let synt = syn + sing;
        // now I learn that other premetive types can concatenate but symbol is not


         //concatenate string values wth values of other types

        // now I can try with values of other types
        console.log ('I am ' + 35 + ' years old');
        console.log("We use this " + true);
        console.log("Now with " + null);
        console.log( "With " + undefined);
        console.log(6n + " is a bigint value.");


        //b) Number
          /*  Represents numeric value, include 'Integers' and floating-points numbers.
          supports arthimatic oprations and methods. */

        let age:number = 35;
        console.log (age);  //strong typing

        let count = 23;  //inferance
        console.log(count);


        //c) boolean

        let isSinger:boolean = true;
        console.log (isSinger);  //strong typing

        let isPaid = true;
        console.log (isPaid);  //inferance

        //d) Undiefined

        let members ;
        console.log (members);// inferance

         let mem = undefined;
        console.log (mem);  // inferance

        let membe:undefined;
        console.log (membe);  // with strong type

        let member:undefined = undefined;
        console.log (member);    


        // Null

        let color = null;
        console.log(color); //inferance

        /*now I learn, the type Null cann't be infere by Type script.
         it should be in strong typing.
         like it:  */

        let colo:null = null;
        console.log (colo);   //strong type


       // bigint

       let int = 6n;
       console.log(int);   //inferance

       let bigNumber:bigint = 25n;
       console.log(bigNumber);
       
       let bignum2:bigint = 76n;

   //bigint supports arithematics oprations

       let result:bigint = bigNumber + bignum2;
       console.log(result); //101n

       let multi:bigint = bigNumber * 2n;
       console.log(multi);   //50n

       let substrac:bigint = bignum2 - multi;
       console.log(substrac);  //26n

       let divis:bigint = multi / bigNumber;
       console.log(divis);  // 2n



       //Symbol
       // used to creat unique identifiers or values

       let fig = Symbol("joy"); //inferance
       console.log(fig);

       let sym1:symbol = Symbol("you"); //strong typing

       let sym2:symbol = Symbol("me");//strong typing

       let sym3:symbol = Symbol("you");//strong typing

       console.log(sym1 === sym2);// false
       console.log(sym1 === sym3);// false

       //sym1 and sym3 having the same description ("you"), they are still different symbols.