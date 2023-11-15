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




function onFourthBallClick(elBall){
    var secondBall = document.querySelector('.second-ball')
    
    var secondBallHeight = secondBall.clientHeight
    var secondBallWidth = secondBall.clientWidth

    var randomIncrease = getRandomInt(20, 60)

    if (secondBallHeight > 100) {
        secondBallHeight -= randomIncrease
        secondBallWidth -= randomIncrease
    } 
    
    if (secondBallHeight  < 100){
        secondBallHeight = 100
        secondBallWidth = 100
    }


    secondBall.style.height = secondBallHeight + 'px'
    secondBall.style.width = secondBallWidth + 'px'
    secondBall.innerText = secondBallHeight
    

}
