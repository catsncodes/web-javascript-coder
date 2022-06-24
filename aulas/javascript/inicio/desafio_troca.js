let a = 7;
let b = 94;

console.log("a = " + a);
console.log("b = " + b);

/* let temp = a;
a = b;
b = temp; */
[a, b] = [b, a];

console.log("-------");
console.log("a = " + a);
console.log("b = " + b);
