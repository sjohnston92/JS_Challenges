// Have the function alphabetSoup(str) take the str string parameter being passed 
// and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
// Assume numbers and punctuation symbols will not be included in the string. 


//creating a function passing a string
function alphaSort(str)
//converting the function into an array & converting back into array.
  {
return str.split('').sort().join('');
  }
//
console.log(alphaSort("Well well well"));