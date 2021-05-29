function meal(dayOfTheWeek) {
  if(dayOfTheWeek === 'Monday') {
    return ['protein', 'green']
  } else {
    return ['vegan', 'keto']
  }
}

console.log(meal('Monday'));   // [ 'protein', 'green' ]
console.log(meal('Friday'));   // [ 'vegan', 'keto' ]
console.log(meal('Whatever')); // [ 'vegan', 'keto' ]