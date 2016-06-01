
function sumPrimes(n){
	var cache = {1:false,2:true};
	function isPrime(n){
  	if(n in cache){
    	return cache[n];
    }
    var minPossibleFactor = Math.sqrt(n);
    for(var i=2; i<=minPossibleFactor; i++){
      if(n%i ===0){
      	cache[n] =false;
        return false;
      }
    }
    cache[n] =true;
    return true;
  }
	
  var arr = [];
  for(var i=2; i<=n; i++){
  	arr.push(i);
  }
  
  return arr.filter(function(el){
  	return isPrime(el);
  }).reduce(function(acc,current){
  	return acc + current;
  },0);
}

sumPrimes(10);
