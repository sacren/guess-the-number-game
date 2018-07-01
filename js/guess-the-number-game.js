jQuery(function ($) {
  const randomNumber = Math.floor(Math.random() * 100) + 1

  var lowOrHi = document.querySelector('.lowOrHi')

  var guessSubmit = document.querySelector('.guessSubmit')

  var guessCount = 1
  var resetButton

  function checkGuess () {
    const guessStr = $('.guessField').val()
    const userGuess = Number(guessStr)

    switch (guessCount) {
      case 1:
        $('.guesses').text('Previous guess: ' + guessStr)
        break

      case 2:
        var s = $('.guesses').text()
        s = s.replace('guess', 'guesses')
        $('.guesses').text(s)

      default:
        $('.guesses').text(function () {
          return $(this).text() + ' ' + guessStr
        })
    }

    if (userGuess === randomNumber) {
      $('.lastResult').text('Congratulations! You got it right!')
      $('.lastResult').css('backgroundColor', 'green')
      lowOrHi.textContent = ''
      setGameOver()
    } else if (guessCount === 10) {
      $('.lastResult').text('!!!GAME OVER!!!')
      setGameOver()
    } else {
      $('.lastResult').text('Wrong!')
      $('.lastResult').css('backgroundColor', 'red')
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
