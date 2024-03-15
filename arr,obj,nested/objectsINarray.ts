// if I wanna use objects in array thn how can I describe the type of array?
// which one item is saled out, try to remove from the array


let item1:{cloth:string, designNUmber:string, color:string[],
        isAvailable:boolean, isInSale:boolean, size: string[],
        price:{
            salePrice?:number, fullPrice:number
        }, bundleOf:number,
    } = {cloth:"80% cotton", designNUmber:"EZ305", color:["blue", "black", "seagreen"],
        isAvailable: true, isInSale:false, size:["small", "medium", "large"],
        price:{
             fullPrice: 4050
        }, bundleOf: 12,
    } ;

let item2:{cloth:string, designNUmber:string, color:string[],
        isAvailable:boolean, isInSale:boolean, size: string[],
        price:{
            salePrice?:number, fullPrice:number
        }, bundleOf:number,
    } = {cloth:"100% cotton", designNUmber:"ZP211", color:["medium brown", "golden black", "rust pink"],
        isAvailable: true, isInSale:true, size:["large", "extra Large"],
        price:{
            salePrice:2590, fullPrice:3500
        }, bundleOf:6,
    } ;

let item3:{cloth:string, designNUmber:string, color:string[],
        isAvailable:boolean, isInSale:boolean, size: string[],
        price:{
            salePrice?:number, fullPrice:number
        }, bundleOf:number,
    } = {cloth:"100% cotton", designNUmber:"SK1902", color:["light green", "light blue", "ash white", "apple white"],
        isAvailable:true, isInSale:false, size:["small", "medium", "large"],
        price:{
              fullPrice:3099
        }, bundleOf:2,
    } ;

let item4:{cloth:string, designNUmber:string, color:string[],
        isAvailable:boolean, isInSale:boolean, size: string[],
        price:{
            salePrice?:number, fullPrice:number
        }, bundleOf:number,
    } = {cloth:"Polyster", designNUmber:"ZK808", color:["peach & Black", "gray & Black"],
        isAvailable: false, isInSale: false, size:["small", "medium", "large"],
        price:{
             fullPrice: 5000,
        }, bundleOf:6,
    }; 

    let babaSuits=[item1, item2, item3, item4];


    // lets check and remove

    for (let i = 0; i <babaSuits.length; i++) {
        if (babaSuits[i].isAvailable === false) {
            babaSuits.splice(i, 1);
            console.log(babaSuits[i].designNUmber, "is sale out. Available again after a week.")
        }
    }