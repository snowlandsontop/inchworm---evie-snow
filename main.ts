radio.onReceivedNumber(function (receivedNumber) {
    music.setVolume(60)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(200)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(200)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("back")
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(200)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(200)
})