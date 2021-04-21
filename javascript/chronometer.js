class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(num) {
    // Our chronometer has a super cool screen that needs two digits number to display minutes and seconds, but sometimes getMinutes() and getSeconds() returns a single-digit number. Let's create a super simple algorithm that will turn into two-digits number any received value. Example: if the value of the currentTime property is 36 seconds, it should return 00 for minutes and 36 for seconds; if the currentTime is 5 min and 43 sec, it should give us back 05 for minutes and 43 for seconds. At the same time, if the currentTime is 17 min and 13 sec, it should give us back 17 for minutes and 13 for seconds.

    if (num < 10) {
      num = "0" + num;
    }
    return num;

  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
