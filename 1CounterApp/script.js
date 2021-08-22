const count = document.querySelector('.count')
const buttons = document.querySelector('.buttons')
// const sub = document.querySelector('.subtract')
// const resetCount = document.querySelector('.reset')
// const add = document.querySelector('.add')


//refactored event delegation 
buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) count.innerHTML++
    //console.log("add");
  if (e.target.classList.contains('subtract')) count.innerHTML--
  if (e.target.classList.contains('reset')) count.innerHTML = 0
  setError()

})

function setError() {
  if (count.innerHTML < 0 ) {
    count.style.color = 'red'
  } else {
    count.style.color = "#fff"
  }

}

// add.addEventListener('click', () => {
//   count.innerHTML++
// })

// sub.addEventListener('click', () => {
//   count.innerHTML--
// })

// resetCount.addEventListener('click', () => {
//   count.innerHTML = 0
// })