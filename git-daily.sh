 #! /bin/sh
   cd ~/til && todayDate="# $(date '+%d %B %Y')" && echo $todayDate >> til.md && git add . && git commit -m "$(date '+%d %B %Y')" && git push
