function greeting (person) {
  var word = isArray(person);
  if(word) {
    return `Hello, ${word}`
  }
  if (isUpperCase(person)) {
    return `HELLO ${person}!`
  }
  const name = person || 'my friend'
  return `Hello, ${name}`
}

function isArray(word) {
  if(!Array.isArray(word)) {
    return false;
  }

  var temp = '';

  for (i = 0; i <= word.length-1; i++) { 
    if((word.length) > 1 && i == (word.length-1)){
      temp += 'and '+word[i]+'.';
      return temp
    } else if((word.length) >= 2 && i == (word.length-2)) {
      temp += word[i]+' '
    } else {
      temp += word[i]+', '
    }
  }

}

function isMixing(arr) {
  var upper = [];
  var lower = [];
  word.forEach(element => {
    if(isUpperCase(element)) {
      upper.push(element)
    } else {
      lower.push(element)
    }
  });
}

function isUpperCase (word) {
  if(Array.isArray(word)) {
    return false;
  }
  if (!word) return false
  return word.toUpperCase() === word
}

module.exports = {
  greeting
}
