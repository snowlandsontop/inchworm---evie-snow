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
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("back")
})
radio.onReceivedString(function (receivedString) {
    music.setVolume(60)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 3; index++) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
