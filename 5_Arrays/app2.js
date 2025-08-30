// 4. Переборы массивов через управляющие конструкции

var arr = ["Яблоко", "Апельсин", "Груша"];
// 4.1
arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});
// 4.2
var positiveArr = arr.filter(function(number) {
  return number > 0;
});

alert( positiveArr ); 

// 4.3
var nameLengths = names.map(function(name) {
  return name.length;
});

// получили массив с длинами
alert( nameLengths ); 

// 4.4
function isPositive(number) {
  return number > 0;
}

alert( arr.every(isPositive) ); 
alert( arr.some(isPositive) ); 

// 4.5

var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert( result ); 