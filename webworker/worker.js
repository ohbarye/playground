self.addEventListener('message', function(e) {
  console.log('worker start');

  var count = 0;
  var countup = function(){
    console.log('counting in worker');
    console.log(count++);
  }
  var id = setInterval(function(){
    countup();
    if(count > 5){
      clearInterval(id);
    }}, 1000);

  console.log('worker end');
}, false);
