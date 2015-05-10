var Timer = function(stopper){
  var time, running;
  var stopper = stopper;
  var stop_timer = function(){
    running = false;
  };
  var reset = function(){
    stop_timer();
    time = -1;
  };
  loop = function(){
    if(running){
      time += 1;
      get('time').html(time);
      if(time > 30){
        reset();
        stopper();
      }
      setTimeout(loop, 1000);
    }
  };
  this.start = function(){
    running = true;
    loop();
  };
  this.value = function(){
    return time;
  };
  reset();
};