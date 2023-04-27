setInterval(() => {
    let dd = new Date();
    let date = dd.getDate();
    let month = dd.getMonth() + 1;
    let year = dd.getFullYear();
    if (date < 10) date = '0' + date;
    if (month< 10) month = '0' + month;
    document.querySelector('.date').innerHTML = `${date} . ${month}. ${year}`
})

setInterval(() => {
    let dd = new Date();
    let hh = dd.getHours();
    let mm = dd.getMinutes();
    let ss = dd.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    document.querySelector('.time').innerHTML = `${hh} : ${mm} : ${ss}`
})

let msec = '00'
let sec = '00';
let min = '00';
let hour = '00';

function startInterval(){
        timeoutID = setInterval(() => {
            msec++
            document.querySelector('.counter').innerHTML = `${hour}:${min}:${sec}:${msec}` ;
        
        if (msec == 100 ) {
            sec++;
            msec = "000";
            sec < 10 ? sec = '0' + sec : sec;
        document.querySelector('.counter').innerHTML =  `${hour}:${min}:${sec}:${msec}`;
        }
        if (sec == 60) {
            min++;
            sec= "00";
            min < 10 ? min = '0' + min : min;
            document.querySelector('.counter').innerHTML = `${hour}:${min}:${sec}:${msec}` ;
        }
        if (min == 60) {
            hour++;
            min= "00";
            hour < 10 ? hour = '0' + hour : hour;
        document.querySelector('.counter').innerHTML = `${hour}:${min}:${sec}:${msec}`;
        }
         }, 10)      
        
        }
    
function stopInterval(){
    clearInterval(timeoutID);
    timeoutID = null;


}  

function loop(){
    let sec =  document.querySelector('.sec');
    let counter = document.querySelector('.counter');
    sec.textContent += counter.innerHTML + `\r\n`;


}


function reset(){
    stopInterval();
    document.querySelector('.sec').textContent = '';
    document.querySelector('.counter').innerHTML = '00:00:00:00';
   
}


  

let count = document.querySelector('.count').innerHTML;
function plus(){
    count ++;
    document.querySelector('.count').innerHTML = count;
    }

function minus(){
    count --;
    document.querySelector('.count').innerHTML = count;
}

let seconds = '59';
let countId;
function startCount(){
    let minutes = count - 1;
    countId = setInterval(() => {
    seconds--;
    seconds < 10 ? seconds = '0' + seconds : seconds;
    document.querySelector('.remaining').innerHTML = ` ${minutes} : ${seconds}` ;
    if (seconds == 0) {
    minutes--;
    seconds = "59";
    minutes < 10 ? minutes = '0' + minutes : minutes;
    }

    }, 1000)
}

function stopCount(){
    clearInterval(countId);
    countId = null;
}

function resetCount(){
    stopCount();
    document.querySelector('.remaining').innerHTML = '00:00';
}
