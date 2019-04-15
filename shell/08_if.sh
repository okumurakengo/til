#!/bin/bash

read -p "Name? " name
if [ "$name" = "taguchi" ]; then
    echo "welcome"
elif [ "$name" = "fkoji" ]; then
    echo "welcome too"
else
    echo "you are not allowed"
fi
