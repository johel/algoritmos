function sumFibs(num) {
  var fibs = [];
  var n =0;
  function fibonacci(i){
  	if(i===0){return 0;}
  	if(i===1){return 1;}

  	if(!fibonacci[i]){
  		fibonacci[i] = fibonacci(i-1) + fibonacci(i-2);
  	}
  	return fibonacci[i];

  }

  while(fibonacci(n) <= num){
  	fibs.push(fibonacci(n));
  	n+=1;
  }

  return fibs.reduce(function(acc,current){
  	if(current % 2 !== 0 ){
  		acc += current;
  	}

  	return acc;
  }, 0);

}

sumFibs(4);