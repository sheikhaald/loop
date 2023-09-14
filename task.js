for (counter = 1; counter <= 10; counter++) {
  console.log(counter);
}

for (let counter = 2; counter <= 20; counter = counter + 2) {
  console.log(counter);
}

let counter3 = 1;
let sum = 0;
while (counter3 <= 100) {
  sum = sum + counter3;
  counter3++;
}

const num = [2, 3, 4, 5, 6, 7];
let sum4 = 0;
for (let counter = 0; counter <= num.length; counter++) {
  sum4 = sum4 + num(counter);
}
console.log(sum4);
