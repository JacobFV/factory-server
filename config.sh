#!/bin/sh

# see the article referenced on github for details
# https://github.com/JacobFV/factory-server

read -p "see the referenced article at https://github.com/JacobFV/factory-server for config settings"
sudo raspi-config

sudo apt install -y npm handlebars python3-pip git
sudo pip3 install --upgrade pip
sudo pip3 install jupyterlab

# CNCjs guide
# Update System
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
# sudo rpi-update. # Update Raspberry Pi kernel and firmware, [is already done with 'apt-get update / upgrade'](github.com/cncjs/cncjs/issues/97)

# Install Build Essentials & GIT
sudo apt-get install -y build-essential git
# Install Node.js via Package Manager & Add Package Source
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -  # Install NodeJS v7
sudo apt-get install -y nodejs  # npm nodejs-legacy #(Installed with nodesource)
# Update Node Package Manager (NPM)
sudo npm install npm@latest -g
# Install Latest Release Version of CNCjs
sudo npm install -g cncjs@latest --unsafe-perm

# camera
sudo pip3 install picamera

# factory server
cd /home/pi
git clone https://github.com/JacobFV/factory-server
cd factory-server

read -p "insert this line at the bottom: @reboot /home/pi/factory-server/start.sh &"
sudo crontab -e

# vnc server
sudo apt install -y realvnc-vnc-server realvnc-vnc-viewer lightdm lxsession
read -p "enable VNC server (5.P3) and boot desktop (3.B1.B4)"
sudo raspi-config

# application packages
sudo apt install chromium-browser 

read -p "log in via VNC and sign in on realVNC for remote access"
