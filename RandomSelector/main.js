$(document).ready(function() {
    $("input").click(function(){
        var numberOfListItem = $(".random").length * 3;
        var randomChildNumber = Math.ceil(Math.random()*numberOfListItem) - 1;
        
        var list = [
            "1923349",
            "1171316",
            "1093078",
            "1395749",
            "1741989",
            "990396",
            "1232752",
            "1780727",
            "1216854"
        ];
        
        var url = "https://osu.ppy.sh/api/get_beatmaps?";
        var key = "9f1e164bbe49e140f1ac980ce78e6bae7837b184";
        url += "k=";
        url += key;
        url += "&b=";
        url += list[randomChildNumber];
        console.log(url)
        
        var request = new XMLHttpRequest()
        request.open('GET', url, true)
        request.onload = async function(){
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                data.forEach( mapset => {
                    var title = mapset.artist;
                    title += " - ";
                    title += mapset.title;
                    $("#title").fadeOut('fast');
                    setTimeout(function(){
                        $("#title").text(title);
                        console.log('sleep');
                    },250);
                    $("#title").fadeIn('fast');
                    
                    var header = title;
                    header += " [";
                    header += mapset.version;
                    header += "]";
                    var ref = "https://osu.ppy.sh/b/";
                    ref += mapset.beatmap_id;
                    var mapper = "Creator: ";
                    mapper += mapset.creator;
                    var bpm = "Bpm: ";
                    bpm += mapset.bpm;
                    var diff = "Star Rate: ";
                    diff += mapset.difficultyrating.substr(0,4);
                    var cs = "Circle Size: ";
                    cs += mapset.diff_size;
                    var ar = "Approach Rate: ";
                    ar += mapset.diff_approach;
                    var hp = "HP Drain: ";
                    hp += mapset.diff_drain;
                    var od = "Overall Difficulty: ";
                    od += mapset.diff_overall;
                    var len = "Length: ";
                    var min = Number(mapset.total_length);
                    var sec = min % 60;
                    min = min / 60;
                    min = Math.floor(min);
                    len += min.toString(10);
                    if (sec >= 10){
                        len += ":";
                        len += sec.toString(10);
                    }
                    else{
                        len += ":0";
                        len += sec.toString(10);
                    }
                    var fav = "Favourited: ";
                    fav += mapset.favourite_count;
                    
                    $("#map").slideUp('fast');
                    setTimeout(function(){
                        $("#pic").attr("src","RandomSelector/"+randomChildNumber+".jpg");
                        $("#pic").attr("width","225px");
                        $("#pic").attr("height","150px");
                        $("#pic-href").attr("href",ref);
                        $("#header").text(header);
                        $("#mapper").text(mapper);
                        $("#bpm").text(bpm);
                        $("#diff").text(diff);
                        $("#cs").text(cs);
                        $("#ar").text(ar);
                        $("#hp").text(hp);
                        $("#od").text(od);
                        $("#length").text(len);
                        $("#fav").text(fav);
                        console.log('sleep');
                    },225);
                    $("#map").slideDown('fast');
                })
            } else {
                console.log("Error Occurred!!");
            }
        }
        
        request.send();
    })
});