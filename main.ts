let noise = 0
led.enable(true)
basic.forever(function () {
    noise = smarthome.ReadNoise(AnalogPin.P2)
    basic.showString("" + (noise))
})
