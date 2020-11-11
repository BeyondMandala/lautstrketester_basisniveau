basic.forever(function () {
    if (Math.round(input.soundLevel()) > 20) {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    }
})
