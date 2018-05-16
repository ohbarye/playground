# Diff Checker

A bookmarklet to open GitHub's compare page from PR page.

## Usage

1. Copy bookmarklet.

  `javascript:(function(){diff=document.querySelector("a[title='Gemfile.lock']").parentNode.parentNode.parentNode.innerText;revisions=diff.match(/revision: [a-z0-9]{40}/g).map(function(v){return v.replace("revision: ","")});repo=diff.match(/(https|git):\/\/.+/g)[0].split("github.com")[1].replace(".git","");url="https://github.com/"+repo+"/compare/"+revisions[0]+"..."+revisions[1];window.open(url)})();`

  It was generated the following command.

  ```
  $ npx uglify-js diff_checker.js | pbcopy
  ```

1. Paste copied script into a URL bar in browser's bookmark setting window.
1. Execute it on PR's files page like `https://github.com/user/repo/pull/1/files`.

