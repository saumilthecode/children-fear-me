let noise = 0
let light2 = 0
led.enable(false)
basic.forever(function () {
    light2 = smarthome.ReadLightIntensity(AnalogPin.P3)
    if (light2 < 50) {
        noise = smarthome.ReadLightIntensity(AnalogPin.P2)
        if (noise > 70) {
        	
        }
    }
})
