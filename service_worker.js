if (typeof browser !== 'object') {
  browser = chrome;
}

browser.contextMenus.create({
  id: 'open-link-same-tab',
  title: 'Open link in this tab',
  contexts: ['link'],
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === 'open-link-same-tab') {
    browser.tabs.update({url: info.linkUrl});
  }
});

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'doyerthing') {
    browser.tabs.update({url: request.href});
  }
});
