const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowel);

function countVowel() {
  //keep count var
  let vowelCount = 0 

  //capture val var
  let inputVal = word.value.toLowerCase()

  //iterate through val
  for ( let i = 0; i < inputVal.length; i++) {
    //check if each index is a vowel
    if (inputVal[i].match(/[aeiou]/)) {
      //if so increase vowel count
      vowelCount++
      result.innerHTML = `${inputVal.toUpperCase()} has ${vowelCount} vowels`
    }    
  }
}
