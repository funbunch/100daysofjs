const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

function palindrome() {
  let word = document.querySelector('.input-text').value
  // let len = word.length

  word = word.toLowerCase().replace(/[^a-z0-9]+/g, '');
  
 if (word === word.split('').reverse().join('')) {
  result.innerHTML = `${word.toUpperCase()} is a Palindrome`
 } else {
  result.innerHTML = `${word.toUpperCase()} is Not a Palindrome`
 }

  // let start = word.substring(0, Math.floor(len / 2)).toLowerCase()
  // let end = word.substring(len - Math.floor(len / 2)).toLowerCase()

  // let flip = [...end].reverse().join('')
  // if (start === flip) {
  //   result.innerHTML = `${word.toUpperCase()} is a Palindrome`
  // } else {
  //   result.innerHTML = `${word.toUpperCase()} is Not a Palindrome`
  // }

}

btn.addEventListener('click', palindrome)

