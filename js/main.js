'use strict'

function onBallClick(elBall, maxDiameter) {
    var elBallHeight = elBall.clientHeight
    var elBallWidth = elBall.clientWidth

    elBall.style.backgroundColor = getRandomColor()
    var randomIncrease = getRandomInt(20, 60)


    if (elBallHeight < maxDiameter) {
        elBallHeight += randomIncrease
        elBallWidth += randomIncrease
    } else {
        elBallHeight = 100
        elBallWidth = 100
    }

    if (elBallHeight > maxDiameter) {
        elBallHeight = maxDiameter
        elBallWidth = maxDiameter
    }

    elBall.style.height = elBallHeight + 'px'
    elBall.style.width = elBallWidth + 'px'
    elBall.innerText = elBallWidth
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

        var ballHeight = ball.clientHeight
        var ballWidth = ball.clientWidth

        if (ballWidth === 100) {
            return
        }


        var randomIncrease = getRandomInt(20, 60)

        if (ballHeight > 100) {
            ballHeight -= randomIncrease
            ballWidth -= randomIncrease
        }

        if (ballHeight < 100) {
            ballHeight = 100
            ballWidth = 100
        }

        ball.style.height = ballHeight + 'px'
        ball.style.width = ballWidth + 'px'
        ball.innerText = ballHeight

    });





}
