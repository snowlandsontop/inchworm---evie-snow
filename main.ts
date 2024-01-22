radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index < 3; index++) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            `)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 3; index++) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("back")
    music.setVolume(60)
    music.play(music.stringPlayable("A G F E E F G A ", 120), music.PlaybackMode.UntilDone)
})
