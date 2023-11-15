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
    var firstBall = document.querySelector('.first-ball')
    var secondBall = document.querySelector('.second-ball')

    var firstBallSize = firstBall.clientHeight
    var secondBallSize = secondBall.clientHeight

    console.log(firstBallSize)
    var firstBallColor = window.getComputedStyle(firstBall).backgroundColor
    var secondBallColor = window.getComputedStyle(secondBall).backgroundColor


    firstBall.style.backgroundColor = secondBallColor
    secondBall.style.backgroundColor = firstBallColor


    firstBall.style.width = secondBallSize + 'px'
    firstBall.style.height = secondBallSize + 'px'
    firstBall.innerText = secondBallSize


    secondBall.style.width = firstBallSize + 'px'
    secondBall.style.height = firstBallSize + 'px'
    secondBall.innerText = firstBallSize

    console.log(firstBallColor, secondBallColor)

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

function onSixthBallClick() {
    document.querySelector('body').style.backgroundColor = 'black'

    var firstAndSecondBalls = document.querySelectorAll('.first-ball, .second-ball')

    firstAndSecondBalls.forEach(ball => {
        ball.style.height = '100px'
        ball.style.width = '100px'
        ball.innerText = 100
    });

    document.querySelector('.first-ball').style.backgroundColor = 'yellow'
    document.querySelector('.second-ball').style.backgroundColor = 'rgb(62, 193, 202)'
}

onSixthBallHover()
function onSixthBallHover() {
    var sixthBall = document.querySelector('.sixth-ball')
    var mouseClickInterval 

    // mouseover - when the mouse is hovering the sixth ball for more than 2 sec: 
    sixthBall.addEventListener('mouseover', function() {
        setTimeout(function () {
            mouseClickInterval = setInterval(console.log('hi'), 2000);
        }, 2000)
    })


    // mouseout - when the mouse is moving from hovring the sixth ball:
    sixthBall.addEventListener('mouseout', function() {
        // Stop the interval when the mouse leaves the sixth ball
        clearInterval(mouseClickInterval);
    });




}
