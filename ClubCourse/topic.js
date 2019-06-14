var topic = [
    "Last Man Standing Tournament",
    "Calamity Cup",
    "Osu Taiwan Standard Tournament 4",
    "Osu! Roll Tournament 2",
    "Luminuous Tournament 2019",
    "Last Minute Tournament"
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