export default {
  name: 'Wallet',
  sites: [{
    domain: 'myetherwallet.com',
    keywords: ['ether'],
    props: {
      walletType: 'hardware',
      webInterface: true,
      mobileApp: true,
      desktopClient: false,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'ledgerwallet.com',
    keywords: [
      'hardware', 'ether', 'bitcoin'
    ],
    props: {
      walletType: 'hardware',
      webInterface: true,
      mobileApp: true,
      desktopClient: false,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'trezor.io',
    keywords: [
      'hardware', 'ether', 'bitcoin'
    ],
    props: {
      walletType: 'hardware',
      webInterface: true,
      mobileApp: false,
      desktopClient: false,
      independenceWallet: true,
      privacy: 'Variable',
      security: 'Good'
    }
  }, {
    domain: 'blockchain.info',
    keywords: [
      'hot-wallet', 'bitcoin'
    ],
    props: {
      walletType: 'hot-wallet',
      webInterface: true,
      mobileApp: true,
      desktopClient: false,
      independenceWallet: false,
      privacy: 'Weak',
      security: 'Good'
    }
  }, {
    domain: 'coinbase.com',
    keywords: [
      'hot-wallet', 'ether', 'bitcoin'
    ],
    props: {
      walletType: 'hot-wallet',
      webInterface: true,
      mobileApp: true,
      desktopClient: false,
      independenceWallet: false,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'exodus.io',
    keywords: [
      'hot-wallet',
      'bitcoin',
      'ethereum',
      'golem',
      'augur',
      'dash',
      'litecoin',
      'aragon'
    ],
    props: {
      walletType: 'hot-wallet',
      webInterface: false,
      mobileApp: false,
      desktopClient: true,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'mycelium.com',
    keywords: ['hot-wallet'],
    props: {
      walletType: 'hot-wallet',
      webInterface: false,
      mobileApp: true,
      desktopClient: false,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'keepkey.com',
    keywords: ['hardware'],
    props: {
      walletType: 'hardware',
      webInterface: true,
      mobileApp: false,
      desktopClient: false,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'jaxx.io',
    keywords: ['hot-wallet'],
    props: {
      walletType: 'hot-wallet',
      webInterface: true,
      mobileApp: true,
      desktopClient: true,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'electrum.org',
    keywords: ['hot-wallet'],
    props: {
      walletType: 'hot-wallet',
      webInterface: false,
      mobileApp: false,
      desktopClient: true,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Moderate'
    }
  }, {
    domain: 'bitcoin.org',
    keywords: [
      'hot-wallet', 'bitcoin'
    ],
    props: {
      walletType: 'hot-wallet',
      webInterface: false,
      mobileApp: false,
      desktopClient: true,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'copay.io',
    keywords: ['multisig'],
    props: {
      walletType: 'multisig',
      webInterface: true,
      mobileApp: true,
      desktopClient: true,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'bitcoinarmory.com',
    keywords: ['varies'],
    props: {
      walletType: 'varies',
      webInterface: false,
      mobileApp: false,
      desktopClient: true,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'greenaddress.it',
    keywords: ['hot-wallet'],
    props: {
      walletType: 'hot-wallet',
      webInterface: true,
      mobileApp: true,
      desktopClient: true,
      independenceWallet: true,
      privacy: 'Moderate',
      security: 'Good'
    }
  }, {
    domain: 'xapo.com',
    keywords: ['hot-wallet'],
    props: {
      walletType: 'hot-wallet',
      webInterface: true,
      mobileApp: false,
      desktopClient: false,
      independenceWallet: false,
      privacy: 'Moderate',
      security: 'Moderate'
    }
  }, {
    domain: 'btc.com',
    keywords: ['hot-wallet'],
    props: {
      walletType: 'hot-wallet',
      webInterface: true,
      mobileApp: true,
      desktopClient: false,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'bitgo.com',
    keywords: ['hot-wallet'],
    props: {
      walletType: 'hot-wallet',
      webInterface: true,
      mobileApp: false,
      desktopClient: false,
      independenceWallet: false,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'airbitz.co',
    keywords: ['hot-wallet'],
    props: {
      walletType: 'hot-wallet',
      webInterface: false,
      mobileApp: true,
      desktopClient: false,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'coolbitx.com',
    keywords: ['hardware'],
    props: {
      walletType: 'hot-wallet',
      webInterface: false,
      mobileApp: true,
      desktopClient: false,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    name: 'Ethereum clasic wallet',
    url: 'https://ethereumproject.github.io/etherwallet/',
    keywords: ['hot-wallet'],
    props: {
      walletType: 'hot-wallet',
      webInterface: true,
      mobileApp: false,
      desktopClient: false,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    name: 'Ethereum Wallet (Mist)',
    url: 'https://github.com/ethereum/mist/releases/',
    keywords: ['desktop-wallet'],
    props: {
      walletType: 'desktop-wallet',
      webInterface: false,
      mobileApp: false,
      desktopClient: true,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'metamask.io',
    keywords: ['browser-extension'],
    props: {
      walletType: 'browser-extension',
      webInterface: false,
      mobileApp: false,
      desktopClient: true,
      independenceWallet: true,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'gatehub.net',
    keywords: [
      'hot-wallet', 'ripple'
    ],
    props: {
      walletType: 'hot-wallet',
      webInterface: true,
      mobileApp: false,
      desktopClient: false,
      independenceWallet: false,
      privacy: 'Good',
      security: 'Good'
    }
  }, {
    domain: 'litecoin.org',
    keywords: ['litecoin']
  }, {
    domain: 'dash.org',
    url: 'https://www.dash.org/wallets/',
    keywords: ['dash']
  }, {
    name: 'NEM wallet',
    domain: 'nem.io',
    url: 'https://www.nem.io/install.html',
    keywords: ['nem']
  }, {
    name: 'Monero wallets',
    domain: 'getmonero.org',
    url: 'https://getmonero.org/downloads/',
    keywords: ['monero']
  }, {
    domain: 'mymonero.com',
    keywords: ['monero', 'web-wallet']
  }, {
    name: 'NEO wallets',
    domain: 'neo.org',
    url: 'https://neo.org/download',
    keywords: ['neo']
  }]
}