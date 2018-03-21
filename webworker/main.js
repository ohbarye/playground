var worker = new Worker('./worker.js');

worker.postMessage('Hello World'); // Send data to our worker.

setTimeout(function () {
  window.location.href = 'http://ohbarye.me'
}, 1000)
