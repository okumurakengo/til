#!/bin/bash

i=1
while read line; do
    echo $i "$line"
    ((i++))
done

# cat 13_file.sh | ./13_file.sh 
