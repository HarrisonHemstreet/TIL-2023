#! /bin/sh
cd ~/til && todayDate="# $(date '+%d %B %Y')" && echo $todayDate >> til.md && git add . && git commit -m "$(date '+%d %B %Y')" && git push
# DO NOT DELETE THIS OR THIS FILE!
# This file is specifically for the cron job that should be running everyday at
# 4am. This command (or series of commands) adds an h1 of the current date at the
# end of the til.md file, and commits it to GitHub.
