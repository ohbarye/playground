javascript:(
  function() {
    var href = location.href;

    if(href.match(/(\?|&)w=1/)) {
      href = href.replace(/(\?|&)w=1/, '');
    } else if (href.match(/\?/)) {
      href = href + "&w=1";
    } else {
      href = href + "?w=1";
    }

    location.href = href;
  }
)();
