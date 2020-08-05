// const = Constant [it will never change]
// let = it can changeable but it will not leack



var i = 13;

for(var i = 0; i < 5; i++) {
   console.log(i);
}

console.log('Value: ' + i);

let i6 = 13;

for(let i6 = 0; i6 < 5; i6++) {
   console.log(i6);
}

console.log('Value: ' + i6);

(function aDemoFunc() {
    var msg = 'Hello World';  
    console.log(msg);
 })();
