function isPrime(n){
  var minPossibleFactor = Math.sqrt(n);

  if(n===0 || n===1){
    return false;
  }

  for(var i=2; i<=minPossibleFactor; i++){
    if(n%i ===0){
      return false;
    }
  }
  
  return true;
}