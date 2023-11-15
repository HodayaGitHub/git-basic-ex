'use strict'

function onBallClick(elBall) {
    var elBallHeight = elBall.clientHeight
    var elBallWidth = elBall.clientWidth

    elBallHeight += 50
    elBallWidth += 50

    elBall.style.height = elBallHeight + 'px'
    elBall.style.width = elBallWidth + 'px'
    elBall.innerText = elBallWidth
}
