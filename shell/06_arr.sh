#!/bin/bash

colors=(red blue pink)
echo ${colors[0]}
echo ${colors[1]}
echo ${colors[2]}
echo ${colors[@]}
echo ${#colors[@]}

colors[1]=silver
colors+=(green orange)
echo ${colors[@]}
