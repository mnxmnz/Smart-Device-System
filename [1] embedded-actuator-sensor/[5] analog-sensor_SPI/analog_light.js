const gpio = require('node-wiring-pi');
const mcpadc = require('mcp-spi-adc');

const CS_MCP3208 = 10;
const SPI_SPEED = 1000000;
const LIGHT = 0;
const LED = 1;

var timerid,
    timeout = 800;
var lightdate = -1;

const Light = mcpadc.openMcp3208(LIGHT, { speedHz: SPI_SPEED }, (err) => {
    console.log('SPI 채널0 초기화 완료!');
    console.log('---------------------');
    if (err) console.log('채널0 초기화 실패! (HW 점검!)');
});

const AnalogLight = () => {
    Light.read((error, reading) => {
        console.log('현재 측정된 조도값 (%d)', reading.rawValue);
        lightdata = reading.rawValue;
    });
    if (lightdata != -1) {
        if (lightdata > 2200) gpio.softPwmWrite(LED, 100);
        else if (lightdata < 500) gpio.softPwmWrite(LED, 1);
        else gpio.softPwmWrite(LED, 30);
        lightdata = -1;
    }
    timerid = setTimeout(AnalogLight, timeout);
}

process.on('SIGINT', () => {
    Light.close(() => {
        console.log('MCP-ADC가 해제되어, 프로그램을 종료합니다.');
        gpio.softPwmWrite(LED, 0);
        process.exit();
    });
});

gpio.wiringPiSetup();
gpio.pinMode(CS_MCP3208, gpio.OUTPUT);
gpio.softPwmCreate(LED, 1, 100);
console.log('---------------------------------------------------------');
console.log('전등을 끄거나 켜서 밝기를 변화시키면서 프로그램을 확인하세요.');
console.log('---------------------------------------------------------');
setImmediate(AnalogLight);