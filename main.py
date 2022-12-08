while True:
    for index in range(1):
        if input.is_gesture(Gesture.TILT_LEFT):
            basic.show_number(1)
            basic.pause(500)
            basic.clear_screen()
            while True:
                if input.button_is_pressed(Button.A):
                    basic.show_number(5)
                    basic.pause(2000)
                    basic.clear_screen()
                    music.play_melody("E B C5 A B G A F ", 120)
        elif input.is_gesture(Gesture.TILT_RIGHT):
            basic.show_number(2)
            basic.pause(500)
            basic.clear_screen()
            while True:
                if input.button_is_pressed(Button.A):
                    basic.show_number(7)
                    basic.pause(2000)
                    basic.clear_screen()
                    music.play_melody("A F E F D G E F ", 120)
        elif input.is_gesture(Gesture.SHAKE):
            basic.show_number(3)
            basic.pause(500)
            basic.clear_screen()
            while True:
                if input.button_is_pressed(Button.A):
                    basic.show_number(8)
                    basic.pause(2000)
                    basic.clear_screen()
                    music.play_melody("G B A G C5 B A B ", 120)
