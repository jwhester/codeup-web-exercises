"use strict";

while (true){
    var num =parseInt(prompt("Give me an odd number between 1 and 50."));
    if (num % 2 !== 0 && num <= 50 && num >=1){
        break;
    }
}


for (var q = 1; q <= 50; q += 2) {
    if (q === num) {
        console.log("skipping the number " + num);
        continue;
    }
    console.log(q)
}



