// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var arr = [1, 3, 5, 6, 8, 9, 10];

function max(arr) {
  var val = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > val) val = arr[i];
  }
  return val;
}
function min(arr) {
  var val = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < val) val = arr[i];
  }
  return val;
}
var foo = [];

for (var i = min(arr); i <= max(arr); i++) {
  foo.push(i);
}
console.log(foo);
console.log(max(arr));
console.log(min(arr));
