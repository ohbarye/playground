javascript:(
  function() {
    diff = document.querySelector("a[title='Gemfile.lock']").parentNode.parentNode.parentNode.innerText;
    revisions = diff.match(/revision: [a-z0-9]{40}/g).map(function(v){return v.replace('revision: ', '')});
    repo = diff.match(/(https|git):\/\/.+/g)[0].split('github.com')[1].replace('.git', '');
    url = 'https://github.com/' + repo + '/compare/' + revisions[0] + '...' + revisions[1];
    window.open(url);
  }
)();
