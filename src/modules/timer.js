function timer () {
    //Timer
    const deadline = '2024-06-21'
    function getTimeRemaing (endtime){
      let days, hours, minutes, seconds
      const timer = Date.parse(endtime) - Date.parse(new Date())
      if(timer <= 0){
        days = 0
        hours = 0
        minutes = 0
        seconds = 0
      }else{
        days = Math.floor(timer / (1000 * 60 * 60 * 24))
        hours = Math.floor((timer / (100 * 60 * 60)) % 24)
        minutes = Math.floor((timer / (1000 * 60)) % 60)
        seconds = Math.floor((timer / (1000)) % 60)
      }
     
      return {timer, days, hours, minutes, seconds}
    }
    function getZero(num){
      if(num >= 0 && num < 10){
        return `0${num}`
      }else{
        return num
      }
    }
    
    function setClock (selector, endtime) {
      const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock,1000)
      
      updateClock()
  
      function updateClock(){
        const t = getTimeRemaing(endtime)
  
        days.innerHTML = getZero(t.days)
        hours.innerHTML = getZero(t.hours)
        minutes.innerHTML = getZero(t.minutes)
        seconds.innerHTML = getZero(t.seconds)
        if(t.timer<=0){
          clearInterval(timeInterval)
        }
      }
    }
    setClock('.timer', deadline)
}
module.exports = timer