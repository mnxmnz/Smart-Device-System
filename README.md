# Raspberry-Pi
> * Framework (Node.js)
> * Raspbian OS (Linux)
## 한글 SW 패키지 설치
<pre>
<code>
$ sudo apt-get -y install ibus
$ sudo apt-get -y install ibus-hangul
$ sudo apt-get -y install fonts-unfonts-core
</code>
</pre>
## Node.js 플랫폼 설치
<pre>
<code>
$ wget https://nodejs.org/dist/v11.15.0/node-v11.15.0-linux-armv7l.tar.xz
$ tar xvfJ node-v11.15.0-linux-armv7l.tar.xz
$ cd node-v11.15.0-linux-armv7l
$ sudo cp -R * /usr
</code>
</pre>
## WiringPi 라이브러리 4B 모델로 업그레이드 (2.5 -> 2.52)
<pre>
<code>
$ wget https://project-downloads.drogon.net/wiringpi-latest.deb
$ sudo dpkg -i wiringpi-latest.deb
</code>
</pre>
## Node 모듈 설치
<pre>
<code>
$ npm init
$ npm install node-wiring-pi
</code>
</pre>
## [1-3] - WiringPi GPIO API 설치
<pre>
<code>
$ npm install node-wiring-pi
</code>
</pre>
## [1-5] - Node.js ADC 외부 모듈 설치
<pre>
<code>
$ npm install mcp-spi-adc
</code>
</pre>
## [2] - socket.io 설치
<pre>
<code>
$ npm install socket.io
</code>
</pre>
## [4] - MySQL(Maria DB) DB 서버 설치
<pre>
<code>
$ sudo apt install mariadb-server
</code>
</pre>
## [4] - 환경 설정 파일 백업 생성
<pre>
<code>
$ cd /etc/mysql/mariadb.conf.d
$ sudo cp 50-server.cnf server.cnf.backup
</code>
</pre>
## [4] - 환경 설정 파일 수정
<pre>
<code>
$ sudo vi 50-server.cnf 
# bind-address = 127.0.0.1 (주석 처리)
</code>
</pre>
## [4] - DB 서버 실행
<pre>
<code>
$ sudo systemctl restart mariadb.service
</code>
</pre>
## [4] - DB 서버 접속용 root 암호 설정
<pre>
<code>
$ sudo mysqladmin -u root password 'yourpassword'
</code>
</pre>
## [4] - database 생성
<pre>
<code>
MariaDB> show databases;
MariaDB> create database sensordb;
MariaDB> show databases; 
</code>
</pre>
## [4] - table 생성
<pre>
<code>
MariaDB > use sensordb;
MariaDB > create table sonic (stamp DATETIME(3) NOT NULL, distance INT);
MariaDB > show tables;
MariaDB > desc sonic;
</code>
</pre>
## [4] - record 추가 + 조회
<pre>
<code>
MariaDB > insert into sonic values (now(3), 91);
MariaDB > select * from sonic;
</code>
</pre>
## [4] - Node.js에서의 MySQL 연동 모듈 설치
<pre>
<code>
$ npm install mysql
</code>
</pre>