#!/bin/bash

i=0
while ((i < 10)); do
    ((i++))
    echo $i
done

i=0
while ((i < 10)); do
    ((i++))
    if ((i == 4)); then
        continue
    fi
    if ((i == 8)); then
        break
    fi
    echo $i
done

while :
do
    read -p "Command? " cmd
    if [[ $cmd == "quit" ]]; then
        break
    else
        echo "$cmd"
    fi
done
