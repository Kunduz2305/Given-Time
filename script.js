// let date = new Date()

// console.log(date)

let clock =()=> {
    let date = new Date()
    let month_num = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()

    if(hours<9)hours="0"+hours
    if(minutes<9)minutes="0"+minutes
    if(second<10)second="0"+second

let month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Аагусть","Сентябрь","Октябрь","Ноябрь","Декабрь"]
console.log()    
    // let date_time = "Сегодня : "+ day +"-"+ month[month_num]+" "+"Время"+hours+":"+minutes+":"+second
    let date_time =hours+":"+minutes+":"+second
    
    // console.log(date_time)
    let element = document.getElementById('time').innerHTML =date_time
    // console.log(element)
    setTimeout(() => {
        clock()
    }, 1000);
    // 1000 - 1секундка барабар
}

clock()