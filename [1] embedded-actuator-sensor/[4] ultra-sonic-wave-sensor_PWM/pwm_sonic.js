const gpio = require('node-wiring-pi');
const TRIG = 27;
const ECHO = 28;
const LED = 29;

var startTime;
var travelTime;

const Triggering = function () {
    gpio.digitalWrite(TRIG, gpio.LOW);
    gpio.delayMicroseconds(2);
    gpio.digitalWrite(TRIG, gpio.HIGH);
    gpio.delayMicroseconds(20);
    gpio.digitalWrite(TRIG, gpio.LOW);

    while (gpio.digitalRead(ECHO) == gpio.LOW);

    startTime = gpio.micros();
    while (gpio.digitalRead(ECHO) == gpio.HIGH);
    travelTime = gpio.micros() - startTime;
    distance = travelTime / 58;

    if (distance < 400) {
        console.log('근접 거리: %i cm\n', distance);
        effect_led(distance);
    }
    setTimeout(Triggering, 200);
}

const effect_led = (dis) => {
    if (dis < 5) gpio.softPwmWrite(LED, 100);
    else if (dis >= 5 && dis < 10) gpio.softPwmWrite(LED, 60);
    else if (dis >= 10 && dis < 20) gpio.softPwmWrite(LED, 40);
    else if (dis >= 20 && dis < 50) gpio.softPwmWrite(LED, 15);
    else if (dis >= 50 && dis < 100) gpio.softPwmWrite(LED, 7);
    else gpio.softPwmWrite(LED, 0);
}

process.on('SIGINT', function () {
    gpio.softPwmWrite(LED, 0);
    process.exit();
});

gpio.wiringPiSetup();
gpio.pinMode(LED, gpio.OUTPUT);
gpio.pinMode(TRIG, gpio.OUTPUT);
gpio.pinMode(ECHO, gpio.INPUT);
gpio.softPwmWrite(LED, 1, 100);
setImmediate(Triggering);