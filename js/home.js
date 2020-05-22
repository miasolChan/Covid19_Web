//国内外疫情切换
function ChangeTab(caseTab){
    var tabBro =document.getElementsByClassName("newcase-tab-item")
    var dataArr = document.getElementsByClassName("data")
    //改变颜色
    for(var i = 0; i < tabBro.length; i++){
        if(tabBro[i]!=caseTab){
            tabBro[i].style.background ="rgb(255, 255, 255,0.5)"
        }
        else{
            tabBro[i].style.background ="rgb(255, 255, 255)"
        }
    }
    //console.log(caseTab.textContent)
    //设置人数
    if(caseTab==tabBro[0]){
        dataArr[0].innerText=84367;
        dataArr[1].innerText=1060;
        dataArr[2].innerText=78664;
        dataArr[3].innerText=4643;
    }
    else{
        dataArr[0].innerText=2986498;
        dataArr[1].innerText=1919735;
        dataArr[2].innerText=859928;
        dataArr[3].innerText=206835;
    }
}
//弹出详细新闻窗
function PopNews(thisNews) {
    var newsArr = document.getElementsByClassName("btn-more")
    var index=0;//点击序号
    for(var i=0; i<newsArr.length;i++)
    {
        if(thisNews == newsArr[i]){
            index = i;
            console.log(index)
        }
    }
    //获取点击标题文字
    var titleName = "newsTitle"+index
    var title = document.getElementById(titleName).textContent
    var content = document.getElementsByClassName("news-content-intro")[index].textContent.replace(/\s*/,"")
    //设置窗口标题序号
    var winTitle = document.getElementById("winTitle")
    winTitle.innerText = title
    var winContent = document.getElementById("winContent")
    winContent.innerText =content
    //显示
    document.getElementById("popWin").setAttribute("style","display: block;")
}
//关闭显示窗
function WinOut(){
    var win =document.getElementById("popWin")
    win.setAttribute("style","display: none;")
}