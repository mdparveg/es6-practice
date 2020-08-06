/* many ways to get undefine
1st without declare a value in variable
2nd without return anything or return but didn't set anything on return in a function
3rd set a function perameter but i didn't pass any value
4th find some property from object which is not define in object
5th same as object but in the array
6th if i set the variable value is "undefine"
*/

function add(num1, num2){
    console.log(num1+ num2);
    return num1 + num2
}
const result = add(56, 65);
console.log(result);