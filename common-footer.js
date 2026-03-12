(function () {
  var footerRoot = document.getElementById('site-footer-root');
  if (!footerRoot) {
    return;
  }

  var description = 'Technology executive, speaker, and writer focused on AI strategy, engineering leadership, and the human systems that make great technology possible.';

  var rootNavigation = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'career.html', label: 'Career' },
  ];

  var archiveNavigation = [
    { href: '../index.html', label: 'Home' },
    { href: '../about.html', label: 'About' },
    { href: '../career.html', label: 'Career' },
  ];

  var connectItems = [
    { href: 'https://www.linkedin.com/in/kgoldenag/', label: 'LinkedIn', external: true }
  ];

  function cloneItems(items) {
    return items.map(function (item) {
      return {
        href: item.href,
        label: item.label,
        external: !!item.external
      };
    });
  }

  var variants = {
    about: {
      description: description,
      navigationItems: cloneItems(rootNavigation),
      connectItems: cloneItems(connectItems)
    },
    index: {
      description: description,
      navigationItems: cloneItems(rootNavigation),
      connectItems: cloneItems(connectItems)
    },
    career: {
      description: description,
      navigationItems: cloneItems(rootNavigation),
      connectItems: cloneItems(connectItems)
    },
    community: {
      description: description,
      navigationItems: cloneItems(rootNavigation),
      connectItems: cloneItems(connectItems)
    }
  };

  function renderItem(item) {
    if (!item.href) {
      return '<li>' + item.label + '</li>';
    }

    var relAttrs = item.external ? ' target="_blank" rel="noopener noreferrer"' : '';
    return '<li><a href="' + item.href + '"' + relAttrs + '>' + item.label + '</a></li>';
  }

  var variantName = footerRoot.getAttribute('data-footer-variant') || 'index';
  var config = variants[variantName] || variants.index;

  var navMarkup = config.navigationItems.map(renderItem).join('');
  var connectMarkup = config.connectItems.map(renderItem).join('');

  footerRoot.outerHTML =
    '<footer id="connect">' +
      '<div class="container footer-grid">' +
        '<div>' +
          '<div class="footer-brand">Katherine <span>Golden</span></div>' +
          '<p>' + config.description + '</p>' +
        '</div>' +
        '<div>' +
          '<div class="footer-title">Navigation</div>' +
          '<ul class="footer-list">' + navMarkup + '</ul>' +
        '</div>' +
        '<div>' +
          '<div class="footer-title">Connect</div>' +
          '<ul class="footer-list">' + connectMarkup + '</ul>' +
        '</div>' +
      '</div>' +
    '</footer>';
})();