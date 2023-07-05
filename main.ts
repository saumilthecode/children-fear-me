let noise = 0
led.enable(true)
basic.forever(function () {
    noise = smarthome.ReadNoise(AnalogPin.P2)
    if (noise > 20) {
        neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB).showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(1000)
        neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB).showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(1000)
    }
})
