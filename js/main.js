'use strict'

function onBallClick(elBall) {
    var elBallHeight = elBall.clientHeight
    var elBallWidth = elBall.clientWidth

    
    if (elBallHeight < 400) {
        elBallHeight += 50
        elBallWidth += 50
    } else {
        elBallHeight = 100
        elBallWidth = 100
    }
    elBall.style.height = elBallHeight + 'px'
    elBall.style.width = elBallWidth + 'px'
    elBall.innerText = elBallWidth
}
