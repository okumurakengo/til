#!/bin/bash

for i in {1..5}
do 
    echo $i
done

for ((i=1; i<=5; i++)); do
    echo $i
done

colors=(red blue pink)
for color in ${colors[@]}; do
    echo $color
done

for item in $(date); do
    echo $item
done
