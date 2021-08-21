const count = document.querySelector('.count')
const sub = document.querySelector('.subtract')
const resetCount = document.querySelector('.reset')
const add = document.querySelector('.add')

add.addEventListener('click', () => {
  count.innerHTML++
})

sub.addEventListener('click', () => {
  count.innerHTML--
})

resetCount.addEventListener('click', () => {
  count.innerHTML = 0
})