#!/bin/sh

source .env
pm2-runtime start ecosystem.config.js --env production