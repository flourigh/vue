#!/bin/bash
PWA_ASSET_GENERATOR=`pwa-asset-generator ./public/favicon.png ./public/img/icons/`
VUE_ASSET_GENERATE=`vue-asset-generate -a ./public/favicon.png -o ./public/img/icons/`
# rm ./public/img/icons/*
$PWA_ASSET_GENERATOR
$VUE_ASSET_GENERATE
cp ./public/img/icons/android-chrome-192x192.png ./public/img/icons/android-chrome-maskable-192x192.png
cp ./public/img/icons/android-chrome-512x512.png ./public/img/icons/android-chrome-maskable-512x512.png
cp ./public/img/icons/android-chrome-192x192.png ./public/img/icons/favicon-128x128.png
cp ./public/img/icons/favicon.ico ./public/favicon.ico
rm ./public/img/icons/manifest.json
