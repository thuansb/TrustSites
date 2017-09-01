import wallet from 'data/wallet';
import exchanger from 'data/exchanger';
import currency from 'data/currency';
import other from 'data/other';

let temp = [];
currency.sites.forEach(site => {
  temp = temp.concat(site.relatedSite);
});

const domainData = [...wallet.sites, ...exchanger.sites, ...other.sites, ...currency.sites, ...temp];

function verifyDomain(stringUrl) {
  const trusted = domainData.find((site) => check(stringUrl, site.domain, site.url));

  const iconPath = trusted ? "green.png" : "red.png";
  chrome.browserAction.setIcon({ path: iconPath });
}

function check(stringUrl, siteDomain, siteURL) {
  const url = new URL(stringUrl);

  let trusted = false;
  if (siteDomain) {
    trusted = url.hostname.match(new RegExp('^([\da-z\.-]+\.)?' + siteDomain.replace('.', '\.') + '$')) != null;
  } else {
    trusted = stringUrl === siteURL;
  }

  return trusted;
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) verifyDomain(changeInfo.url);
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab) verifyDomain(tab.url);
  });
});