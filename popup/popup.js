const encodeUriInput = document.querySelector('#encode-uri')
const decodeUriInput = document.querySelector('#decode-uri')
const encodeUriInputButton = document.querySelector('#encode-uri~button')
const decodeUriInputButton = document.querySelector('#decode-uri~button')
const encodeUriResult = document.querySelector('#encode-uri-result')
const decodeUriResult = document.querySelector('#decode-uri-result')

const encodeBase64Input = document.querySelector('#encode-base64')
const decodeBase64Input = document.querySelector('#decode-base64')
const encodeBase64InputButton = document.querySelector('#encode-base64~button')
const decodeBase64InputButton = document.querySelector('#decode-base64~button')
const encodeBase64Result = document.querySelector('#encode-base64-result')
const decodeBase64Result = document.querySelector('#decode-base64-result')

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

encodeBase64InputButton.addEventListener('click', (e) => {
  e.preventDefault()
  const result = btoa(encodeBase64Input.value)
  encodeBase64Result.value = result
})

decodeBase64InputButton.addEventListener('click', (e) => {
  e.preventDefault()
  const result = atob(decodeBase64Input.value)
  decodeBase64Result.value = result
})