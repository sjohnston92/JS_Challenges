// Create a function that will receive a string of text of 
// any length and return the number of vowels found within the text.

let state ={
  vowels:"A,E,I,O,U",
  vowelCount: 0
}

function vowelCount(string){
  state.vowels.forEach(function (vowels, string)
 {if (string.includes(vowels)) {
      state.vowelCount ++
  }
}

};

console.log(vowelCount("Hello World"));

