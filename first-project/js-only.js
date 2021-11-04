const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
  // the result is the string "105", 
  // which is not read "a hundred and five" or "ten oh five"
  // but "one zero five" because it's a string.
});
