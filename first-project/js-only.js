const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === 'number') {
    return num1 + num2;
  }
  else {
    return +num1 + +num2; // the plus sign converts to number
  }  
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
  // the result is the string "105", 
  // which is not read "a hundred and five" or "ten oh five"
  // but "one zero five" because it's a string.
});
