let clothing = ['ShalwarQameez', 'KurtaPajama', 'Saree'];
let jewllry = ['Bangels', 'Rings', 'EarRings', 'NosePin'];
let makeup = ['NailPaint', 'Eyeliner', 'Eyeshedow', 'LipStick'];
let discounts = [30, 15, 50];
let isSaleValid = [true, false, true];
let womenAccessories = [clothing, jewllry, makeup, discounts, isSaleValid];
console.log(womenAccessories[1]);
console.log(womenAccessories[2][3]); //lipstick
for (let i = 0; i < discounts.length; i++) {
    console.log('Clothing items:\n', womenAccessories[i]);
    let j = 3;
    console.log('Discount:', womenAccessories[j][i] + '%');
    let k = 4;
    let l = womenAccessories[k][i];
    if (l === true) {
        console.log('The sale is still valid.');
    }
    else if (l === false) {
        console.log('The sale has closed now.');
    }
}
export {};
