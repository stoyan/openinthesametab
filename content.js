(function () {
  var MODIFIER = 't';
  var modifierHeld = false;
  window.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === MODIFIER) {
      modifierHeld = true;
    }
  });
  window.addEventListener('keyup', () => {
    modifierHeld = false;
  });

  document.addEventListener('click', function (event) {
    var linkElement = event.target.closest('a');
    if (linkElement) {
      if (modifierHeld) {
        event.preventDefault();
        chrome.runtime.sendMessage({
          action: 'doyerthing',
          href: linkElement.href,
        });
      }
    }
  });
})();
