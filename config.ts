import { Configuration } from 'mactype';

const config: Configuration = {
  brew: {
    packages: [
      'git',
      'node',
      'claude-code',
      'zsh-syntax-highlighting',
      'mas'
    ],
    casks: [
      '1password',
      'google-chrome'
    ],
  },

  appstore: {
    apps: [
      { id: 497714887, name: 'WebSSH' }

    ],
  },

  macos: {
    settings: [
      {
        domain: 'com.apple.dock',
        key: 'autohide',
        value: true,
        type: 'bool',
      }
    ],
  },

  files: {
    files: [
      {
        source: './configs/zshrc.ts',
        target: '~/.zshrc',
        backup: true
      },
      {
        source: '.config/ssh_config.ts',
        target: '~/.ssh/config',
        backup: true
      }
    ]
  }
};

export default config;

