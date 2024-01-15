def on_received_number(receivedNumber):
    music.set_volume(60)
    music.play(music.string_playable("- - - - - - - - ", 120),
        music.PlaybackMode.UNTIL_DONE)
    pins.servo_write_pin(AnalogPin.P0, 0)
    basic.pause(200)
    pins.servo_write_pin(AnalogPin.P0, 180)
    basic.pause(200)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_sound_loud():
    radio.send_string("back")
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_received_string(receivedString):
    for index in range(4):
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            """)
    pins.servo_write_pin(AnalogPin.P0, 180)
    basic.pause(200)
    pins.servo_write_pin(AnalogPin.P0, 0)
    basic.pause(200)
radio.on_received_string(on_received_string)
