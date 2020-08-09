let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let second = Math.floor((time % (100 * 60))/1000)
let minute = Math.floor((time % (1000 * 60 * 60))/(1000 * 60));


let timer = setInterval(function(){
     
     if (second < 59) {
       second++;
     }
     else{
      minute++;
      second = 0;
    }
   let sec = second < 10 ? `0${second}` : `${second}`
    let min = minute < 10 ? `0${minute}` : `${minute}`
    console.log(second,minute);
    document.querySelector(".time").innerHTML = ` ${min} : ${sec}`;
    
},1000)
