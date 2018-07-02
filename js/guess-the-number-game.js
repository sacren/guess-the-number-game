jQuery(function ($) {
  const randomNumber = Math.floor(Math.random() * 100) + 1
  var guessCount = 1
  var resetButton

  function resetGame () {
    guessCount = 1
    $('.resultParas > p').text('')
    $('.resetGame').remove()
    $('.guessField').removeProp('disabled')
    $('.guessSubmit').removeProp('disabled')
  }

  function setGameOver () {
    $('.guessField').prop('disabled', true)
    $('.guessSubmit').prop('disabled', true)
    $('.resultParas').after(document.createElement('button'))
    $('.resultParas + button').addClass('resetGame')
    $('.resetGame').text('Start new game')
    $('.resetGame').click(resetGame)
  }

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
      $('.lowOrHi').text('')
      setGameOver()
    } else if (guessCount === 10) {
      $('.lastResult').text('!!!GAME OVER!!!')
      setGameOver()
    } else {
      $('.lastResult').text('Wrong!')
      $('.lastResult').css('backgroundColor', 'red')
      if (userGuess > randomNumber) {
        $('.lowOrHi').text('Last guess was too high!')
      } else {
        $('.lowOrHi').text('Last guess was too low!')
      }
    }

    guessCount++
    $('.guessField').val('')
    $('.guessField').focus()
  }

  $('.guessSubmit').click(checkGuess)
})
