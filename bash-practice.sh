#!/bin/bash

for i in *; do
  first_four="${i::3}";
  if [[ "$first_four" == "tes" ]]; then
    echo $first_four;
  fi
done
exit 0;
