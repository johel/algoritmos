// Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  function binaryToCharacter(array){
    var code =  array.reverse().reduce(function(acc, current, index){
      acc = acc + parseInt(current,10) * Math.pow(2,index);
      return acc;
    }, 0);
    return String.fromCharCode(code);
  }
  
  return str.split(" ").map(function(el){
    return binaryToCharacter(el.split(""));
  }).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");