const request = require('request');
var peer2data = {
    name: 'kim',
    age: 22,
    addr: '서울',
    tel: '010-1234-5678',
}

request.post(
    { url: 'http://본인의 라즈베리파이 서버 IP주소:60001/member', form: peer2data, headers: { 'content-type': 'application/x-www-form-urlencoded' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);