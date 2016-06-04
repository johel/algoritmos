
//Compare two arrays and return a new array with any items only found
// in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  function fn(acc,current){acc[current] = true; return acc;}
  var map1 = arr1.reduce(fn ,{});
  var map2 = arr2.reduce(fn ,{});
  return arr1.filter(el=>!map2[el]).concat(arr2.filter(el=>!map1[el]));
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);