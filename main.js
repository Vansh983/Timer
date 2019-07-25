function CountDown(container, time) {
  this.container = container;
  this.button = container.querySelector('.button');
  this.display = container.querySelector('.timer-display');
  this.bar = container.querySelector('.timer-bar');
  this.time = time;
  this.remainingTime = this.time;
  this.elapsedTime = 0;

  this.onButtonClick = this.onButtonClick.bind(this);
  this.addEventListeners();
  this.updateDisplay();
}

CountDown.fn = CountDown.prototype;

CountDown.fn.addEventListeners = function() {
  this.button.addEventListener('click', this.onButtonClick, true);
};

CountDown.fn.onButtonClick = function() {
  this.init();
  this.button.removeEventListener('click', this.onButtonClick, true);
};

CountDown.fn.updateCounters = function() {
  this.remainingTime -= 1;
  this.elapsedTime += 1;
};

CountDown.fn.updateDisplay = function() {
  this.display.innerText = parseInt(this.remainingTime / 60, 10) + ':' + ('0' + (this.remainingTime % 60)).substr(-2);
};



CountDown.fn.init = function() {
  var tid = setInterval(function(){
    if (this.remainingTime === 0) {
      return clearInterval(tid);
    }

    this.updateCounters();
    this.updateDisplay();
    this.checkFinalTime();
  }.bind(this), 1000);

  // this.button.innerText = 'Done!';
};

new CountDown(document.querySelector('.canvas'), 7200);
