'use strict'




function onBallClick(elBall, maxDiameter) {
    var elBallsize = elBall.clientHeight

    elBall.style.backgroundColor = getRandomColor()
    var randomIncrease = getRandomInt(20, 60)

    if (elBallsize < maxDiameter) {
        elBallsize += randomIncrease
    } else {
        elBallsize = 100
    }

    if (elBallsize > maxDiameter) {
        elBallsize = maxDiameter
    }

    elBall.style.height = elBallsize + 'px'
    elBall.style.width = elBallsize + 'px'
    elBall.innerText = elBallsize
}


function onThirdBallClick(elBall) {
    var firstAndSecondBalls = document.querySelectorAll('.first-ball, .second-ball')

    firstAndSecondBalls.forEach(ball => {
        var sizeToIncrease = 150
        ball.style.backgroundColor = 'gray'
        ball.style.height = sizeToIncrease + 'px'
        ball.style.width = sizeToIncrease + 'px'
        ball.innerText = sizeToIncrease

    })
}


function onFourthBallClick(elBall) {
    var firstAndSecondBalls = document.querySelectorAll('.first-ball, .second-ball')

    firstAndSecondBalls.forEach(ball => {
        var ballSize = ball.clientHeight
        if (ballSize === 100) {
            return
        }

        var randomIncrease = getRandomInt(20, 60)
        if (ballSize > 100) {
            ballSize -= randomIncrease
        }

        if (ballSize < 100) {
            ballSize = 100
        }

        ball.style.height = ballSize + 'px'
        ball.style.width = ballSize + 'px'
        ball.innerText = ballSize

    });
}


function onFifthBallClick() {
    document.querySelector('body').style.backgroundColor = getRandomColor()
}

function onSixthhBallClick() {
    document.querySelector('body').style.backgroundColor = 'black'

    var elBalls = document.querySelectorAll('.ball')
    elBalls.forEach(ball => {
        ball.style.height = '100px'
        ball.style.width = '100px'
    
        if (ball === document.querySelector('.first-ball') || ball === document.querySelector('.second-ball')) {
            ball.innerText = 100
        }

    });



}