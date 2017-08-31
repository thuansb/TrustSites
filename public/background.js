/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 470);
/******/ })
/************************************************************************/
/******/ ({

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
    "name": "Neo Tracker Web Wallet",
    "url": "https://neotracker.io/wallet"
  }, {
    "name": "Download Neon wallet",
    "url": "https://github.com/CityOfZion/neon-wallet/releases"
  }, {
    name: 'Other NEO wallets',
    domain: 'neo.org',
    url: 'https://neo.org/download',
    keywords: ['neo']
  }, {
    domain: 'ledgerwallet.com',
    keywords: ['hardware', 'ether', 'bitcoin'],
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
    keywords: ['hardware', 'ether', 'bitcoin'],
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
    keywords: ['hot-wallet', 'bitcoin'],
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
    keywords: ['hot-wallet', 'ether', 'bitcoin'],
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
    keywords: ['hot-wallet', 'bitcoin', 'ethereum', 'golem', 'augur', 'dash', 'litecoin', 'aragon'],
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
    keywords: ['hot-wallet', 'bitcoin'],
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
    keywords: ['hot-wallet', 'ripple'],
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
  }]
};

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'Exchanger',
    sites: [{
        domain: 'bittrex.com',
        keywords: '',
        props: {
            country: 'US',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Bittrex is one of the larger crypto to crypto exchanges offering a large number ' + 'of trading pairs into bitcoin. The exchange does have a very high turnover crypt' + 'o currencies - leading some to accuse it of allowing pump and dump schemes that ' + 'erode confidence in the crypto currency ecosystem as a whole.'
        }
    }, {
        domain: 'bitstamp.net',
        keywords: '',
        props: {
            country: 'UK',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Bitstamp is run from the United Kingdom and is one of the most popular fiat to B' + 'itcoin exchanges. Bitstamp only allows for one exchange pair of USD to Bitcoin b' + 'ut does use conversion of other fiat currencies via its Slovenian banking partne' + 'r which will incur higher fees.'
        }
    }, {
        domain: 'coinbase.com',
        keywords: '',
        props: {
            country: 'US',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Coinbase offer USD to BTC trading and have publicly stated their plans to add ot' + 'her pairs as and when banking arrangements in other jurisdictions are secured. W' + 'ith the seamless integration of wallet and exchange features coinbase has rapidl' + 'y increased its trading volume and provides decent liquidity on low spreads.'
        }
    }, {
        domain: 'gemini.com',
        keywords: '',
        props: {
            country: 'US',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Gemini Exchange is aptly named after its two founders the Winklevoss twins. The ' + 'exchange is based in New York. In all perhaps one of the most considered and wel' + 'l positioned exchanges to capitalise on the bridge between main financial market' + 's and the present ecosystem. A breath of fresh air in bringing a touch of wall s' + 'treet class & security to the innovative 7 nascent Bitcoin arena.'
        }
    }, {
        domain: 'kraken.com',
        keywords: '',
        props: {
            country: 'US',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Kraken is a top European based exchange and offers a variety of fiat to bitcoin ' + 'pairs such as JPY, EUR, GBP and USD. Volume is decent especially on the JPY BTC ' + 'pair after MT Gox\'s collapse - with Kraken assuming the mantle in that region. ' + 'The exchange also has a smattering if popular crypto to crypto pairs including l' + 'itecoin and dogecoin.'
        }
    }, {
        domain: 'poloniex.com',
        keywords: '',
        props: {
            country: 'US',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Poloniex is a pure crypto to crypto exchange based in the United States. With a ' + 'grand redesign in early 2015 the site has added a wealth of features to provide ' + 'a fully immersive trading experience. Technical analysis charts and live chat me' + 'an it is easy to stay abreast of news flow and analyse price trends before takin' + 'g a position.'
        }
    }, {
        domain: 'bitfinex.com',
        keywords: 'British Virgin Islands, fiat',
        props: {
            country: 'British Virgin Islands',
            type: 'centralized',
            pairs: 'multi',
            desc: 'BitFinex offers three main functions - it is a bitcoin, litecoin and dashcoin to' + ' fiat exchange, a margin trading exchange and a liquidity provider. Although the' + ' company is said to be in Beta phase there are a number of features available th' + 'at expand the financial positions you can take - for example the ability to shor' + 't Bitcoin via margin trading.'
        }
    }, {
        domain: 'bitflyer.jp',
        keywords: 'leading Japanese exchange, send and receive Bitcoins in just 1',
        props: {
            country: 'Japan',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH',
            desc: 'bitFlyer is the leading Japanese exchange in trade volume. It allows users to ex' + 'change Bitcoin for JPY and to trade with margin. The exchange allows users send ' + 'and receive Bitcoins in just 1 second, storing said BTC using next generation en' + 'cryption by DigiCert.'
        }
    }, {
        domain: 'bithumb.com',
        keywords: 'Korea, largest exchanges in South Korea, buy/sell/store Bitcoin and Ethereum',
        props: {
            country: 'Korea',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH',
            desc: 'Bithumb is one of the largest exchanges in South Korea, allowing users to buy/se' + 'll/store Bitcoin and Ethereum. Bithump offers additional services like remittanc' + 'es and gift vouchers.'
        }
    }, {
        domain: 'okcoin.com',
        otherDomains: ['okcoin.cn'],
        keywords: 'largest volumes and good liquidity - best pricing',
        props: {
            country: 'China',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH',
            desc: 'OKCoin is another top Bitcoin exchange. Even though it is based in China - it ha' + 's offshoot offices around the world. With some of the largest volumes and good l' + 'iquidity - best pricing is easy to achieve. OkCoin offers both LTC and BTC tradi' + 'ng pairs into USD as well as futures on LTC and BTC with leverage up to 20 X.'
        }
    }, {
        domain: 'btcc.com',
        otherDomains: ['btcchina.com'],
        keywords: 'China, CNY',
        props: {
            country: 'China',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH, MXN',
            desc: 'BTCC is one of the dominant players for CNY (Chinese Yuan) trades into Bitcoin. ' + 'They also offer a Litecoin pair too. With high volume and healthy liquidity ther' + 'e are no issues with using this exchange to find the best price available.'
        }
    }, {
        domain: 'gdax.com',
        keywords: 'USD, EUR',
        props: {
            country: 'Unknown',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH',
            desc: 'GDAX offers institutions and professionals the ability to trade a variety of dig' + 'ital currencies like Bitcoin, Ethereum, and more on a regulated U.S. based excha' + 'nge.'
        }
    }, {
        domain: 'huobi.com',
        keywords: 'China, leading trading',
        props: {
            country: 'China',
            type: 'centralized',
            pairs: 'multi',
            desc: 'HuoBi is one of the world\'s leading trading platform, committed to provide inve' + 'stors with a professional, safe and honest transaction services. March 4, 2014, ' + 'fire currency net daily trading volume of more than 260,000, the transaction amo' + 'unted to 1 billion yuan, creating a global trading platform where Bitcoin record' + ', is one of the world\'s largest trading volume of Bitcoin trading platform .'
        }
    }, {
        domain: 'coinone.co.kr',
        keywords: 'Korea, KRW',
        props: {
            country: 'Korea',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH',
            desc: 'Coinone is a South Korea-based exchange platform that allows users to buy, sell ' + 'and store Bitcoin, Ether and Ether Classic. The market allows users to exchange ' + 'these cryptocurrencies for South Korean Won (KRW) and offers margin trading serv' + 'ices.'
        }
    }, {
        domain: 'korbit.co.kr',
        keywords: 'Korea, biggest BTCand ETH exchange in Korea, safe',
        props: {
            country: 'Korea',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH',
            desc: 'Korbit is the biggest BTCand ETH exchange in South Korea. They provide a safe pl' + 'atform to trade and exchange BTC to KRW and have multiple withdrawal and deposit' + ' methods. Their trading fee is 1%.'
        }
    }, {
        domain: 'hitbtc.com',
        keywords: 'UK, USD, EUR, GBP to BTC',
        props: {
            country: 'Uk',
            type: 'centralized',
            pairs: 'multi',
            desc: 'HitBTC registerd in the UK in early 2015. The exchange offers USD, EUR, GBP to B' + 'TC as well as a collection of the most common crypto to crypto trading pairs. Th' + 'e volume has been steadily rising providing decent liquidity and a narrowing bid' + ' ask spread. Security is good with its two factor authentication and with an unb' + 'lemished track record.'
        }
    }, {
        domain: 'jubi.com',
        keywords: 'China, CNY',
        props: {
            country: 'China',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Jubi is a Chinese exchange, allowing users to exchange a wide variety of cryptoc' + 'urrencies for CNY. The exchange was founded in January 2014 by Beijing Zigong Te' + 'chnology Co., Ltd., and was officially launched in March 2014. Its core team is ' + 'composed of many technical staff who have been concerned with virtual currency f' + 'or many years. The company is committed to providing a safe, stable and quality ' + 'trading experience for the second generation of cryptocurrencies or altcoins.'
        }
    }, {
        domain: 'yunbi.com',
        keywords: 'China, Peatio Open Source Project',
        props: {
            country: 'China',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Built with the code released by Peatio Open Source Project, YUNBI adheres to the' + ' principle of integrity, transparency and being open­-sourced, offering customer' + 's a highly­-safe and easily­-operating platform to trade digital currencies.'
        }
    }, {
        domain: 'binance.com',
        keywords: 'China, BTC, ETH, LTC, BNB, NEO, GAS',
        props: {
            country: 'China',
            type: 'centralized',
            pairs: 'multi',
            desc: ''
        }
    }, {
        domain: 'gatecoin.com',
        keywords: 'security, reliability and cost-efficient',
        props: {
            country: 'China',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Gatecoin is a regulated digital currency exchange focused on security, reliabili' + 'ty and cost-efficient transfers. They also provide other related services such a' + 's prepaid debit cards, merchant and remittance solutions.'
        }
    }, {
        domain: 'quadrigacx.com',
        keywords: 'BTC and LTC/ETH, CAD',
        props: {
            country: 'Canada',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH, CAD',
            desc: 'QuadrigaCX is one of the largest BTC and ETH exchanges in Canada. They provide a' + ' safe platform to trade and exchange BTC and ETH to CAD and have multiple withdr' + 'awal and deposit methods.'
        }
    }, {
        domain: 'livecoin.net',
        keywords: '',
        props: {
            country: 'Unknown',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Livecoin is multi-cryptocurrency trading platform, suitable for both beginners a' + 'nd experienced traders. Livecoin offers services both for regular users and for ' + 'coin developers. These include ICOs, swaps and others. Users can also play dice ' + 'on the exchange.'
        }
    }, {
        domain: 'bisq.io',
        keywords: 'fiat to crypto, crypto to fiat',
        props: {
            country: 'US',
            type: 'decentralized',
            pairs: 'multi',
            desc: 'BitSquare is one of the largest decentralized multi-crypto exchanges. They provi' + 'de a safe, decentralized platform to trade and exchange fiat to crypto and crypt' + 'o to fiat.'
        }
    }, {
        domain: 'coincheck.com',
        keywords: 'BTC to JPY',
        props: {
            country: 'Japan',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Coincheck is one of the largest BTC exchanges in Japan. They provide a safe plat' + 'form to trade and exchange BTC to JPY and have multiple withdrawal and deposit m' + 'ethods.'
        }
    }, {
        domain: 'bitso.com',
        keywords: 'Mexican, Mexican Pesos, MXN, ',
        props: {
            country: 'Mexico',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH, MXN',
            desc: 'Bitso is a Mexican cryptocurrency exchange founded in 2014. It allows users to e' + 'xchange Bitcoin and Ether for Mexican Pesos. Users can deposit and withdraw MXN ' + 'through the Ripple Gateway among others. Bitso is committed to developing effici' + 'ent financial services in Mexico.'
        }
    }, {
        domain: 'btcmarkets.net',
        keywords: 'BTC to AUD',
        props: {
            country: 'Australia',
            type: 'centralized',
            pairs: 'multi',
            desc: 'BTCMarkets is one of the largest BTC and ETH exchange in Australia. They provide' + ' a safe platform to trade and exchange BTC to AUD and have multiple withdrawal a' + 'nd deposit methods.'
        }
    }, {
        domain: 'luno.com',
        keywords: 'wallet and exhcange, multiple countries',
        props: {
            country: 'UK',
            type: 'centralized',
            pairs: 'BTC only',
            desc: 'Luno is a UK-based Bitcoin exchange that offers wallet and exhcange services to ' + 'multiple countries. Luno was formerly known as BitX.'
        }
    }, {
        domain: 'mercadobitcoin.com.br',
        keywords: 'Brazil and South America',
        props: {
            country: 'Brazil',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH',
            desc: 'Mercado Bitcoin is the biggest exchange in Brasil and South America. It allows u' + 'sers to trade Bitcoin, Litecoin and Brazilian Reais. Users are required to provi' + 'de a CPF or CNPJ number in order to register and login. Mercado Bitcoin has no l' + 'imits for VIP accounts and higher, which requires document verification. Mercado' + ' Bitcoin has a solid reputation within the crypto community and over 100 thousan' + 'd clients that use their service.'
        }
    }, {
        domain: 'paymium.com',
        keywords: 'EUR/BTC',
        props: {
            country: 'France',
            type: 'centralized',
            pairs: 'BTC Only',
            desc: 'Paymium is the first European exchange founded in 2011. They provide EUR/BTC exc' + 'hange service as well as send and receive Bitcoins by mail. They comply with Eur' + 'opean Regulations and accept SEPA Wire Transfer and Credit Card Bitcoin purchase' + ' (arriving December 15th, 2016).'
        }
    }, {
        domain: 'cryptopia.co.nz',
        keywords: 'NZ',
        props: {
            country: 'NZ',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Cryptopia\'s focus is on a better user experience for crypto-currencies. In orde' + 'r to make cryptocurrencies more accessible to everyone we provide mining pools, ' + 'marketplace, exchange services and a support framework for each coin listed.'
        }
    }, {
        domain: 'bit2c.co.il',
        keywords: 'Israel',
        props: {
            country: 'Israel, Shekel and BTC',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH, Shekel',
            desc: 'Bit2C is an Israeli based Bitcoin exchange. The exchange allows for trading in S' + 'hekel and BTC.'
        }
    }, {
        domain: 'vaultoro.com',
        keywords: 'UK, trade Bitcoin for physical gold ',
        props: {
            country: 'UK',
            type: 'centralized',
            pairs: 'BTC',
            desc: 'Vaultoro is a UK-based exchange and the first trading platform where you can tra' + 'de Bitcoin for physical gold without the need to use a fiat currency or a bank a' + 'ccount.'
        }
    }, {
        domain: 'therocktrading.com',
        keywords: 'Malta',
        props: {
            country: 'Malta, Europe, EUR, USD',
            type: 'centralized',
            pairs: 'multi',
            desc: 'The Rock Trading is one of the leading Bitcoin exchanges in Europe. It offers re' + 'al time trading between euro, usd and bitcoin/altcoins It\'s one of the oldest E' + 'uropean exchanges.'
        }
    }, {
        domain: 'btcxindia.com',
        keywords: 'leading Bitcoin exchanges in India',
        props: {
            country: 'India',
            type: 'centralized',
            pairs: 'BTC',
            desc: 'BTCXIndia is one of the leading Bitcoin exchanges in India. It offers real time ' + 'trading between rupees and bitcoins for the Indian community.'
        }
    }, {
        domain: 'unocoin.com',
        keywords: 'India, INR',
        props: {
            country: 'India',
            type: 'centralized',
            pairs: 'BTC',
            desc: 'Unocoin is India\'s most popular Bitcoin wallet. It has a built in exchange that' + ' allows users to exchange Bitcoin for Indian Rupees (INR). Unocoin charges a 1% ' + 'fee to buy or sell bitcoins. Over an extended period of usage (minimum 60 days) ' + 'and a significant transaction volume on your account, there will be an upgrade t' + 'o “Gold Membership” and the trading fee will drop to 0.7% and the transaction li' + 'mit per day will increase.'
        }
    }, {
        domain: 'bitbay.net',
        keywords: 'Poland, biggest BTC, LTC, ETH and LSK exchange in Poland',
        props: {
            country: 'Poland',
            type: 'centralized',
            pairs: 'multi',
            desc: ''
        }
    }, {
        domain: 'bleutrade.com',
        keywords: '',
        props: {
            country: 'Unknown',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Bleutrade is an alternative cryptocurrency exchange that offers trading on multi' + 'ple cryptocurrencies, including Bitcoin, Ether, Litecoin, DASH, and many others.' + ' The Bluetrade Echange only charges a 0.25% taker and maker fee for all currenci' + 'es, although they reserve the right to charge a Fee which can range from 0.2% to' + ' 0.5% per trade, as well as fixed fees for withdrawals. Bleutrade does not suppo' + 'rt fiat currencies.'
        }
    }, {
        domain: 'exmo.com',
        keywords: 'Spain, lowest fees',
        props: {
            country: 'Spain',
            type: 'centralized',
            pairs: 'BTC, LTC, DOGE, DASH, ETH',
            desc: '2 years old exchange with a big team. They trade BTC, LTC, DOGE, DASH, ETH they ' + 'claim to have the lowest fees on the market. The company is registered in the UK' + ' but based in Spain.'
        }
    }, {
        domain: 'bitmarket.net',
        keywords: 'Poland, PLN and ERU',
        props: {
            country: 'Poland',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH, and DOGE, PLN and ERU',
            desc: 'BitMarket is a Polish cryptocurrency exchange that offers trading in BTC, LTC, E' + 'TH, and DOGE. The market offers both margin trading services and investment oppo' + 'rtunities for users. BitMarket accepts PLN and ERU via regular and instant trans' + 'fers.'
        }
    }, {
        domain: 'wavesplatform.com',
        keywords: 'Poland, biggest BTC, LTC, ETH and LSK exchange in Poland',
        props: {
            country: 'Poland',
            type: 'decentralized',
            pairs: 'multi',
            desc: 'The Waves Decentralized Exchange is a decentralized market where users can trade' + ' waves-based assets, including Waves, Waves Assets, fiat tokens and cryptocurren' + 'cy tokens like wBTC and wETH. On the WavesDEX, users can trade with no counterpa' + 'rty risk as all operations take place on the Waves blockchain itself ensuring th' + 'at no trust is required. In order to access the exchange, users must download th' + 'e Waves wallet.'
        }
    }, {
        domain: 'novaexchange.com',
        keywords: 'Tanzania, support deposits in 469 Altcoins',
        props: {
            country: 'Tanzania',
            type: 'centralized',
            pairs: 'multi',
            desc: 'They support deposits in 469 Altcoins and no fiat currencies. You can trade a lo' + 't of low market cap cryptocurrency pairs but, trade with care.'
        }
    }, {
        domain: 'zaif.jp',
        keywords: 'Japan, Bitcoin and NEM for JPY.',
        props: {
            country: 'Japan',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Zaif is a Japanese exchange that allows users to buy and sell various coins like' + ' Bitcoin and NEM for JPY. The Zaif exchange also allows for margin trading and o' + 'ffers an affiliate program.'
        }
    }, {
        domain: 'itbit.com',
        keywords: 'fiat to crypto exchange - and offers EUR, USD & SGD to Bitcoin, security is stro' + 'ng',
        props: {
            country: 'US',
            type: 'centralized',
            pairs: 'multi',
            desc: 'ItBit is fiat to crypto exchange - and offers EUR, USD & SGD to Bitcoin. The exc' + 'hange is based in the US and in Singapore. Security is strong with two factor au' + 'thentication and cold storage and the interface of the exchange is easy to use a' + 'nd well designed.'
        }
    }, {
        domain: 'cex.io',
        keywords: 'UK, US, USD and EUR to BTC',
        props: {
            country: 'UK',
            type: 'centralized',
            pairs: 'multi',
            desc: 'As BTCchina is to Asia - so CEX.io is to Europe and America. CEX.io combines a m' + 'ining pool, crypto to crypto exchanges and fiat to Bitcoin exchange. They also o' + 'ffer the ability to trade mining contracts - or the rights to bitcoin mining equ' + 'ipment for a specific period of time. The exchange also offers USD and EUR to BT' + 'C pairs alongside a number of crypto to crypto pairs'
        }
    }, {
        domain: 'coinfloor.co.uk',
        keywords: 'UK, top exchanges in UK, high levels of security, GBP, Euro, Polish Zloty and US' + 'D',
        props: {
            country: 'UK',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Coinfloor is one of the UK\'s top exchanges. Coinfloor uses 100% multisignature ' + 'cold storage. Coinfloor has a number of fiat to crypto trading pairs - GBP, Euro' + ', Polish Zloty and USD. In all Coinfloor is a solid exchange to use specifically' + ' because of its high levels of security.'
        }
    }, {
        domain: 'etherdelta.github.io',
        keywords: 'decentralized Ethereum token exchange',
        props: {
            country: 'Unknown',
            type: 'decentralized',
            pairs: 'Ethereum, ERC20',
            desc: 'EtherDelta is a decentralized Ethereum token exchange, brought to you by Etherbo' + 'ost. Here, users can trade any most Ethereum-based tokens such as Iconomi, Augur' + ', 1ST, and others. The exchange currenly has only one fee, which is the 0.3% tak' + 'er fee. Deposit, withdraw, and maker transactions are all free.'
        }
    }, {
        domain: 'lakebtc.com',
        keywords: 'China',
        props: {
            country: 'China',
            type: 'centralized',
            pairs: 'multi',
            desc: 'LakeBTC project was started in early 2013 as a virtual Bitcoin exchange initiall' + 'y for traders and other financial professionals. Later that year, the exchange w' + 'as incorporated and operated under the current domain name. LakeBTC is currently' + ' owned by Lake Investments Limited (BVI), with Shanghai Trading IT, Inc. providi' + 'ng technical and customer support.'
        }
    }, {
        domain: 'c-cex.com',
        keywords: 'Germany, alternative to the mainstays of Cryptsy and Bittrex',
        props: {
            country: 'Germany',
            type: 'centralized',
            pairs: 'multi',
            desc: 'C-CEX.com is a crypto to crypto exchange and a fiat to crypto exchange and offer' + 's a good alternative to the mainstays of Cryptsy and Bittrex. With decent liquid' + 'ity on a few of the trading pairs CCEX is a good exchange to use. Security has n' + 'ot been compromised as of the time of writing.'
        }
    }, {
        domain: 'liqui.io',
        keywords: 'Ukraine',
        props: {
            country: 'Ukraine',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Liqui is a Ukraine-based cryptocurrency exchange. It allows users to buy and sel' + 'l Bitcoin and altcoins, although not national currencies. Liqui offers IOU marke' + 'ts that allow users to buy and sell coins from Initial Coin Offerings that are n' + 'ot trading yet.'
        }
    }, {
        domain: 'ethexindia.com',
        keywords: 'India, India first market place for Ethereum Tokens',
        props: {
            country: 'India',
            type: 'centralized',
            pairs: 'multi',
            desc: 'ETHEXIndia is India’s first market place for Ethereum Tokens. It offers real-tim' + 'e trading for ETH/INR, allowing users to buy and sell Ether for INR with a tight' + ' spread.'
        }
    }, {
        domain: 'bter.com',
        keywords: 'hybrid fiat to crypto and crypto to crypto exchanges',
        props: {
            country: 'British Virgin Islands',
            type: 'centralized',
            pairs: 'multi',
            desc: 'BTER is another of the hybrid fiat to crypto and crypto to crypto exchanges. Alt' + 'hough they had a rocky start to 2015 with a severe security breach, they have gr' + 'adually reopened markets and have dealt with the situation in a professional man' + 'ner.'
        }
    }, {
        domain: 'localbitcoins.com',
        keywords: 'Finland',
        props: {
            country: 'Finland',
            type: 'peer to peer',
            pairs: 'BTC',
            desc: 'Local Bitcoins is a different sort of exchange that allows anyone anywhere to tr' + 'ade. It therefore has the largest amount of markets - although some without much' + ' liquidity - for example in Venezuela and other emerging markets. LocalBitcoins ' + 'works like an open outcry with people in the same location as you - if you want ' + 'to trade you can place a buy or a sell for a price and wait to be contacted by s' + 'omeone who is wants to execute that trade.'
        }
    }, {
        domain: 'viabtc.cn',
        keywords: 'China',
        props: {
            country: 'China',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH',
            desc: 'Founded in May 2016, ViaBTC is a cryptocurrency technology company that operates' + ' a mining pool, mining contracts and the ViaBTC exchange. The ViaBTC exchange is' + ' a China-based website, allowing users to trade BTC and ETH for CNY. The ViaBTC ' + 'exchange features advanced Trading View charts and easy and convenient API'
        }
    }, {
        domain: 'cryptox.pl',
        keywords: 'UK',
        props: {
            country: 'UK',
            type: 'centralized',
            pairs: 'multi',
            desc: 'CryptoX is a multi cryptocurrency exchange that offers trading services for Bitc' + 'oin, Litecoin, Dash, Monero and Byteball. The exchange does not offer FIAT tradi' + 'ng pairs.'
        }
    }, {
        domain: 'tidex.com',
        keywords: 'UK, Waves Platform',
        props: {
            country: 'UK',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Tidex is a new bitcoin and altcoin exchange that trades popular digital currenci' + 'es, including several Waves assets. based in the UK and officially endorsed by t' + 'he Waves Platform. It trades WAVES, Waves tokens and other popular cryptocurrenc' + 'ies including LTC, ETH, DOGE, DASH and BTS, although no fiat currencies. It laun' + 'ched with zero-fee model for traders and liquidity guaranteed.'
        }
    }, {
        domain: 'tuxexchange.com',
        keywords: 'Canada  ',
        props: {
            country: 'Canada, only charges a 0.3% taker fee (maker, deposits, and withdraws have no fe' + 'es',
            type: 'centralized',
            pairs: 'BTC, LTC, ETH',
            desc: 'Tux Exchange is a Canadian cryptocurrency exchange that offers trading on multip' + 'le cryptocurrencies, including Bitcoin, Ether, Litecoin, Zcash, DASH, Dogecoin, ' + 'Monero, Peercoin, Potcoin, Blackcoin, Namecoin, Emercoin, Syscoin, Counterparty ' + 'and Pepecash. The Tux Echange only charges a 0.3% taker fee (maker, deposits, an' + 'd withdraws have no fees). Tux does not support fiat currencies, however. The Tu' + 'x Exchange is named after the Tuxedo cat.'
        }
    }, {
        domain: 'quoine.com',
        keywords: 'Japan, exchange BTC and ETH for multiple national currencies',
        props: {
            country: 'Japan',
            type: 'centralized',
            pairs: 'multi',
            desc: 'Quoine exchange is a Japanese Bitcoin and Ether exchange. It allows users to exc' + 'hange BTC and ETH for multiple national currencies. Quoine currently offers 0% f' + 'ees on all pairs except ETHBTC and margin trading with leverage starting at 2X a' + 'nd up to 25X. Quoine has other special features like futures trading, algo tradi' + 'ng, and even lending to earn interest on your deposits.'
        }
    }, {
        domain: 'remitano.com',
        keywords: 'peer to peer',
        props: {
            country: 'Unknown',
            type: 'peer to peer',
            pairs: 'BTC',
            desc: ''
        }
    }]
};

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "name": "Currency",
    "sites": [{
        "name": "Bitcoin",
        "code": "BTC",
        "rank": "1",
        "domain": "bitcoin.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "bitcoin.org"
        }, {
            "name": "Website 2",
            "domain": "bitcoin.com"
        }, {
            "name": "Explorer",
            "domain": "blockchain.info"
        }, {
            "name": "Explorer 2",
            "domain": "blockexplorer.com"
        }, {
            "name": "Message Board",
            "domain": "bitcointalk.org"
        }, {
            "name": "Message Board 2",
            "domain": "forum.bitcoin.com"
        }]
    }, {
        "name": "Ethereum",
        "code": "ETH",
        "rank": "2",
        "domain": "ethereum.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "ethereum.org"
        }, {
            "name": "Explorer",
            "domain": "live.ether.camp"
        }, {
            "name": "Explorer 2",
            "domain": "etherscan.io"
        }, {
            "name": "Explorer 3",
            "domain": "etherchain.org"
        }, {
            "name": "Message Board",
            "domain": "forum.ethereum.org"
        }]
    }, {
        "name": "Bitcoin Cash",
        "code": "BCH",
        "rank": "3",
        "domain": "bitcoincash.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "bitcoincash.org"
        }, {
            "name": "Explorer",
            "url": "https://blockchair.com/bitcoin-cash/blocks"
        }, {
            "name": "Explorer 2",
            "url": "http://blockdozer.com/insight"
        }, {
            "name": "Explorer 3",
            "url": "https://www.blocktrail.com/BCC"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=2040221.0"
        }]
    }, {
        "name": "Ripple",
        "code": "XRP",
        "rank": "4",
        "domain": "ripple.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "ripple.com"
        }, {
            "name": "Explorer",
            "url": "https://ripple.com/graph"
        }, {
            "name": "Explorer 2",
            "url": "https://bithomp.com/explorer"
        }, {
            "name": "Message Board",
            "domain": "xrpchat.com"
        }]
    }, {
        "name": "IOTA",
        "code": "MIOTA",
        "rank": "5",
        "domain": "iota.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "iota.org"
        }, {
            "name": "Explorer",
            "domain": "iota.tips"
        }, {
            "name": "Explorer 2",
            "domain": "iotasear.ch"
        }, {
            "name": "Explorer 3",
            "domain": "thetangle.org"
        }, {
            "name": "Message Board",
            "domain": "forum.iota.org"
        }, {
            "name": "Message Board 2",
            "domain": "slack.iota.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1216479.0"
        }]
    }, {
        "name": "Litecoin",
        "code": "LTC",
        "rank": "6",
        "domain": "litecoin.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "litecoin.com"
        }, {
            "name": "Website 2",
            "domain": "litecoin.org"
        }, {
            "name": "Explorer",
            "url": "http://explorer.litecoin.net/chain/Litecoin"
        }, {
            "name": "Explorer 2",
            "url": "https://chainz.cryptoid.info/ltc"
        }, {
            "name": "Explorer 3",
            "url": "https://live.blockcypher.com/ltc"
        }, {
            "name": "Message Board",
            "domain": "litecointalk.io"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=47417.0"
        }]
    }, {
        "name": "NEM",
        "code": "XEM",
        "rank": "7",
        "domain": "nem.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "nem.io"
        }, {
            "name": "Explorer",
            "domain": "nembex.nem.ninja"
        }, {
            "name": "Explorer 2",
            "domain": "explorer.ournem.com"
        }, {
            "name": "Message Board",
            "domain": "forum.nem.io"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=654845.0"
        }]
    }, {
        "name": "Dash",
        "code": "DASH",
        "rank": "8",
        "domain": "dash.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "dash.org"
        }, {
            "name": "Explorer",
            "url": "https://chainz.cryptoid.info/dash"
        }, {
            "name": "Message Board",
            "url": "https://www.dash.org/forum"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=421615.0"
        }]
    }, {
        "name": "NEO",
        "code": "NEO",
        "rank": "9",
        "domain": "neo.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "neo.org"
        }, {
            "name": "Explorer",
            "domain": "neotracker.io"
        }, {
            "name": "Explorer 2",
            "domain": "antcha.in"
        }, {
            "name": "Explorer 3",
            "domain": "neoexplorer.co"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1571738.0"
        }, {
            "name": "Neon Wallet",
            "url": "https://github.com/CityOfZion/neon-wallet/releases"
        }, {
            "name": "NEO Desktop Client",
            "url": "https://github.com/neo-project/neo-gui/releases"
        }, {
            "name": "Neo Tracker Web Wallet",
            "url": "https://neotracker.io/wallet"
        }, {
            "name": "Neo Web Wallet",
            "domain": "neowallet.cn"
        }, {
            "name": "NEO Web Wallet by OnChain dev",
            "domain": "neowallet.net"
        }, {
            "name": "Blue Whale Web",
            "domain": "otcgo.cn"
        }, {
            "name": "Neo To Gas",
            "domain": "neotogas.com"
        }]
    }, {
        "name": "Monero",
        "code": "XMR",
        "rank": "10",
        "domain": "monero.cc",
        "relatedSite": [{
            "name": "Website",
            "domain": "monero.cc"
        }, {
            "name": "Explorer",
            "url": "http://chainradar.com/xmr/blocks"
        }, {
            "name": "Explorer 2",
            "domain": "moneroblocks.info"
        }, {
            "name": "Message Board",
            "domain": "forum.getmonero.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=583449.0"
        }]
    }, {
        "name": "Ethereum Classic",
        "code": "ETC",
        "rank": "11",
        "domain": "ethereumclassic.github.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "ethereumclassic.github.io"
        }, {
            "name": "Explorer",
            "domain": "gastracker.io"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1559630.0"
        }]
    }, {
        "name": "BitConnect",
        "code": "BCC",
        "rank": "12",
        "domain": "bitconnectcoin.co",
        "relatedSite": [{
            "name": "Website",
            "domain": "bitconnectcoin.co"
        }, {
            "name": "Explorer",
            "url": "https://chainz.cryptoid.info/bcc"
        }, {
            "name": "Explorer 2",
            "url": "https://www.blockexperts.com/bcc"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1681719.0"
        }]
    }, {
        "name": "OmiseGo",
        "code": "OMG",
        "rank": "13",
        "domain": "omg.omise.co",
        "relatedSite": [{
            "name": "Website",
            "domain": "omg.omise.co"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/OmiseGo"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
        }]
    }, {
        "name": "Stratis",
        "code": "STRAT",
        "rank": "14",
        "domain": "stratisplatform.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "stratisplatform.com"
        }, {
            "name": "Explorer",
            "url": "https://chainz.cryptoid.info/strat"
        }, {
            "name": "Explorer 2",
            "url": "http://cryptobe.com/chain/Stratis"
        }, {
            "name": "Message Board",
            "domain": "stratistalk.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1512202.0"
        }]
    }, {
        "name": "Qtum",
        "code": "QTUM",
        "rank": "15",
        "domain": "qtum.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "qtum.org"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Qtum"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0x9a642d6b3368ddc662CA244bAdf32cDA716005BC"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1720632.0"
        }]
    }, {
        "name": "Waves",
        "code": "WAVES",
        "rank": "16",
        "domain": "wavesplatform.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "wavesplatform.com"
        }, {
            "name": "Explorer",
            "domain": "wavesgo.com"
        }, {
            "name": "Explorer 2",
            "domain": "wavesexplorer.com"
        }, {
            "name": "Message Board",
            "domain": "wavestalk.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1387944.0"
        }]
    }, {
        "name": "Zcash",
        "code": "ZEC",
        "rank": "17",
        "domain": "z.cash",
        "relatedSite": [{
            "name": "Website",
            "domain": "z.cash"
        }, {
            "name": "Explorer",
            "domain": "explorer.zcha.in"
        }, {
            "name": "Message Board",
            "domain": "forum.z.cash"
        }]
    }, {
        "name": "EOS",
        "code": "EOS",
        "rank": "18",
        "domain": "eos.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "eos.io"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/EOS"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0"
        }]
    }, {
        "name": "TenX",
        "code": "PAY",
        "rank": "19",
        "domain": "tenx.tech",
        "relatedSite": [{
            "name": "Website",
            "domain": "tenx.tech"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/TenXPay"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0xb97048628db6b661d4c2aa833e95dbe1a905b280"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1953612.0"
        }]
    }, {
        "name": "BitShares",
        "code": "BTS",
        "rank": "20",
        "domain": "bitshares.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "bitshares.org"
        }, {
            "name": "Explorer",
            "domain": "cryptofresh.com"
        }, {
            "name": "Message Board",
            "domain": "bitsharestalk.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1949828"
        }]
    }, {
        "name": "Tether",
        "code": "USDT",
        "rank": "21",
        "domain": "tether.to",
        "relatedSite": [{
            "name": "Website",
            "domain": "tether.to"
        }, {
            "name": "Explorer",
            "url": "http://omnichest.info/lookupsp.aspx?sp=31"
        }]
    }, {
        "name": "Lisk",
        "code": "LSK",
        "rank": "22",
        "domain": "lisk.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "lisk.io"
        }, {
            "name": "Explorer",
            "domain": "explorer.lisk.io"
        }, {
            "name": "Message Board",
            "domain": "forum.lisk.io"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1346646"
        }]
    }, {
        "name": "Steem",
        "code": "STEEM",
        "rank": "23",
        "domain": "steem.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "steem.io"
        }, {
            "name": "Website 2",
            "domain": "steemit.com"
        }, {
            "name": "Explorer",
            "domain": "steemd.com"
        }, {
            "name": "Explorer 2",
            "domain": "steemdb.com"
        }, {
            "name": "Message Board",
            "domain": "busy.org"
        }, {
            "name": "Message Board 2",
            "url": "https://chainbb.com/forum/steem"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1410943.0"
        }]
    }, {
        "name": "Iconomi",
        "code": "ICN",
        "rank": "24",
        "domain": "iconomi.net",
        "relatedSite": [{
            "name": "Website",
            "domain": "iconomi.net"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/ICONOMI"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1789926.0"
        }]
    }, {
        "name": "Binance Coin",
        "code": "BNB",
        "rank": "25",
        "domain": "binance.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "binance.com"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
        }, {
            "name": "Announcement",
            "url": "https://binance.zendesk.com/hc/en-us/articles/115000497111-Binance-Coin-BNB-"
        }]
    }, {
        "name": "Stellar Lumens",
        "code": "XLM",
        "rank": "26",
        "domain": "stellar.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "stellar.org"
        }, {
            "name": "Website 2",
            "domain": "mystellar.org"
        }, {
            "name": "Explorer",
            "url": "https://www.stellar.org/stats"
        }, {
            "name": "Message Board",
            "domain": "stellarcommunity.org"
        }, {
            "name": "Message Board 2",
            "domain": "galactictalk.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=719019.0"
        }]
    }, {
        "name": "Veritaseum",
        "code": "VERI",
        "rank": "27",
        "domain": "veritas.veritaseum.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "veritas.veritaseum.com"
        }, {
            "name": "Explorer",
            "url": "https://ethplorer.io/address/0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374"
        }, {
            "name": "Explorer 2",
            "url": "https://etherscan.io/token/0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1887061"
        }]
    }, {
        "name": "Augur",
        "code": "REP",
        "rank": "28",
        "domain": "augur.net",
        "relatedSite": [{
            "name": "Website",
            "domain": "augur.net"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/REP"
        }]
    }, {
        "name": "Golem",
        "code": "GNT",
        "rank": "29",
        "domain": "golem.network",
        "relatedSite": [{
            "name": "Website",
            "domain": "golem.network"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Golem"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1655002.0"
        }]
    }, {
        "name": "Bytecoin",
        "code": "BCN",
        "rank": "30",
        "domain": "bytecoin.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "bytecoin.org"
        }, {
            "name": "Explorer",
            "url": "http://chainradar.com/bcn/blocks"
        }, {
            "name": "Explorer 2",
            "url": "http://democats.org/pool/?name=bytecoin"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=512747.0"
        }]
    }, {
        "name": "MaidSafeCoin",
        "code": "MAID",
        "rank": "31",
        "domain": "maidsafe.net",
        "relatedSite": [{
            "name": "Website",
            "domain": "maidsafe.net"
        }, {
            "name": "Explorer",
            "domain": "omnichest.info"
        }, {
            "name": "Message Board",
            "domain": "safenetforum.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=579797.0"
        }]
    }, {
        "name": "Factom",
        "code": "FCT",
        "rank": "32",
        "domain": "factom.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "factom.org"
        }, {
            "name": "Explorer",
            "domain": "explorer.factom.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=850070.0"
        }]
    }, {
        "name": "Siacoin",
        "code": "SC",
        "rank": "33",
        "domain": "sia.tech",
        "relatedSite": [{
            "name": "Website",
            "domain": "sia.tech"
        }, {
            "name": "Explorer",
            "domain": "explore.sia.tech"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1060294.0"
        }]
    }, {
        "name": "0x",
        "code": "ZRX",
        "rank": "34",
        "domain": "0xproject.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "0xproject.com"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/ZRX"
        }]
    }, {
        "name": "Gas",
        "code": "GAS",
        "rank": "35",
        "domain": "neo.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "neo.org"
        }, {
            "name": "Explorer",
            "url": "https://antchain.xyz/asset/hash/602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7"
        }, {
            "name": "Explorer 2",
            "url": "https://neotracker.io/asset/602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7"
        }, {
            "name": "Explorer 3",
            "url": "https://neoexplorer.co/assets/602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7"
        }]
    }, {
        "name": "Dogecoin",
        "code": "DOGE",
        "rank": "36",
        "domain": "dogecoin.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "dogecoin.com"
        }, {
            "name": "Explorer",
            "url": "http://dogechain.info/chain/Dogecoin"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=361813.0"
        }]
    }, {
        "name": "Basic Attention Token",
        "code": "BAT",
        "rank": "37",
        "domain": "basicattentiontoken.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "basicattentiontoken.org"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Bat"
        }]
    }, {
        "name": "Byteball",
        "code": "GBYTE",
        "rank": "38",
        "domain": "byteball.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "byteball.org"
        }, {
            "name": "Explorer",
            "domain": "explorer.byteball.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1608859.0"
        }]
    }, {
        "name": "Status",
        "code": "SNT",
        "rank": "39",
        "domain": "status.im",
        "relatedSite": [{
            "name": "Website",
            "domain": "status.im"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/StatusNetwork"
        }]
    }, {
        "name": "Gnosis",
        "code": "GNO",
        "rank": "40",
        "domain": "gnosis.pm",
        "relatedSite": [{
            "name": "Website",
            "domain": "gnosis.pm"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Gnosis"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1529098.0"
        }]
    }, {
        "name": "Metal",
        "code": "MTL",
        "rank": "41",
        "domain": "metalpay.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "metalpay.com"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0xF433089366899D83a9f26A773D59ec7eCF30355e"
        }]
    }, {
        "name": "DigixDAO",
        "code": "DGD",
        "rank": "42",
        "domain": "digix.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "digix.io"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/dgd"
        }, {
            "name": "Announcement",
            "url": "https://forum.bitcoin.com/alternative-cryptocurrencies-altcoins/digixdao-token-dgd-pre-launch-via-ccedk-acount-digixdao-t7120.html"
        }]
    }, {
        "name": "Ark",
        "code": "ARK",
        "rank": "43",
        "domain": "ark.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "ark.io"
        }, {
            "name": "Explorer",
            "url": "https://explorer.ark.io/networkMonitor"
        }, {
            "name": "Message Board",
            "domain": "forum.ark.io"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1649695.0"
        }]
    }, {
        "name": "Populous",
        "code": "PPT",
        "rank": "44",
        "domain": "populous.co",
        "relatedSite": [{
            "name": "Website",
            "domain": "populous.co"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1866936.0"
        }]
    }, {
        "name": "Civic",
        "code": "CVC",
        "rank": "45",
        "domain": "civic.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "civic.com"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/civic"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1942882.0"
        }]
    }, {
        "name": "MCAP",
        "code": "MCAP",
        "rank": "46",
        "domain": "bitcoingrowthfund.com/mcap",
        "relatedSite": [{
            "name": "Website",
            "url": "https://bitcoingrowthfund.com/mcap"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x93e682107d1e9defb0b5ee701c71707a4b2e46bc"
        }]
    }, {
        "name": "Decred",
        "code": "DCR",
        "rank": "47",
        "domain": "decred.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "decred.org"
        }, {
            "name": "Explorer",
            "domain": "mainnet.decred.org"
        }, {
            "name": "Message Board",
            "domain": "forum.decred.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1290358.0"
        }]
    }, {
        "name": "GameCredits",
        "code": "GAME",
        "rank": "48",
        "domain": "gamecredits.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "gamecredits.com"
        }, {
            "name": "Explorer",
            "domain": "blockexplorer.gamecredits.com"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1266597"
        }]
    }, {
        "name": "Bytom",
        "code": "BTM",
        "rank": "49",
        "domain": "bytom.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "bytom.io"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1975390.0"
        }]
    }, {
        "name": "Ardor",
        "code": "ARDR",
        "rank": "50",
        "domain": "ardorplatform.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "ardorplatform.org"
        }, {
            "name": "Explorer",
            "url": "https://www.mynxt.info/asset/12422608354438203866"
        }, {
            "name": "Message Board",
            "domain": "nxtforum.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1518497.0"
        }]
    }, {
        "name": "Komodo",
        "code": "KMD",
        "rank": "51",
        "domain": "komodoplatform.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "komodoplatform.com"
        }, {
            "name": "Explorer",
            "domain": "kmd.explorer.supernet.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1605144.0"
        }]
    }, {
        "name": "Monaco",
        "code": "MCO",
        "rank": "52",
        "domain": "mona.co",
        "relatedSite": [{
            "name": "Website",
            "domain": "mona.co"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Monaco"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0xb63b606ac810a52cca15e44bb630fd42d8d1d83d"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1926269.0"
        }]
    }, {
        "name": "DigiByte",
        "code": "DGB",
        "rank": "53",
        "domain": "digibyte.co",
        "relatedSite": [{
            "name": "Website",
            "domain": "digibyte.co"
        }, {
            "name": "Explorer",
            "domain": "digiexplorer.info"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=408268.0"
        }]
    }, {
        "name": "PIVX",
        "code": "PIVX",
        "rank": "54",
        "domain": "pivx.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "pivx.org"
        }, {
            "name": "Explorer",
            "url": "https://chainz.cryptoid.info/pivx"
        }, {
            "name": "Explorer 2",
            "url": "http://www.presstab.pw/phpexplorer/PIVX"
        }, {
            "name": "Explorer 3",
            "domain": "pivx.presstab.pw"
        }, {
            "name": "Message Board",
            "domain": "forum.pivx.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1262920"
        }]
    }, {
        "name": "FunFair",
        "code": "FUN",
        "rank": "55",
        "domain": "funfair.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "funfair.io"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/FunFair"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0x419d0d8bdd9af5e606ae2232ed285aff190e711b"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1968383.0"
        }]
    }, {
        "name": "Nxt",
        "code": "NXT",
        "rank": "56",
        "domain": "nxt.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "nxt.org"
        }, {
            "name": "Explorer",
            "url": "https://www.mynxt.info/blockexplorer"
        }, {
            "name": "Explorer 2",
            "domain": "nxtportal.org"
        }, {
            "name": "Explorer 3",
            "domain": "peerexplorer.com"
        }, {
            "name": "Message Board",
            "domain": "nxtforum.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=587007.0"
        }]
    }, {
        "name": "Bancor",
        "code": "BNT",
        "rank": "57",
        "domain": "bancor.network",
        "relatedSite": [{
            "name": "Website",
            "domain": "bancor.network"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Bancor"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1789222.0"
        }]
    }, {
        "name": "district0x",
        "code": "DNT",
        "rank": "58",
        "domain": "district0x.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "district0x.io"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/district0x"
        }, {
            "name": "Explorer 2",
            "url": "http://ethplorer.io/address/0x0abdace70d3790235af448c88547603b945604ea"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=2009966.0"
        }]
    }, {
        "name": "MobileGo",
        "code": "MGO",
        "rank": "59",
        "domain": "mobilego.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "mobilego.io"
        }, {
            "name": "Explorer",
            "url": "http://www.wavesgo.com/assets.html?2Y8eFFXDTkxgCvXbMT5K4J38cpDYYbQdciJEZb48vTDj"
        }, {
            "name": "Explorer 2",
            "url": "https://etherscan.io/token/0x40395044Ac3c0C57051906dA938B54BD6557F212"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1792451.0"
        }]
    }, {
        "name": "Lykke",
        "code": "LKK",
        "rank": "60",
        "domain": "lykke.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "lykke.com"
        }, {
            "name": "Explorer",
            "url": "https://blockchainexplorer.lykke.com/asset/AXkedGbAH1XGDpAypVzA5eyjegX4FaCnvM"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1402110.0"
        }]
    }, {
        "name": "ICO",
        "code": "ICO",
        "rank": "61",
        "domain": "icocoin.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "icocoin.org"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0xa33e729bf4fdeb868b534e1f20523463d9c46bee"
        }]
    }, {
        "name": "Aragon",
        "code": "ANT",
        "rank": "62",
        "domain": "aragon.one",
        "relatedSite": [{
            "name": "Website",
            "domain": "aragon.one"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Aragon"
        }]
    }, {
        "name": "Pillar",
        "code": "PLR",
        "rank": "63",
        "domain": "pillarproject.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "pillarproject.io"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0xe3818504c1b32bf1557b16c238b2e01fd3149c17"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1986401.0"
        }]
    }, {
        "name": "SingularDTV",
        "code": "SNGLS",
        "rank": "64",
        "domain": "singulardtv.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "singulardtv.com"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/SNGLS"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1562292.0"
        }]
    }, {
        "name": "Nexus",
        "code": "NXS",
        "rank": "65",
        "domain": "nexusearth.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "nexusearth.com"
        }, {
            "name": "Explorer",
            "url": "http://nexusoft.io/platform/Explorer"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=657601.0"
        }]
    }, {
        "name": "Storj",
        "code": "STORJ",
        "rank": "66",
        "domain": "storj.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "storj.io"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Storj"
        }, {
            "name": "Message Board",
            "url": "https://community.storj.io"
        }]
    }, {
        "name": "Bitquence",
        "code": "BQX",
        "rank": "67",
        "domain": "bitquence.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "bitquence.com"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x5af2be193a6abca9c8817001f45744777db30756"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0x5af2be193a6abca9c8817001f45744777db30756"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1964187.0"
        }]
    }, {
        "name": "Metaverse ETP",
        "code": "ETP",
        "rank": "68",
        "domain": "mvs.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "mvs.org"
        }, {
            "name": "Explorer",
            "domain": "explorer.mvs.live"
        }]
    }, {
        "name": "Stox",
        "code": "STX",
        "rank": "69",
        "domain": "stox.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "stox.com"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0x006bea43baa3f7a6f765f14f10a1a1b08334ef45"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=2035348.0"
        }]
    }, {
        "name": "BitcoinDark",
        "code": "BTCD",
        "rank": "70",
        "domain": "bitcoindark.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "bitcoindark.com"
        }, {
            "name": "Explorer",
            "domain": "explorebtcd.info"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=684090.0"
        }]
    }, {
        "name": "Cofound.it",
        "code": "CFI",
        "rank": "71",
        "domain": "cofound.it",
        "relatedSite": [{
            "name": "Website",
            "domain": "cofound.it"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1849911.0"
        }]
    }, {
        "name": "Particl",
        "code": "PART",
        "rank": "72",
        "domain": "particl.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "particl.io"
        }, {
            "name": "Explorer",
            "domain": "explorer.particl.io"
        }, {
            "name": "Explorer 2",
            "url": "https://chainz.cryptoid.info/part"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1835782.0"
        }]
    }, {
        "name": "Ubiq",
        "code": "UBQ",
        "rank": "73",
        "domain": "ubiqsmart.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "ubiqsmart.com"
        }, {
            "name": "Explorer",
            "domain": "ubiqscan.io"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1763606"
        }]
    }, {
        "name": "DECENT",
        "code": "DCT",
        "rank": "74",
        "domain": "decent.ch",
        "relatedSite": [{
            "name": "Website",
            "domain": "decent.ch"
        }, {
            "name": "Explorer",
            "domain": "decent-db.com"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1162392.0"
        }]
    }, {
        "name": "SysCoin",
        "code": "SYS",
        "rank": "75",
        "domain": "syscoin.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "syscoin.org"
        }, {
            "name": "Explorer",
            "url": "https://chainz.cryptoid.info/sys"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1466445.0"
        }]
    }, {
        "name": "Edgeless",
        "code": "EDG",
        "rank": "76",
        "domain": "edgeless.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "edgeless.io"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Edgeless"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1718384.0"
        }]
    }, {
        "name": "AdEx",
        "code": "ADX",
        "rank": "77",
        "domain": "adex.network",
        "relatedSite": [{
            "name": "Website",
            "domain": "adex.network"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x4470bb87d77b963a013db939be332f927f2b992e"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1965467"
        }]
    }, {
        "name": "FirstBlood",
        "code": "1ST",
        "rank": "78",
        "domain": "firstblood.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "firstblood.io"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/FirstBlood"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1543891.0"
        }]
    }, {
        "name": "Wings",
        "code": "WINGS",
        "rank": "79",
        "domain": "wings.ai",
        "relatedSite": [{
            "name": "Website",
            "domain": "wings.ai"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x667088b212ce3d06a1b553a7221E1fD19000d9aF"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1477055.0"
        }]
    }, {
        "name": "Gulden",
        "code": "NLG",
        "rank": "80",
        "domain": "gulden.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "gulden.com"
        }, {
            "name": "Explorer",
            "domain": "blockchain.gulden.com"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1577392.0"
        }]
    }, {
        "name": "Asch",
        "code": "XAS",
        "rank": "81",
        "domain": "asch.so",
        "relatedSite": [{
            "name": "Website",
            "domain": "asch.so"
        }, {
            "name": "Explorer",
            "domain": "aschd.org"
        }]
    }, {
        "name": "iExec RLC",
        "code": "RLC",
        "rank": "82",
        "domain": "iex.ec",
        "relatedSite": [{
            "name": "Website",
            "domain": "iex.ec"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/RLC"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1746241.0"
        }]
    }, {
        "name": "Blocknet",
        "code": "BLOCK",
        "rank": "83",
        "domain": "blocknet.co",
        "relatedSite": [{
            "name": "Website",
            "domain": "blocknet.co"
        }, {
            "name": "Explorer",
            "url": "https://chainz.cryptoid.info/block"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=829576.0"
        }]
    }, {
        "name": "Numeraire",
        "code": "NMR",
        "rank": "84",
        "domain": "numer.ai",
        "relatedSite": [{
            "name": "Website",
            "domain": "numer.ai"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671"
        }, {
            "name": "Message Board",
            "domain": "forum.numer.ai"
        }]
    }, {
        "name": "LEOcoin",
        "code": "LEO",
        "rank": "85",
        "domain": "leocoin.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "leocoin.org"
        }, {
            "name": "Explorer",
            "domain": "insight.leocoin.org"
        }, {
            "name": "Explorer 2",
            "domain": "blockchain.leocoin.org"
        }, {
            "name": "Explorer 3",
            "url": "http://cryptobe.com/chain/LEOcoin"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1545712.0"
        }]
    }, {
        "name": "Emercoin",
        "code": "EMC",
        "rank": "86",
        "domain": "emercoin.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "emercoin.com"
        }, {
            "name": "Explorer",
            "domain": "emercoin.mintr.org"
        }, {
            "name": "Explorer 2",
            "domain": "emcblock.info"
        }, {
            "name": "Message Board",
            "domain": "emercointalk.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=362513.0"
        }]
    }, {
        "name": "Melon",
        "code": "MLN",
        "rank": "87",
        "domain": "melon.network",
        "relatedSite": [{
            "name": "Website",
            "domain": "melon.network"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Melon"
        }]
    }, {
        "name": "Counterparty",
        "code": "XCP",
        "rank": "88",
        "domain": "counterparty.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "counterparty.io"
        }, {
            "name": "Explorer",
            "domain": "xchain.io"
        }, {
            "name": "Explorer 2",
            "domain": "counterpartychain.io"
        }, {
            "name": "Message Board",
            "domain": "counterpartytalk.org"
        }]
    }, {
        "name": "Elastic",
        "code": "XEL",
        "rank": "89",
        "domain": "elastic.pw",
        "relatedSite": [{
            "name": "Website",
            "domain": "elastic.pw"
        }, {
            "name": "Explorer",
            "domain": "elasticexplorer.org"
        }, {
            "name": "Message Board",
            "domain": "talk.elasticexplorer.org"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1957064"
        }]
    }, {
        "name": "Peercoin",
        "code": "PPC",
        "rank": "90",
        "domain": "peercoin.net",
        "relatedSite": [{
            "name": "Website",
            "domain": "peercoin.net"
        }, {
            "name": "Explorer",
            "url": "https://chainz.cryptoid.info/ppc"
        }, {
            "name": "Explorer 2",
            "domain": "peercoin.mintr.org"
        }, {
            "name": "Message Board",
            "domain": "talk.peercoin.net"
        }, {
            "name": "Message Board 2",
            "domain": "peercoin.chat"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=101820.0"
        }]
    }, {
        "name": "Round",
        "code": "ROUND",
        "rank": "91",
        "domain": "roundcoin.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "roundcoin.org"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x4993CB95c7443bdC06155c5f5688Be9D8f6999a5"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1657439.0"
        }]
    }, {
        "name": "TokenCard",
        "code": "TKN",
        "rank": "92",
        "domain": "tokencard.io",
        "relatedSite": [{
            "name": "Website",
            "domain": "tokencard.io"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/TokenCard"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1887092.0"
        }]
    }, {
        "name": "NoLimitCoin",
        "code": "NLC2",
        "rank": "93",
        "domain": "nolimitcoin.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "nolimitcoin.org"
        }, {
            "name": "Explorer",
            "domain": "nolimitcoin.info"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1606674"
        }]
    }, {
        "name": "Etheroll",
        "code": "DICE",
        "rank": "94",
        "domain": "etheroll.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "etheroll.com"
        }, {
            "name": "Website 2",
            "domain": "etheroll.wordpress.com"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x2e071D2966Aa7D8dECB1005885bA1977D6038A65"
        }, {
            "name": "Announcement",
            "url": "https://www.reddit.com/r/etheroll/comments/6b7g80/etheroll_dice_tokens_unlocked_may_15_on"
        }]
    }, {
        "name": "adToken",
        "code": "ADT",
        "rank": "95",
        "domain": "adtoken.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "adtoken.com"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/AdToken"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0xd0d6d6c5fe4a677d343cc433536bb717bae167dd"
        }]
    }, {
        "name": "TaaS",
        "code": "TAAS",
        "rank": "96",
        "domain": "taas.fund",
        "relatedSite": [{
            "name": "Website",
            "domain": "taas.fund"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/Taas"
        }, {
            "name": "Explorer 2",
            "url": "http://explorer.ambisafe.co/#/asset/TAAS/2?_k=9wkwx8"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1775766"
        }]
    }, {
        "name": "FirstCoin",
        "code": "FRST",
        "rank": "97",
        "domain": "firstcoinproject.com",
        "relatedSite": [{
            "name": "Website",
            "domain": "firstcoinproject.com"
        }, {
            "name": "Explorer",
            "domain": "explorer.firstcoinproject.com"
        }]
    }, {
        "name": "OpenAnx",
        "code": "OAX",
        "rank": "98",
        "domain": "openanx.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "openanx.org"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x701c244b988a513c945973defa05de933b23fe1d"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1943946"
        }]
    }, {
        "name": "FairCoin",
        "code": "FAIR",
        "rank": "99",
        "domain": "fair-coin.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "fair-coin.org"
        }, {
            "name": "Explorer",
            "domain": "chain.fair.to"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=702675.0"
        }]
    }, {
        "name": "Quantum Resistant Ledger",
        "code": "QRL",
        "rank": "100",
        "domain": "theqrl.org",
        "relatedSite": [{
            "name": "Website",
            "domain": "theqrl.org"
        }, {
            "name": "Explorer",
            "url": "https://etherscan.io/token/0x697beac28b09e122c4332d163985e8a73121b97f"
        }, {
            "name": "Explorer 2",
            "url": "https://ethplorer.io/address/0x697beac28b09e122c4332d163985e8a73121b97f"
        }, {
            "name": "Announcement",
            "url": "https://bitcointalk.org/index.php?topic=1730273.0"
        }]
    }]
};

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'Other',
    sites: []
};

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wallet = __webpack_require__(371);

var _wallet2 = _interopRequireDefault(_wallet);

var _exchanger = __webpack_require__(372);

var _exchanger2 = _interopRequireDefault(_exchanger);

var _currency = __webpack_require__(373);

var _currency2 = _interopRequireDefault(_currency);

var _other = __webpack_require__(374);

var _other2 = _interopRequireDefault(_other);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var temp = [];
_currency2.default.sites.forEach(function (site) {
  temp = temp.concat(site.relatedSite);
});

var domainData = [].concat(_toConsumableArray(_wallet2.default.sites), _toConsumableArray(_exchanger2.default.sites), _toConsumableArray(_other2.default.sites), _toConsumableArray(_currency2.default.sites), _toConsumableArray(temp));

function verifyDomain(stringUrl) {
  var trusted = domainData.find(function (site) {
    return check(stringUrl, site.domain, site.url);
  });

  var iconPath = trusted ? "green.png" : "red.png";
  chrome.browserAction.setIcon({ path: iconPath });

  if (trusted) updateCounter(stringUrl);
}

function check(stringUrl, siteDomain, siteURL) {
  var url = new URL(stringUrl);

  var trusted = false;
  if (siteDomain) {
    trusted = url.hostname.match(new RegExp('^([\da-z\.-]+\.)?' + siteDomain.replace('.', '\.') + '$')) != null;
  } else {
    trusted = stringUrl === siteURL;
  }

  return trusted;
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url) verifyDomain(changeInfo.url);
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    if (tab) verifyDomain(tab.url);
  });
});

function updateCounter(domain) {
  chrome.storage.sync.get('MostClickSites', function (rs) {
    var updatedStorage = void 0;

    var newData = {
      url: domain,
      clicks: 1
    };

    if (rs.MostClickSites && rs.MostClickSites.length > 0) {
      var found = rs.MostClickSites.find(function (s) {
        return s.url === domain;
      });
      if (found) {
        found.clicks += 1;
      } else {
        rs.MostClickSites.push(newData);
      }
      updatedStorage = rs.MostClickSites;
    } else {
      updatedStorage = [newData];
    }

    chrome.storage.sync.set({ 'MostClickSites': updatedStorage });
  });
}

/***/ })

/******/ });