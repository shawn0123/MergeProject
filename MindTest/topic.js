var topic = [
    "課程介紹",
    "停課",
    "停課",
    "亂數&排序",
    "停課",
    "下一次上課"
];

var startDate = new Date();

function setMonthAndDay (startMonth, startDay){
    // set month and day at one time
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);