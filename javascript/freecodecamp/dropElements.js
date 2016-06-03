// Drop the elements of an array (first argument),
// starting from the front, until the predicate (second argument) returns true.

function dropElements(arr, func) {
  var i;
  for(i =0; i<arr.length; i++){
    if(func(arr[i])){
      break;
    }
  }
  return arr.slice(i,arr.length);
}

dropElements([1, 2, 3], function(n) {return n < 3; });