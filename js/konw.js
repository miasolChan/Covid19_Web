
function Slider(){
    var slideImg = document.getElementById("slide-img")
    var imgNum = parseInt(slideImg.getAttribute("imgNum")); 
    setTimeout(function(){
        imgNum+=1;
         if(imgNum==4) {
             imgNum = 0
         }
        slideImg.src = "../img/slide_"+imgNum+".jpg"
        console.log("轮播图切换"+imgNum)
        slideImg.setAttribute("imgNum",imgNum)
    },3000) 
    var left = document.getElementById("left")
    var right = document.getElementById("right")
    left.onclik = function(){
        imgNum--;
        if(imgNum<0) imgNum=0
        slideImg.src = "../img/slide_"+imgNum+".jpg"
        slideImg.setAttribute("imgNum",imgNum)
        console.log("imgNum+1为"+imgNum)
    }
    right.onclik = function(){
        imgNum++;
        if(imgNum>3) imgNum =3
        slideImg.src = "../img/slide_"+imgNum+".jpg"
        slideImg.setAttribute("imgNum",imgNum)
        console.log("imgNum-1"+imgNum)
    }

}
