//滚动
function navScroll() {
    //导航栏css选择
    var headerCss = document.querySelector('#header')
    var header = document.getElementById("header")
    var navTag = document.getElementById("navTag")
    var navSlogan = document.getElementById("nav-slogan")
    //
    var oofsetTop = document.documentElement.scrollTop
    //
    if(oofsetTop>0 ){
        console.log("滚动")
        headerCss.style.position = "fixed"
        headerCss.style.background = "rgba(255, 255, 255)"
        header.classList.remove("box")
        navTag.classList.add("flex-center")
        header.classList.add("nav-shadow")
        headerCss.style.width = "100%"
        
        //nav.setAttribute("style","position:fixed")
        //nav.setAttribute("style","background: argb(235, 235, 235)")
    }else if (oofsetTop <=0){
        headerCss.style.position = "static"
        headerCss.style.background = "rgba(255, 255, 255, 0)"
        header.classList.add("box")
        header.classList.remove("nav-shadow")
        navTag.classList.remove("flex-center")
        headerCss.style.width = "auto"
    }
}
