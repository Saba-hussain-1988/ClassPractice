        //print hello world
        console.log ("Hello World");

        console.log ("I'm S.R.Chohan.");


                   //Types of variable
           //1,  Premative types

        // a)  string  

        let singer:string = "Atif Aslam";
        console.log (singer);    //strong typing

        let singer1 = "Noor Jahan";
        console.log(singer1);    //inferace


        //b) Number

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
        console.log (members);// with any type

         let mem = undefined;
        console.log (mem);  // // with any type

        let membe:undefined;
        console.log (membe);  // with strong type

        let member:undefined = undefined;
        console.log (member);    


        // Null

        let color = null;
        console.log(color); //any type

        let colo:null = null;
        console.log (colo);   //strong type


       // bigint

       let bigNumber:bigint = 234500n;
       console.log(bigNumber);

       //bigint supports arithematics oprations
       let bignum2:bigint = 9823576n;

       let result:bigint = bigNumber + bignum2;
       console.log(result);


       //Symbol
       // used to creat unique identifiers or values

       let sym1 = Symbol("you");

       let sym2 = Symbol("me");

       let sym3 = Symbol("you");

       console.log(sym1 === sym2);// false
       console.log(sym1 === sym3);// false

       //sym1 and sym3 having the same description ("you"), they are still different symbols.