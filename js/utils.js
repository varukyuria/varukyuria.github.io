function randomInt(a, b) {
	return a + Math.floor(Math.random()*(b-a+1));
}

function randomIntStr(a, b, trailing) {
	let val = randomInt(a,b).toString();
	for (let i = val.length ; i<trailing; i++) {
		val = "0" + val;
	}
	return val;
}

function randomFromArr(arr) {
  return arr[randomInt(0, arr.length-1)];
}

function isInArr(obj, arr) {
  return (arr.filter(x => x === obj)).length>0
}

function indexOf(obj, arr) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === obj) {
      return i;
    }
  }
}