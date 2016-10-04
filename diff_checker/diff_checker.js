javascript:(
  function() {
    diff = document.querySelector("span[title='Gemfile.lock']").parentNode.parentNode.parentNode.innerText;
    revisions = diff.match(/[a-z0-9]{40}/g);
    repo = diff.match(/(https|git):\/\/.+/g)[0].split('@')[1].replace('.git', '');
    url = 'https://' + repo + '/compare/' + revisions[0] + '...' + revisions[1];
    window.open(url);
  }
)();
