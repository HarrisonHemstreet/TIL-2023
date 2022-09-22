#!/bin/bash

airlineName=$1;
echo "$airlineName";

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
count=$((${#gdeArray[@]} - 3))

if [[ $gdePrime == "gde" && $gdeTwo == "gde2" && $gdeThree == "gde3" ]]; then
  # gather up every gde* directory that is not included in prime, two or three so we can delete them
  oldGdes=(${gdeArray[@]:3:$count});
fi

# check to see if there are any old directories we need to delete
if [[ ${#oldGdes} ]]; then
  echo "not empty";
  # ... if so delete them here. loop through here and just rm -rf each directory name
else
  echo "empty, or not working"
fi

# now we will go through and rename the directories, and delete any we don't need
rm -rf "$gdeThree";
mv "$gdeTwo" "gde3";
mv "$gdePrime" "gde2";

# rename the unzipped directory that is default named after the airline
mv "$airlineName" "gde"

exit 0;

# gde1="gde";
# gde2="gde2";
# gde3="gde3";
# gdeTEN="gde10";

# mv "$gde1" "gdeONE";
# mv "$gde2" "gdeTWO";
# mv "$gde3" "gdeTHREE";
# rm -rf "$gdeTEN";


