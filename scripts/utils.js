let utils = {};
utils.randomInt = function(a, b) {
	return a + Math.floor(Math.random()*(b-a+1));
};

utils.randomIntStr = function(a, b, trailing) {
	let val = utils.randomInt(a,b).toString();
	for (let i = val.length ; i<trailing; i++) {
		val = "0" + val;
	}
	return val;
};

utils.randomFloat = function(a, b) {
  return a + Math.random()*(b-a);
};

utils.getIntStr = function(x, trailing) {
	let val = x.toString();
	for (let i = val.length ; i<trailing; i++) {
		val = "0" + val;
	}
	return val;
};

utils.randomFromArr = function(arr) {
  return arr[utils.randomInt(0, arr.length-1)];
};

utils.isInArr = function(obj, arr) {
  return (arr.filter(x => x === obj)).length>0;
};

utils.pushIfNotIn = function(obj, arr) {
  if (!utils.isInArr(obj, arr)) {
    arr.push(obj);
  }
  return arr;
};

utils.indexOf = function(obj, arr) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === obj) {
      return i;
    }
  }
};

utils.shuffle = function(arr) {
  return arr.sort((a,b) => {
    return 0.499 - Math.random();
  });
};

utils.copyArr = function(arr) {
  return arr.filter(x => 1==1);
};

utils.objectIsEmpty = function(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};