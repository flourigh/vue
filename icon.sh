#!/bin/bash
PWA_ASSET_GENERATOR=`pwa-asset-generator ./public/favicon.png ./public/img/icons/`
VUE_ASSET_GENERATE=`vue-asset-generate -a ./public/favicon.png -o ./public/img/icons/`
# rm ./public/img/icons/*
$PWA_ASSET_GENERATOR && $VUE_ASSET_GENERATE
