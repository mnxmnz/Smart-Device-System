const express = require('express');
const app = express();

var mydata = {
    name: 'kim',
    age: 22,
    addr: '서울',
    tel: '010-1234-5678',
};

var cnt;

const getmember = (req, res) => {
    console.log('Server: GET(%d) > 데이터 보냄!', cnt++);
    res.send(mydata);
}

app.get('/member', getmember);

app.listen(60001, () => {
    console.log('Peer1: server is activated on 60001 ...');
});