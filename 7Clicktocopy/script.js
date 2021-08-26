const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  e.preventDefault()

  coupon.select()
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(coupon.value);

  btn.textContent = "Copied!!"
  setTimeout(() => {
    btn.textContent = "Copy"

  }, 3000)
}

btn.addEventListener('click', copyText)