# Raspberry-Pi
> * Framework (Node.js)
> * Raspbian OS (Linux)
## 한글 SW 패키지 설치
<pre>
<code>
sudo apt-get -y install ibus
sudo apt-get -y install ibus-hangul
sudo apt-get -y install fonts-unfonts-core
</code>
</pre>
## Node.js 플랫폼 설치
<pre>
<code>
wget https://nodejs.org/dist/v11.15.0/node-v11.15.0-linux-armv7l.tar.xz
tar xvfJ node-v11.15.0-linux-armv7l.tar.xz
cd node-v11.15.0-linux-armv7l
sudo cp -R * /usr
</code>
</pre>
## wiringPi 라이브러리 4B 모델로 업그레이드 (2.5 -> 2.52)
<pre>
<code>
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
</code>
</pre>
## Node 모듈 설치
<pre>
<code>
npm init
npm install node-wiring-pi
</code>
</pre>
## [1-3] - WiringPi GPIO API 설치
<pre>
<code>
npm install node-wiring-pi
</code>
</pre>
## [1-5] - Node.js ADC 외부 모듈 설치
<pre>
<code>
npm install mcp-spi-adc
</code>
</pre>
## [2] - socket.io 설치
<pre>
<code>
npm install socket.io
</code>
</pre>