## Smart Device System

스마트 기기 시스템 실습 코드 및 강의 내용 정리 레포입니다.

- Framework (Node.js)
- Raspbian OS (Linux)

### :floppy_disk: 한글 SW 패키지 설치

```
$ sudo apt-get -y install ibus
$ sudo apt-get -y install ibus-hangul
$ sudo apt-get -y install fonts-unfonts-core
```

### :floppy_disk: Node.js 플랫폼 설치

```
$ wget https://nodejs.org/dist/v11.15.0/node-v11.15.0-linux-armv7l.tar.xz
$ tar xvfJ node-v11.15.0-linux-armv7l.tar.xz
$ cd node-v11.15.0-linux-armv7l
$ sudo cp -R * /usr
```

### :floppy_disk: WiringPi 라이브러리 4B 모델로 업그레이드 (2.5 -> 2.52)

```
$ wget https://project-downloads.drogon.net/wiringpi-latest.deb
$ sudo dpkg -i wiringpi-latest.deb
```

### :floppy_disk: Node 모듈 설치

```
$ npm install node-wiring-pi
```

### :floppy_disk: [1-3] - WiringPi GPIO API 설치

```
$ npm install node-wiring-pi
```

### :floppy_disk: [1-5] - Node.js ADC 외부 모듈 설치

```
$ npm install mcp-spi-adc
```

### :floppy_disk: [2] - socket.io 설치

```
$ npm install socket.io
```

### :floppy_disk: [4] - MySQL(Maria DB) DB 서버 설치

```
$ sudo apt install mariadb-server
```

### :floppy_disk: [4] - 환경 설정 파일 백업 생성

```
$ cd /etc/mysql/mariadb.conf.d
$ sudo cp 50-server.cnf server.cnf.backup
```

### :floppy_disk: [4] - 환경 설정 파일 수정

```
$ sudo vi 50-server.cnf 
# bind-address = 127.0.0.1 (주석 처리)
```

### :floppy_disk: [4] - DB 서버 실행

```
$ sudo systemctl restart mariadb.service
```

### :floppy_disk: [4] - DB 서버 접속용 root 암호 설정

```
$ sudo mysqladmin -u root password 'yourpassword'
```

### :floppy_disk: [4] - DB 인증 설정

```
$ mysql -u root –p
Enter password: *
MariaDB > set password for root@localhost = password('yourpassword');
MariaDB > use mysql;
MariaDB > flush privileges;
MariaDB > exit
$ mysql -u root -p
Enter password: *
MariaDB >
```

### :floppy_disk: [4] - database 생성

```
MariaDB> create database sensordb;
```

### :floppy_disk: [4] - table 생성

```
MariaDB > use sensordb;
MariaDB > create table sonic (stamp DATETIME(3) NOT NULL, distance INT);
MariaDB > show tables;
MariaDB > desc sonic;
```

### :floppy_disk: [4] - record 추가 + 조회

```
MariaDB > insert into sonic values (now(3), 91);
MariaDB > select * from sonic;
```

### :floppy_disk: [4] - Node.js에서의 MySQL 연동 모듈 설치

```
$ npm install mysql
```

### :floppy_disk: [6] - BLE 모듈 설치

```
$ sudo apt-get install libbluetooth-dev
$ npm install @abandonware/bleno
$ npm install @abandonware/noble
```
