'use strict'

function onBallClick(elBall) {
    var elBallHeight = elBall.clientHeight
    var elBallWidth = elBall.clientWidth
    
    elBall.style.backgroundColor = getRandomColor()
    var randomIncrease = getRandomInt(20, 60)


    if (elBallHeight < 400) {
        elBallHeight += randomIncrease
        elBallWidth += randomIncrease
    } else {
        elBallHeight = 100
        elBallWidth = 100
    }

    if (elBallHeight > 400) {
        elBallHeight = 400
        elBallWidth = 400
    }

    elBall.style.height = elBallHeight + 'px'
    elBall.style.width = elBallWidth + 'px'
    elBall.innerText = elBallWidth
}
