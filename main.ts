let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.showRainbow(1, 360)
basic.forever(function () {
    for (let index = 0; index <= 700; index++) {
        pins.analogWritePin(AnalogPin.P1, index)
        basic.pause(100)
    }
    for (let index = 0; index <= 700; index++) {
        pins.analogWritePin(AnalogPin.P1, 1023 - index)
        basic.pause(100)
    }
})
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
basic.forever(function () {
    basic.pause(5000)
    for (let index = 0; index <= 700; index++) {
        pins.analogWritePin(AnalogPin.P2, index)
        basic.pause(100)
    }
    for (let index = 0; index <= 700; index++) {
        pins.analogWritePin(AnalogPin.P2, 1023 - index)
        basic.pause(100)
    }
})
