class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId= null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      if (printTimeCallback !== undefined){
        this.currentTime++;
        printTimeCallback();
      } else{
        this.currentTime++; 
      }
     }, 1000);
     
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime /60)
    return minutes;
  }

  getSeconds() {
    let secounds = this.currentTime % 60;
    return secounds;
  }

  computeTwoDigitNumber(value) {
    let twoDigits=value;
    if(value< 10){
      twoDigits = "0"+twoDigits.toString();
    }else{
      twoDigits= twoDigits.toString();
    }
    
    return twoDigits;
  }

  stop() {
    clearInterval(this.intervalId);  
  }

  reset() {
    
    this.currentTime.reset();
    //reset(this.currentTime);

  }

  split() {
    const minutes = this.getMinutes();
    const secounds= this.getSeconds();
    minutes= computeTwoDigitNumber(minutes);
    secounds=computeTwoDigitNumber(secounds);
    return `${minutes} : ${secounds}`;
  }
}
