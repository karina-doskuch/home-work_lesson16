//1

var userObj = {
    firstName: 'Karina',
    lastName: 'Doskuch',
    age: 28,
    fullName() {
        return `${userObj.firstName} ${userObj.lastName}`;
    }
};
console.log(userObj);
//2

console.log(userObj.fullName());
//3

function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());
//4

function evenFn(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) 
        if (i % 2 === 0) arr.push(i); {
    }
    return arr;
}

console.log(evenFn(20));
console.log(evenFn(10));
//5

function weekFn(n) {
    var str = '';

  switch (n) {
    case 1:
      str = 'Понедельник';
      break;
    case 2:
      str = 'Вторник';
      break;
    case 3:
      str = 'Среда';
      break;
    case 4:
      str = 'Четверг';
      break;
    case 5:
      str = 'Пятница';
      break;
    case 6:
      str = 'Суббота';
      break;
    case 7:
      str = 'Воскресенье';
      break;
    default:
      str = null;
  }
return str;
}
console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(7));
console.log(weekFn('friday'));
console.log(weekFn(1.2));
console.log(weekFn(11));

//6

function ageClassification(num) {
  var message = null;
  message = num < 24 ? 'детский возраст' : null;
  message = num < 44 && message === null ? 'молодой возраст' : message;
  message = num < 65 && message === null ? 'средний возраст' : message;
  message = num < 75 && message === null ? 'пожилой возраст' : message;
  message = num < 90 && message === null ? 'старческий возраст' : message;
  message = num <= 122 && message === null ? 'долгожители' : message;
  return num < 0 || num > 122 ? null : message;
}

console.log(ageClassification(-3));
console.log(ageClassification(7));
console.log(ageClassification(36)); 
console.log(ageClassification(49)); 
console.log(ageClassification(68.2));
console.log(ageClassification(80)); 
console.log(ageClassification(120)); 
console.log(ageClassification(133));

//7

function oddFn(n) {
    var arr = [];
    var i = 0;
  
    while (i++ < n) 
    if (i % 2 !== 0) arr.push(i);
  
    return arr;
  }
console.log(oddFn(9));
console.log(oddFn(11));

//8

function mainFunc(a, b, callback) {
  if (callback && typeof callback === 'function') return callback(a, b);

  return false;
}

function cbRandom(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(mainFunc(2, 5, cbRandom));

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbAdd));

function cbPow(num, pow) {
  return Math.pow(2, 5);
}
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, 'not a func'));

