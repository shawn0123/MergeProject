var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMountain, imgMain, imgEnemy;

$(document).ready(function() {
    mapArray = [0,1,1,0,0,0,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    //主角
    imgMain = new Image();
    imgMain.src = "RPG/images/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,88,130,currentImgMainX,currentImgMainY,200,200);
    };
    
    //障礙物
    imgMountain = new Image();
    imgMountain.src = "RPG/images/material.png";
    //敵人
    imgEnemy = new Image();
    imgEnemy.src = "RPG/images/Enemy.png";
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for (var x in mapArray){
                //擺上障礙物
                if (mapArray[x] == 1){
                    ctx.drawImage(imgMountain,32,192,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                }
                //擺上敵人
                else if(mapArray[x] == 3){
                    ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                }
            }
        };
    };
})
                  
$(document).keydown(function(event){
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    
    //預防瀏覽器其他按鍵的預設行為
    event.preventDefault();
    
    switch(event.which){
        //往左走
        case 37:
            targetImgMainX = currentImgMainX - 200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;
        //往上走
        case 38:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY - 200;
            cutImagePositionX = 355;
            break;
        //三玖 往右走
        case 39:
            targetImgMainX = currentImgMainX + 200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        //往下走
        case 40:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY + 200;
            cutImagePositionX = 0;
            break;
        //其他情況
        default:
            return;
    }
    
    if (targetImgMainX <= 400 && targetImgMainX >= 0 && targetImgMainY <= 400 && targetImgMainY >= 0){
        targetBlock = targetImgMainX / 200 + targetImgMainY / 200 * 3;
    }
    else{
        targetBlock = -1;
    }
    
    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);
    if (targetBlock == -1 || mapArray[targetBlock] == 1 || mapArray[targetBlock] == 3){
        //不動但轉向
    }
    else{
        $("#talkBox").text("");
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
    
    switch(mapArray[targetBlock]){
        //邊界
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("有山");
            break;
        case 2:
            $("#talkBox").text("抵達終點!");
            break;
        case 3:
            $("#talkBox").text("嗨");
            break;
    }
});