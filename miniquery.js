(function(){
  var returnthis = function(fn){
    return function(){
      fn(this);
      return this;
    }
  };
  var wrap = function(element){
    element.hide = returnthis(function(element){
      element.style.display = 'none';
    });
    element.show = returnthis(function(element){
      element.style.display = 'block';
    });
    element.html = function(string){
      this.innerHTML = string;
      return this;
    };
    element.click = function(callback){
      this.addEventListener('click', callback, false);
      return this;
    };
    element.add = function(element){
      this.appendChild(element);
      return this;
    }
    return element;
  };

  var by_id = function(name){
    return document.getElementById(name);
  };

  window.get = function(name){
    return wrap(by_id(name));
  };

  window.make = function(tagname){
    return wrap(document.createElement(tagname));
  };
})();