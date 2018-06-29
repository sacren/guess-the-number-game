jQuery(function ($) {
  var randomNumber = Math.floor(Math.random() * 100) + 1

  var lastResult = document.querySelector('.lastResult')
  var lowOrHi = document.querySelector('.lowOrHi')

  var guessSubmit = document.querySelector('.guessSubmit')

  var guessCount = 1
  var resetButton

  function checkGuess () {
    var userGuess = Number($('.guessField').val())

    if (guessCount === 1) {
      $('.guesses').text('Previous guess: ' + $('.guessField').val())
    } else {
      $('.guesses').text(function () {
        return $(this).text() + ' ' + $('.guessField').val()
      })
    }

    if (userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!'
      lastResult.style.backgroundColor = 'green'
      lowOrHi.textContent = ''
      setGameOver()
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!'
      setGameOver()
    } else {
      lastResult.textContent = 'Wrong!'
      lastResult.style.backgroundColor = 'red'
      if (userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!'
      } else {
        lowOrHi.textContent = 'Last guess was too low!'
      }
    }

    guessCount++
    $('.guessField').val('')
    $('.guessField').focus()
  }

  $('.guessSubmit').click(checkGuess)
})
