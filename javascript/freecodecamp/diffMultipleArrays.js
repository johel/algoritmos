// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of
//  the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
// the mathematical term "symmetric difference" of two sets is the set of elements which are in either 
// of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference 
// you take (say on a set D = {2, 3}), you should get the set with elements which are in either of 
// the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).


function sym(){
  
  function mapArr(arr){
	return arr.reduce(function(acc, current){
  	  if(!acc[current]){
    	acc[current] = true;
      }
      return acc;
    }, {});
  }
  
  var args = Array.prototype.slice.call(arguments);
  var resultWithRepetition = args.reduce(function(acc, current){
  	let map1 = mapArr(acc);
    let map2 = mapArr(current);
  	return acc.filter(el=>!map2[el]).concat(current.filter(el=>!map1[el]));
  }, []);
  
  var mapped={};
  var resultNoRepeat =  resultWithRepetition.reduce(function(acc,current){
  	if(!mapped[current]){
    	mapped[current] = true;
    	acc.push(current);
    }
    return acc;
  },[]);
  
  return resultNoRepeat;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])) // [1, 4, 5]