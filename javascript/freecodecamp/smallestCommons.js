
function smallestCommons(arr) {
  // Sort the array
  arr = arr.sort((a,b) => a-b);
  var min = arr[0];
  var max = arr[1];

  var numbers = [];
  var count = 0;

  
  for (var i = min; i <= max; i++) {
    numbers.push(i);
  }

  for (var result = max * min; result <= Number.MAX_VALUE; result+=max) {

    //test factors from min to max
    for (var factor = min; factor <= max; factor++) {

      if (result % factor === 0) { // every time the modulus is 0 increase a counting 
      	count++;
      }else{
      	break;
      }
    }

    //If all numbers between min and max were factors
    if (count === numbers.length) { 
      return result; 
    }
    else{
      count = 0; // set count to 0 in order to test another result candidate
    }
  }
}


smallestCommons([1,5]); // 60
