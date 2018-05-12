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

function randomFloat(a, b) {
  return a + Math.random()*(b-a);
}

function getIntStr(x, trailing) {
	let val = x.toString();
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

function pushIfNotIn(obj, arr) {
  if (!isInArr(obj, arr)) {
    arr.push(obj);
  }
  return arr;
}

function indexOf(obj, arr) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === obj) {
      return i;
    }
  }
}

function shuffle(arr) {
  return arr.sort((a,b) => {
    return 0.499 - Math.random();
  });
}

function copyArr(arr) {
  return arr.filter(x => 1==1);
}

function objectIsEmpty(obj) {
  return Object.keys(loader.resources["assets/music/Fierce Combat.mp3"].sound.sprites).length === 0 && obj.constructor === Object;
}