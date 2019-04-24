#!/bin/bash

read -p "Signal color? " color
case "$color" in
    red)
        echo "stop"
        ;;
    blue|green)
        echo "go"
        ;;
    ywllow)
        echo "caution"
        ;;
    *)
        echo "wrong signal"
esac
