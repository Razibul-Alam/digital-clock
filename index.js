function currentTime(){
    const date=new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    const second=date.getSeconds()
    hours=updateTime(hour)
    minutes=updateTime(minute)
    seconds=updateTime(second)
    document.getElementById('clock').innerHTML=hours+'-'+minutes+'-'+seconds
setTimeout(function (){currentTime() 
    
}, 1000);
}

    function updateTime(k){
        if(k<10){
            return "0"+k;
        }else{
            return k;
        }
        
    }

currentTime()