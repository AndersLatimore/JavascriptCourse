/**
 * Pushing the ball.
 */
$(document).ready(function(){
  'use strict';
  var text = document.getElementById('text'),
      flash = document.getElementById('flash'),    
      myBall, pos, isDragging;

  text.innerHTML = '<b><strong>Click the ball to make it move around, drag it to make it go!</strong></b>';

  isDragging = false;

  myBall = {};

  myBall.image = 'http://dbwebb.se/img/black_ball_64_64.png';
  myBall.position = {x:10, y:10}
  myBall.dimension = {w:64, h:64}
  
  pos = Mos.getOffset(flash);
  myBall.canvas = {
    x: pos.left,
    y: pos.top,
    x2: pos.left + flash.clientWidth - myBall.dimension.w,
    y2: pos.top + flash.clientHeight - myBall.dimension.h
  }
  
  myBall.position.X = 27;  
  
  myBall.HTMLelement = document.getElementById('ball');
  
  myBall.draw = function () {
    this.HTMLelement.style.backgroundImage = 'url(' + this.image + ')';
    this.HTMLelement.style.left = this.position.x + 'px';
    this.HTMLelement.style.top = this.position.y + 'px';
  }
  
  myBall.moveTo = function (x, y) {
    this.position.x = x;
    this.position.y = y;
    this.draw();
  }
  
  myBall.keepWithinRange = function (a, min, max) {
    var b = a >= min ? ( a <= max ? a : max) : min;
    return b;
  }
  
  myBall.moveBy = function (x, y) {
    this.position.x = this.keepWithinRange(this.position.x + x, this.canvas.x, this.canvas.x2);
    this.position.y = this.keepWithinRange(this.position.y + y, this.canvas.y, this.canvas.y2);
    this.draw();
  }
  
  myBall.pushAt = function (x, y) {
    var newX, newY;
    newX = (this.position.x + this.dimension.w/2 - x) * 10;
    newY = (this.position.y + this.dimension.h/2 - y) * 10;
    this.moveBy(newX, newY);
  }
  
  myBall.center = function () {
    this.position.x = this.canvas.x + (this.canvas.x2 - this.canvas.x)/2;
    this.position.y = this.canvas.y + (this.canvas.y2 - this.canvas.y)/2;
    this.draw();
  }

  myBall.HTMLelement.addEventListener('click', function (event) {
    myBall.pushAt(event.pageX, event.pageY);
  });

  myBall.doDrag = function (e) {
    this.style.left = (e.clientX-startX) + 'px';
    this.style.top =  (e.clientY-startY) + 'px';
  }

  myBall.stopDrag = function (e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
    startX = null;
    startY = null;
  }

  myBall.initDrag = function (e) {
    e.stopPropagation();
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  }


  myBall.HTMLelement.addEventListener('mousedown', function (event) {
          isDragging = true;
        });

     document.addEventListener('mouseup', function (event) {
            if(isDragging) {
                var w, h;
            
                //Calculate the drag distance
                w = myBall.position.x - event.pageX + myBall.dimension.w / 2;
                h = myBall.position.y - event.pageY + myBall.dimension.h / 2;
           
                //Move ball in the oposite drag direction
                myBall.moveBy(w,h);
                isDragging = false;
            }
        });

  
  myBall.center();
  
});


