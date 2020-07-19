#!/bin/sh

echo "make sure you have enabled your rpi CSI camera. Type `raspiconfig` for help."

wget http://www.linux-projects.org/listing/uv4l_repo/lrkey.asc && sudo apt-key add ./lrkey.asc

echo "Add the following line to the file /etc/apt/sources.list:\n deb http://www.linux-projects.org/listing/uv4l_repo/raspbian/stretch stretch main"

read -p "Press enter to continue"

sudo nano /etc/apt/sources.list

sudo apt-get update

sudo apt-get upgrade

sudo apt-get install uv4l uv4l-raspicam

sudo apt-get install uv4l-raspicam-extras

sudo apt-get install uv4l-server

sudo apt-get install uv4l-uvc

sudo apt-get install uv4l-xscreen

sudo apt-get install uv4l-mjpegstream

sudo reboot