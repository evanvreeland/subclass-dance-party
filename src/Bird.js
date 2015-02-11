var Bird = function (top, left, timeBetweenSteps){
  // this.$node = $('<span class="square"></span>');
  Dancer.apply(this,arguments);

}

Bird.prototype = Object.create(Dancer.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
   Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var settings = {
      width: Math.random()*100,
      height: Math.random()*100

    };
    this.$node.css(settings);
  };
