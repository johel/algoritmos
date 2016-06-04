
function steamrollArray(arr) {
	var result = arr.reduce(function(acc,current){
		if(Array.isArray(current)){
			acc = acc.concat(steamrollArray(current));
		}else{
			acc.push(current);
		}
		return acc;
	}, []);
	return result;
}

steamrollArray([1, [2], [3, [[4]]]]);