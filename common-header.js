(function () {
  var headerRoot = document.getElementById('site-header-root');
  if (!headerRoot) {
    return;
  }

  var sharedConnect = {
    href: 'https://www.linkedin.com/in/kgoldenag/',
    external: true
  };

  var baseNav = [
    { href: 'about.html', label: 'About' },
    { href: 'career.html', label: 'Career' },
  ];

  function withActive(items, activeLabel) {
    return items.map(function (item) {
      return {
        href: item.href,
        label: item.label,
        active: item.label === activeLabel
      };
    });
  }

  var variants = {
    index: {
      logoHref: '#top',
      connect: sharedConnect,
      navItems: baseNav
    },
    about: {
      logoHref: 'index.html',
      connect: sharedConnect,
      navItems: withActive(baseNav, 'About')
    },
    career: {
      logoHref: 'index.html',
      connect: sharedConnect,
      navItems: withActive(baseNav, 'Career')
    },
  };

  var variantName = headerRoot.getAttribute('data-header-variant') || 'index';
  var config = variants[variantName] || variants.index;

  var navMarkup = config.navItems
    .map(function (item) {
      var activeClass = item.active ? ' class="active"' : '';
      return '<li><a href="' + item.href + '"' + activeClass + '>' + item.label + '</a></li>';
    })
    .join('');

  var connectAttrs = config.connect.external ? ' target="_blank" rel="noopener noreferrer"' : '';

  headerRoot.outerHTML =
    '<header class="site-header">' +
      '<div class="container header-inner">' +
        '<a href="' + config.logoHref + '" class="logo">Katherine <span>Golden</span></a>' +
        '<nav>' +
          '<ul>' + navMarkup + '</ul>' +
        '</nav>' +
        '<a href="' + config.connect.href + '" class="connect-btn"' + connectAttrs + '>Connect</a>' +
      '</div>' +
    '</header>';
})();