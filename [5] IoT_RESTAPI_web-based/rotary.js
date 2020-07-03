const gpio = require('node-wiring-pi');
const DT = 29;
const CLK = 28;
var rotate = 0;

const SenseRotate = function () {
    var checked = 0;
    while (gpio.digitalRead(DT) == 0) {
        if (checked == 0) {
            rotate++;
            checked++;
            console.log(rotate);
        }
        while (gpio.digitalRead(CLK) == 0) {}
    }
    while (gpio.digitalRead(CLK) == 0) {
        if (checked == 0) {
            rotate--;
            checked++;
            console.log(rotate);
        }
        while (gpio.digitalRead(DT) == 0) {}
    }
    setTimeout(SenseRotate, 20);
}

process.on('SIGINT', function () {
    console.log('Program Exit...');
    process.exit();
});

gpio.wiringPiSetup();
gpio.pinMode(DT, gpio.INPUT);
gpio.pinMode(CLK, gpio.INPUT);
setImmediate(SenseRotate);