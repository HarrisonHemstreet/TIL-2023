#!/bin/bash

gdeArray=();

for i in *; do
  firstThree="${i::3}";
  if [[ "$firstThree" == "gde" ]]; then
    gdeArray+=($i);
  fi
done

echo ${gdeArray[2]}

gdePrime=${gdeArray[0]};
gdeTwo=${gdeArray[1]};
gdeThree=${gdeArray[2]};
oldGdes=();
start=3;
count=$((${#gdeArray[@]} - 4))
if [[ $gdePrime == "gde" && $gdeTwo == "gde2" && $gdeThree == "gde3" ]]; then
  arrayLength=${#gdeArray[@]}-1
  oldGdes=(gdeArray[@]:$start:$count)
  echo ${gdeArray};
fi

exit 0;
