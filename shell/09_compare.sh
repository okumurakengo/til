#!/bin/bash

read -p "Name? " name
if [[ -z $name ]]; then
    echo "empty ..."
fi

if [[ $name =~ ^t ]]; then
    echo "starts with t..."
fi
