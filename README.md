# Raspberry-Pi
> * Framework (Node.js)
> * Raspbian OS (Linux)
## 한글 SW 패키지 설치
<pre>
<code>
sudo apt-get -y install ibus \n
sudo apt-get -y install ibus-hangul \n
sudo apt-get -y install fonts-unfonts-core
</code>
</pre>
## Node.js 플랫폼 설치
<pre>
<code>
wget https://nodejs.org/dist/v11.15.0/node-v11.15.0-linux-armv7l.tar.xz \n
tar xvfJ node-v11.15.0-linux-armv7l.tar.xz \n
cd node-v11.15.0-linux-armv7l \n
sudo cp -R * /usr
</code>
</pre>
## wiringPi 라이브러리 4B 모델로 업그레이드 (2.5 -> 2.52)
<pre>
<code>
wget https://project-downloads.drogon.net/wiringpi-latest.deb \n
sudo dpkg -i wiringpi-latest.deb
</code>
</pre>
## Node 모듈 설치
<pre>
<code>
npm init \n
npm install node-wiring-pi \n
node_modules package.json 
</code>
</pre>