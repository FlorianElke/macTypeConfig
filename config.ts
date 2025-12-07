import { Configuration } from '../../.local/macType/src/types';
import { dockSetting, trackpadSetting } from '../../.local/macType/src/managers/macos-defaults';

declare var __dirname: any;

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
      'google-chrome',
      'visual-studio-code'
    ],
  },

  appstore: {
    apps: [
      { id: 497714887, name: 'WebSSH' }
    ],
  },

  macos: {
    settings: [
      trackpadSetting('TapToClick', true),
      dockSetting('show-recents', false)
    ],
    dockApps: [
      { name: 'Visual Studio Code', position: 1 },
      { name: 'Google Chrome' },
      { name: '1Password' }
    ],
    wallpaper: __dirname + '/wallpaper.jpg'
  },
  git: {
    settings: [
      { scope: 'global', key: 'user.name', value: 'Florian Elke' },
      { scope: 'global', key: 'user.email', value: 'flo@gentlent.com' },
    ]
  },

  files: [
    {
      source: 'configs/zshrc',
      target: '~/.zshrc',
      backup: true
    },
    {
      source: 'configs/ssh_config',
      target: '~/.ssh/config',
      backup: true
    }
  ]
};

export default config;
