#!/bin/bash

str="AIXdemo-22-06-29-130757.zip "
tmp="${str%%-*}"
echo $tmp

if [ -z ${1+x} ];
then
    echo "if was true"
else
    echo "if was false"
fi

exit 0;
