let numbers = [1,2,3,4,5,77,6,32,3,4,6,7,778,6,54]

let min = numbers.reduce ((a, b)=> Math.min(a,b));
console.log(min);

let max = Math.max.apply(null, numbers);
console.log(max);