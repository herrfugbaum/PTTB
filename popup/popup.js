const encodeUriInput = document.querySelector('#encode-uri')
const decodeUriInput = document.querySelector('#decode-uri')
const encodeUriInputButton = document.querySelector('#encode-uri~button')
const decodeUriInputButton = document.querySelector('#decode-uri~button')
const encodeUriResult = document.querySelector('#encode-uri-result')
const decodeUriResult = document.querySelector('#decode-uri-result')

encodeUriInputButton.addEventListener('click', (e) => {
  e.preventDefault()
  const result = encodeURI(encodeUriInput.value)
  encodeUriResult.value = result
})

decodeUriInputButton.addEventListener('click', (e) => {
  e.preventDefault()
  const result = decodeURI(decodeUriInput.value)
  decodeUriResult.value = result
})