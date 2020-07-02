const gpio = require('node-wiring-pi');
const mysql = require('mysql');
const TRIG = 29;
const ECHO = 28;
var startTime;
var travelTime;

const client = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'yourpassword',
    database: 'sensordb',
});

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
        console.log('근접거리: %i cm', distance);

        if (distance <= 20) {
            let stamptime = new Date();
            client.query('INSERT INTO sonic VALUES (?, ?)', [stamptime, distance], (err, result) => {
                if (err) {
                    console.log('DB저장실패!');
                    console.log(err);
                } else console.log('DB에 저장을 했습니다!');
            });
        }
    }
    setTimeout(Triggering, 700);
};

const Retrieve = function () {
    let stamp_distance;
    client.query('SELECT * FROM `sonic`', function (error, results, fields) {
        console.log('----------------- 현재까지 DB에 저장된 내용을 출력합니다 ---------------');
        results.forEach(function (element, i) {
            let d = element.stamp,
                str = '';
            str += d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() + ' ';
            str += d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.';
            str += d.getMilliseconds() + ' ' + element.distance + 'cm';
            console.log(str);
        });
        console.log('----------------------------------------');
        setTimeout(Retrieve, 5000);
    });
};

gpio.wiringPiSetup();
gpio.pinMode(TRIG, gpio.OUTPUT);
gpio.pinMode(ECHO, gpio.INPUT);
setImmediate(Triggering);
setImmediate(Retrieve);
console.log('============================================');
console.log('근접거리가 20cm 이내에만 MariaDB 에 저장합니다');
console.log('============================================');