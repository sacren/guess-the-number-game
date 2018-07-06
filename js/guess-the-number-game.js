jQuery(function ($) {
  var randomNumber = Math.floor(Math.random() * 100) + 1
  var guessCount = 1

  function resetGame () {
    randomNumber = Math.floor(Math.random() * 100) + 1
    guessCount = 1
    $('.resultParas > p').text('')
    $('.resetGame').remove()
    $('.guessField').removeProp('disabled').focus()
    $('.guessSubmit').removeProp('disabled')
  }

  function setGameOver () {
    $('.guessField').prop('disabled', true)
    $('.guessSubmit').prop('disabled', true)
    $('.resultParas').after(document.createElement('button'))
    $('.resultParas + button').addClass('resetGame')
    $('.resetGame').text('Start new game').click(resetGame)
  }

  function checkGuess () {
    const guessStr = $('.guessField').val()
    const userGuess = Number(guessStr)

    switch (guessCount) {
      case 1:
        $('.guesses').text('Previous guess: ' + guessStr)
        if (userGuess !== randomNumber) {
          $('.lastResult').text('Wrong!')
                          .css({
                            backgroundColor: 'red',
                            color: 'white'
                          })
        }
        break

      case 2:
        $('.guesses').text(function (i, s) {
          return s.replace('guess', 'guesses')
        })

      default:
        $('.guesses').text(function (i, s) {
          return s + ' ' + guessStr
        })
    }

    if (userGuess === randomNumber) {
      $('.lastResult').text('Congratulations! You got it right!')
                      .css({
                        backgroundColor: 'green',
                        color: 'white'
                      })
      $('.lowOrHi').text('')
      setGameOver()
    } else {
      if (guessCount === 10) {
        $('.lastResult').text('!!!GAME OVER!!!')
        setGameOver()
      }

      if (userGuess > randomNumber) {
        $('.lowOrHi').text('Last guess was too high!')
      } else {
        $('.lowOrHi').text('Last guess was too low!')
      }
    }

    guessCount++
    $('.guessField').val('').focus()
  }

  $('.guessSubmit').click(checkGuess)
  $('.guessField').focus()
})
