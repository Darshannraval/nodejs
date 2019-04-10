#!/bin/bash
pwd
cd /home/ubuntu
git clone https://github.com/Darshannraval/nodejs.git
cd /home/ubuntu/nodejs
pm2 start app.js 

