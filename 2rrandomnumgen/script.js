const number = document.querySelector('.number')
const btn = document.querySelector('.generate')

const generateNum = () => {
  // generate num from 1 to 10
  const ran = Math.floor(Math.random() * 10 + 1 )
  number.innerHTML = ran
}

btn.addEventListener('click', generateNum)