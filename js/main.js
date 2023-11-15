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
