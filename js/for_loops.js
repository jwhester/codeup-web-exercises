"use strict";
function showMultiplicationTable(x) {
    var i = 0;
    while (++i <= 10)
    console.log(x + "x" + i + "=" + x*i)
}
console.log(showMultiplicationTable(7))
for (var y = 0; y < 10; y++){
    var rando = Math.floor(Math.random() * 180) + 20;
    if (rando %2 === 0){console.log(rando + " is even.")}
    else{console.log(rando + " is odd.")}
}

for (var v = 0; v < 1; v++){
    console.log(1);
    console.log(2, 2);
    console.log(3, 3, 3);
    console.log(4, 4, 4, 4,);
    console.log(5, 5, 5, 5, 5);
    console.log(6, 6, 6, 6, 6, 6);
    console.log(7, 7, 7, 7, 7, 7, 7);
    console.log(8, 8, 8, 8, 8, 8, 8, 8);
    console.log(9, 9, 9, 9, 9, 9, 9, 9, 9);
}
for (var p = 105; p > 5;){
    console.log(p -= 5);
}

