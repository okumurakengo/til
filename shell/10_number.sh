#!/bin/bash

if [[ -f $0 ]]; then
    echo "file exists ..."
fi

read -p "Number? " n
if ((n > 10)); then
    echo "bigger than 10"
fi
