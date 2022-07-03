# start xampp
xampp() { cd ~ && sudo /opt/lampp/lampp start; }

# check which ports are occupied
checkports() { sudo lsof -i -P -n | grep LISTEN; }

# go to thinkrust.md in vim
vtr() { cd ~/thinkrust && vim thinkrust.md; }

# go to my TIL in vim
vtil() { cd ~/til && vim til.md; }

# git commit changes using the current date as the commit message.
til() { git add . && git commit -m "$(date '+%d %B %Y')" && git push; }

# daily commit that happens at 4 am each day within the til repo. Appends the 
# current date in DAY MONTH YEAR format to the end of the file
til-daily() { 
        todayDate="# $(date '+%d %B %Y')\nTIL:\nTODO:"
        echo $todayDate >> til.md
    }

# go to htdoc within xampp (location for where I can make files for the xampp
# server.)
phppractice() { cd /opt/lampp/htdocs/practice; }

mcom() {
    for i in { 0..1 }
        do
            echo abc >> ~/mcom/$1
            git add . && git commit -m "$(date '+%d %B %Y')aaa" && git push;
        done
        echo All done.
        echo $1
}

nv() { nvim $1; }

alias rgf='rg --files'
alias fd='fdfind'
