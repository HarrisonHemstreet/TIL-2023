Hey Gang!
TIL DR; Below is a method for taking notes more efficiently.

Something that has helped me is taking notes. Here's a way of note taking that 
has really helped me stay consistent due to the fact this approach makes taking 
notes very easy. Essentially, this consists of taking notes from my terminal. 
I have two commands: til and vtil which I use to both enter into my note taking 
file to make new entries AND to commit my latest changes to my note taking file. 
This sounds super simple, but if you really think about it, one of the biggest 
reasons why we don't take notes as often as we should be is due to how long it 
takes for our note apps to boot up. This solution makes note taking as close to 
instantaneous as one can get.

Here's the file for making these changes. Add the attached ".bash_functions" to 
your root directory (if you are running bash). After, restart your current terminal, 
or run source .bash_functions to get the new changes working. You're also going 
to want to add something like this to your .bashrc:
# Alias definitions.                                                            
# You may want to put all your additions into a separate file like              
# ~/.bash_aliases, instead of adding them here directly.                        
# See /usr/share/doc/bash-doc/examples in the bash-doc package.                 
                                                                                 
if [ -f ~/.bash_aliases ]; then                                                                
     . ~/.bash_aliases                                                           
fi                                                                              
                                                                                 
if [[ -f ~/.bash_functions ]]; then                                             
     source ~/.bash_functions                                                    
fi   

Next, create a directory called "til" on your root directory. Within this directory, 
create a file called "til.md". This is your new note taking file.

Now, link this directory to your GitHub so you can save all new changes.

From anywhere within your terminal, run vtil . You should be taken to your file 
in Vim. Make a change and write to the file and exit. From your terminal, run til . 
You should see your changes automatically being pushed to GitHub with that one command

If you happen to be getting errors when running vtil , make sure you have Vim 
installed. If you do not, or would like to configure it, I recommend this YouTube 
channel for tutorials with using Vim/creating a great beginner config
