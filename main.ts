while (true) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let index = 0; index < 1; index++) {
        if (input.isGesture(Gesture.TiltLeft)) {
            basic.showNumber(1)
            basic.pause(500)
            basic.clearScreen()
            while (true) {
                if (input.buttonIsPressed(Button.A)) {
                    basic.showNumber(5)
                    basic.pause(2000)
                    basic.clearScreen()
                    music.playMelody("E B C5 A B G A F ", 120)
                }
            }
        } else if (input.isGesture(Gesture.TiltRight)) {
            basic.showNumber(2)
            basic.pause(500)
            basic.clearScreen()
            while (true) {
                if (input.buttonIsPressed(Button.A)) {
                    basic.showNumber(7)
                    basic.pause(2000)
                    basic.clearScreen()
                    music.playMelody("A F E F D G E F ", 120)
                }
            }
        } else if (input.isGesture(Gesture.Shake)) {
            basic.showNumber(3)
            basic.pause(500)
            basic.clearScreen()
            while (true) {
                if (input.buttonIsPressed(Button.A)) {
                    basic.showNumber(8)
                    basic.pause(2000)
                    basic.clearScreen()
                    music.playMelody("G B A G C5 B A B ", 120)
                }
            }
        }
    }
}
