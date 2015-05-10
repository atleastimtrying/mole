var Mole = function(){
  var cell = make('span');
  cell.style.width = cell_size + "px";
  cell.style.height = cell_size + "px";
  var up = false;
  var running = true;
  var popup = function(){
    up = true;
    cell.className = "up";
    this.setTimeout(popdown, timeout);
  };
  var popdown = function(){
    up = false;
    cell.className = "down";
  };
  var flash = function(colour){
    cell.style.background = colour;
    setTimeout(function(){
      cell.style.background = "";
    },timeout/2);
  };
  var click = function(){
    if(up){
      popdown();
      flash("green");
      count += 1;
    }else{
      flash("red");
      count -= 1;
    }
  };
  this.cell = cell;
  var loop = function(){
    popup();
    if(running){
      setTimeout(loop, Math.random() * timeout);
    }
  };
  this.stop = function(){
    running = false;
  };
  
  this.start = function(){
    running = true;
    setTimeout(loop, Math.random() * timeout);
    popdown();
  };
  cell.addEventListener('touchstart', click, false);
  // cell.addEventListener('touchmove', click, false);
  // cell.addEventListener('touchend', click, false);
  moles.push(this);
};