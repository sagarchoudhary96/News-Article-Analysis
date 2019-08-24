// analyser api base route
const apiUrl = "http://localhost:3000/analyse"


// reference to input field
const userInputField = document.getElementById("text-input")

// reference to error field
const error = document.getElementById("error-field")

// reference for loader
const loader = document.getElementById("loader")

// reference for result sections
const results = document.getElementById("result-section")
const polarityResult = document.getElementById("polarity")
const polarityCResult = document.getElementById("polarity_confidence")
const subjectivityResult = document.getElementById("subjectivity")
const subjectivityCResult = document.getElementById("subjectivity_confidence")

// handle form submission
const handleSubmit = (event) => {

  event.preventDefault()

  // user input text/url
  const userInput = userInputField.value

  // show loader
  hideUiElement()

  // make api call to get response
  makeApiCall(userInput, isUrl(userInput)).then((res) => {
    res.error ? showError(res.error) : showResultField(res)
  }).catch(err => {
    showError(err)
  })
}

// check if text is a url or not
const isUrl = (text) => {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return regex.test(text)
}

// make Api call
const makeApiCall = (text, isUrl) => {
  const params = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const body = {
    text: text,
    isUrl: isUrl
  }

  params.body = JSON.stringify(body)
  return fetch(apiUrl, params).then((res) => res.json())
}

// hide error and result element
const hideUiElement = () => {
  error.style.display = "none"
  results.style.display = "none"
  loader.style.display = "block"
}

// show result fields
const showResultField = (result) => {
  loader.style.display = "none"
  results.style.display = "block"
  polarityResult.children[0].innerHTML = result.polarity
  polarityCResult.children[0].innerHTML = result.polarity_confidence
  subjectivityResult.children[0].innerHTML = result.subjectivity
  subjectivityCResult.children[0].innerHTML = result.subjectivity_confidence
}

// show error
const showError = (err) => {
  loader.style.display = "none"
  error.style.display = "block"
  error.innerHTML = err
}

export {
  handleSubmit
}
