var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // 1
var input2 = document.getElementById("num2");
;
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
/**
 * 1. the exclamation point means that there will ALWAYS be an element here.
 *      as HTMLInputElement - is type-casting
 */ 
