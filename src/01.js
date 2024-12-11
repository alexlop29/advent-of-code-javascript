var fs = require('fs');

let data = fs.readFileSync('./input/01.txt', 'utf8');
let lines = data.split('\n');
console.log(`lines`, lines);

let arr1 = [];
let arr2 = [];

lines.forEach((line) => {
    let split = line.split(" ");
    console.log(`split`, split);
    arr1.push(Number(split[0]));
    arr2.push(Number(split[3]));
});

arr1.sort((a, b) => b - a);
arr2.sort((a, b) => b - a);

let sum = 0;
let length = arr1.length-1;
let index = 0;

while (index <= length-1){
    let distance = Math.abs((arr1[index]-arr2[index]));
    console.log(`distance`, distance);
    sum += distance;
    index++;
};

console.log(sum);

// ===============================================================

let similarityScore = 0;

arr1.forEach((num) => {
    let counter = 0;
    function checkIfExists(num){
        let index = arr2.indexOf(num);
        if (index == -1) return false;
        arr2.splice(index, 1);
        return true;
    };

    while (checkIfExists(num)){
        counter++;
    };

    let calc = num * counter;
    similarityScore += calc;
})

console.log(`similarlity score`, similarityScore);
