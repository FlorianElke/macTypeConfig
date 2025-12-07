

# Enable colors
autoload -U colors && colors

# History configuration
HISTSIZE=10000
SAVEHIST=10000
HISTFILE=~/.zsh_history
setopt SHARE_HISTORY
setopt HIST_IGNORE_DUPS

# Completion system
autoload -Uz compinit
compinit

# Prompt
PS1="%F{cyan}%n@%m%f:%F{yellow}%~%f$ "

# Aliases
alias ll='ls -lah'
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'

# Load syntax highlighting if installed
if [ -f /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh ]; then
  source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
fi

# Custom configuration
# Add your custom shell configuration here

export NVM_DIR="$([ -z "\${XDG_CONFIG_HOME -}" ] && printf %s "$\{HOME}/.nvm" || printf %s "$\{XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"


