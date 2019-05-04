$(document).ready(function() {
    /*$("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit * 24;*/
    
    tableApply();

    $("#submit").click(function() {
        $("#courseTable").empty();
        var month = 4;
        var day = 1;
        if (document.getElementById('inputMonth').value)
            month = parseInt(document.getElementById('inputMonth').value);
        if (document.getElementById('inputDay').value)
            day = parseInt(document.getElementById('inputDay').value);
        startDate.setMonth(month-1, day);
        $("#inputMonth").empty();
        tableApply();
    })
    
    $("#apply").click(function() {
        var len = topic.length;
        topic.push(document.getElementById('newTopic').value);
        $("#courseTable").empty();
        tableApply();
    })
    
    /*for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>" + (x + 1) + "</td>");
        $("#courseTable").append("<td>" + (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5) + "</td>");
        if (topic[x] == "不上課")
            $("#courseTable").append("<td style=\"color:gray\";>" + topic[x] + "</td>");
        else
            $("#courseTable").append("<td>" + topic[x] + "</td>");
        $("#courseTable").append("</tr>");
    }*/
});

function tableApply(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit * 24;
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>");
        if (topic[x] == "停課"){
            $("#courseTable").append("<td style=\"color:gray\";>" + (x + 1) + "</td>");
            $("#courseTable").append("<td width=\"100\" style=\"color:gray\";>" + (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5) + "</td>");
            $("#courseTable").append("<td width=\"300\" style=\"color:gray\";>" + topic[x] + "</td>");
        }
        else{
        $("#courseTable").append("<td>" + (x + 1) + "</td>");
        $("#courseTable").append("<td width=\"100\">" + (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5) + "</td>");
        $("#courseTable").append("<td>" + topic[x] + "</td>");
        }
        $("#courseTable").append("</tr>");
    }
}