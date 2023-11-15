'use strict'

function onInit() {
    onSixthBallHover()
}

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

    defineBallSize(elBall, elBallsize)
}

function onThirdBallClick() {
    var firstBall = document.querySelector('.first-ball')
    var secondBall = document.querySelector('.second-ball')

    var firstBallSize = firstBall.clientHeight
    var secondBallSize = secondBall.clientHeight

    var firstBallColor = window.getComputedStyle(firstBall).backgroundColor
    var secondBallColor = window.getComputedStyle(secondBall).backgroundColor

    firstBall.style.backgroundColor = secondBallColor
    secondBall.style.backgroundColor = firstBallColor

    defineBallSize(firstBall, secondBallSize)
    defineBallSize(secondBall, firstBallSize)
}

function onFourthBallClick() {
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

        defineBallSize(ball, ballSize)
    })
}

function onFifthBallClick() {
    document.querySelector('body').style.backgroundColor = getRandomColor()
}

function onSixthBallClick() {
    document.querySelector('body').style.backgroundColor = 'black'

    var firstAndSecondBalls = document.querySelectorAll('.first-ball, .second-ball')

    firstAndSecondBalls.forEach(ball => {
        ball.style.height = '100px'
        ball.style.width = '100px'
        ball.innerText = 100
    })

    document.querySelector('.first-ball').style.backgroundColor = 'yellow'
    document.querySelector('.second-ball').style.backgroundColor = 'rgb(62, 193, 202)'
}

function onSixthBallHover() {
    var sixthBall = document.querySelector('.sixth-ball')
    var mouseClickInterval
    var cycles = 0


    // mouseover - when the mouse is hovering the sixth ball for more than 2 sec: 
    sixthBall.addEventListener('mouseover', function () {
        setTimeout(function () {
            // mouseClickInterval = setInterval(console.log('hi'), 2000)
            mouseClickInterval = setInterval(function () {
                runMouseClickHandlers()
                cycles++
                console.log(`Num of cycels: ${cycles}`)
                if (cycles === 10) {
                    clearInterval(mouseClickInterval)
                }
            }, 2000)
        }, 2000)
    })
    // mouseout - when the mouse is moving from hovring the sixth ball:
    sixthBall.addEventListener('mouseout', function () {
        cycles = 0
        // Stop the interval when the mouse leaves the sixth ball
        clearInterval(mouseClickInterval)
    })


}

function runMouseClickHandlers() {
    onBallClick(document.querySelector('.first-ball'), 400)
    onBallClick(document.querySelector('.second-ball'), 250)
    onThirdBallClick(document.querySelector('.third-ball'))
    onFourthBallClick(document.querySelector('.fourth-ball'))
}