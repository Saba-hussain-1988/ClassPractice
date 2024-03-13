var clothing = ['ShalwarQameez', 'KurtaPajama', 'Saree'];
var jewllry = ['Bangels', 'Rings', 'EarRings', 'NosePin'];
var makeup = ['NailPaint', 'Eyeliner', 'Eyeshedow', 'LipStick'];
var discounts = [30, 15, 50];
var isSaleValid = [true, false, true];
var womenAccessories = [clothing, jewllry, makeup, discounts, isSaleValid];
console.log(womenAccessories[1]);
console.log(womenAccessories[2][3]); //lipstick
for (var i = 0; i < discounts.length; i++) {
    console.log('List items:\n', womenAccessories[i]);
    var j = 3;
    console.log('Discount:', womenAccessories[j][i] + '%');
    var k = 4;
    var l = womenAccessories[k][i];
    if (l === true) {
        console.log('The sale is still valid.');
    }
    else if (l === false) {
        console.log('The sale has closed now.');
    }
}
// objects in an array
var mango = {
    name: "TotaPari",
};
