input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("123456789  10")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("10  987654321")
})
input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
