#!/bin/bash

gdeArray=();

for i in *; do
  firstThree="${i::3}";
  if [[ "$firstThree" == "gde" ]]; then
    echo $i;
    gdeArray+=($i);
    echo $gdeArray;
  fi
done
exit 0;
