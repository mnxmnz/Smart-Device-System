const request = require('request');

request.get({ url: 'http://본인의 라즈베리파이 서버 IP주소:60001/member', headers: { 'content-type': 'application/json' } }, function (error, res, body) {
    let data = JSON.parse(body);
    if (!error && res.statusCode == 200) {
        console.log('GET서버로부터 수신했음!');
        console.log('이름: ' + data.name);
        console.log('나이: ' + data.age);
        console.log('주소: ' + data.addr);
        console.log('연락처: ' + data.tel);
    }
});