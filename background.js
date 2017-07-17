chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    const url = changeInfo.url;
    let iconPath;
    if (url.includes('https://www.myetherwallet.com')) {
      iconPath = "green.png";
    } else {
      iconPath = "red.png";
    }
    chrome.browserAction.setIcon({path: iconPath});
  }
});