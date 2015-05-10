//todo: grunt, scoreboard, phonegap, rails?
/* 

rails app design:
- homepage
- scoreboard json
- post scores
  - devise login via ajax
  - look into using google verification via ajax
  - send details with scores

phonegap design:
- login via ajax

*/
//how many moles can you whack?
var count = 0;
var rows = 4;
var columns = 4;
var cell_size = 20;
var timeout = 20000;
var total = rows * columns;
var moles = [];
var stopper = function(){
  stop_moles();
  get('score_screen').show();
  get('game_screen').hide();
  get('highscore_screen').hide();
  get('score_text').html('Game over you got:' + count);
  setTimeout(function(){
    get('start_screen').show();
    get('score_screen').hide();
    get('highscore_screen').hide();
  }, 4000);
};

var timer = new Timer(stopper);
var display_count = function(){
  get('count').html(count);
  window.requestAnimationFrame(display_count);
};

var stop_moles = function(){
  moles.forEach(function(mole){
    mole.stop();
  });
};

var start_moles = function(){
  moles.forEach(function(mole){
    mole.start();
  });
};

var build_moles = function(){
  var moles = [];
  var table = get('table');
  for(var x = 0, l = rows; x < l; ++x){
    var row = make('div');
    for(var y = 0, l = columns; y < l; ++y){
      var mole = new Mole();
      moles.push(mole);
      row.add(mole.cell);
    };
    table.add(row);
  };
  return moles;
};

var begin = function(){
  get('start_screen').hide();
  get('game_screen').show();
  start_moles();
  timer.start();
};
window.onload = function(){
  var smaller_edge = window.innerWidth < window.innerHeight - 30? window.innerWidth : window.innerHeight - 30;
  cell_size = ((smaller_edge - 32) / rows);
  moles = build_moles();
  display_count();
  get('start').click(begin);
};