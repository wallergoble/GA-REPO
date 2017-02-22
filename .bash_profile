
echo "Hello from .bash_profile"

export PATH=/usr/local/bin:$PATH

alias path='echo -e ${PATH//:/\\n}'
alias c=clear
alias ..='cd ..'
alias ...='cd ../../../'
alias ....='cd ../../../../'
alias .....='cd ../../../../'
alias .4='cd ../../../../'
alias .5='cd ../../../../..'
alias tree='tree -I "node_modules|bower_components"'
alias httpserver = 'http-server-c-1'

# Git Aliases
alias gs='git status'
alias gs='git status -sb'
alias ga='git add .'
alias gba='git branch -a'





[[ -r ~/.bashrc ]] && . ~/.bashrc

[[ $- = *i* ]] && source ~/liquidprompt/liquidprompt # LiquidPrompt

[ -s "$HOME/.profile" ]] && source "$HOME/.profile" # Load the default .profile

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
