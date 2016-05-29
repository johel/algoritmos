
function convertToRoman(num) {
  var romanMap = {0:'',1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX'};
  var map = {
   0:{I: 'I', V:'V', X:'X'},
   1:{I:'X', V:'L', X:'C'},
   2:{I: 'C', V:'D', X:'M'},
   3:{I:'M'}
 };
 var romanArray = num.toString().split('').reverse().map(function(el,index){
 	if(el === 0){
 		return '';
 	}else{
 		return romanMap[el].split('').map(item=> map[index][item]).join('');
 	}
 });

 return romanArray.reverse().join('');

}

convertToRoman(36);
