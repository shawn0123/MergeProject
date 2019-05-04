$(document).ready(function() {
    $("input").click(function(){
        var numberOfListItem = $(".random").length;
        var randomChildNumber = Math.ceil(Math.random()*numberOfListItem) - 1;
        
        $("H1").text($(".random").eq(randomChildNumber).text());
        $("IMG").attr("src","RandomSelector/"+randomChildNumber+".jpg");
        $("IMG").attr("width","500px");
        $("IMG").attr("height","500px");
    })
});