// 自定义数据 实际开发中 数据是从后台获取
var localData =  [  
  { title: "aa", context: "国内"},
  { title: "bb", context: "国内"},
  { title: "cc", context: "国内"},
  { title: "dd", context:"国内"},

  { title: "ee", context: "国内"},
  { title: "ff", context: "国内"},
  { title: "gg", context: "国内"},
  { title: "hh", context: "国内"},

  { title: "ii", context: "国内"},
  { title: "jj", context: "国内"},
  { title: "kk", context: "国内"},
  { title: "ll", context: "国内"},

  { title: "mm", context: "国内"},
  { title: "nn", context: "国内"},
  { title: "oo", context: "国内"},
  { title: "pp", context: "国内"},
];
var todayData = [  
  { title: "aa", context: "今日"},
  { title: "bb", context: "今日"},
  { title: "cc", context: "今日"},
  { title: "dd", context: "今日"},

  { title: "ee", context: "今日"},
  { title: "ff", context: "今日"},
  { title: "gg", context: "今日"},
  { title: "hh", context: "今日"},

  { title: "ii", context: "今日"},
  { title: "jj", context: "今日"},
  { title: "kk", context: "今日"},
  { title: "ll", context: "今日"},

  { title: "mm", context: "今日"},
  { title: "nn", context: "今日"},
  { title: "oo", context: "今日"},
  { title: "pp", context: "今日"},
]; 
var forData = [  
  { title: "aa", context: "国外"},
  { title: "bb", context: "国外"},
  { title: "cc", context: "国外"},
  { title: "dd", context: "国外"},

  { title: "ee", context: "国外"},
  { title: "ff", context: "国外"},
  { title: "gg", context: "国外"},
  { title: "hh", context: "国外"},

  { title: "ii", context: "国外"},
  { title: "jj", context: "国外"},
  { title: "kk", context: "国外"},
  { title: "ll", context: "国外"},

  { title: "mm", context: "国外"},
  { title: "nn", context: "国外"},
  { title: "oo", context: "国外"},
  { title: "pp", context: "国外"},
]; 
var data = todayData;
var aBtn = document.getElementsByClassName("page-item");
var nowIndex = 1;
window.onload = function () 
{

  // 取前四条数据初始化页面
  var newsList = document.getElementById('newsList');
  var outStr = "";
  for (var i = 0; i < 4; i++) {
    outStr += '<div class="list-item"><div class="list-item-title">'+'<h6>'+data[i].title+'</h6>'+'</div>'+ '<p class="list-item-context">'+data[i].context+'</p> </div>'
  }
  newsList.innerHTML = outStr;
  
  // 实现翻页功能
  for (var j = 0; j < aBtn.length; j++) { // 为每个页数按钮都设置点击事件
    var funStr = "pageChange("+j+')'
    aBtn[j].setAttribute("onclick",funStr)
  }

}
function pageChange(index){

  console.log("点击"+index)
  
  //变色
  for(var i =0;i<aBtn.length;i++){
    if(i==index) aBtn[index].style.color ="rgb(10, 153, 248,0.7)"
    else aBtn[i].style.color ="rgb(54, 54, 54)"
  }
  // 获取自定义属性pageNum的值 并将其转换为数字类型  释：pageNum表明当前时第几页
  var pageNum = parseInt(aBtn[index].getAttribute("pageNum")); 
  outStr = "";

  //范围内循环
  //点击上一页
  if(index ==0&&nowIndex!=0){
    nowIndex--;//当前页-1
    if(nowIndex==0){
      nowIndex = 1;
    }
    pageChange(nowIndex);
    return;
  }
  //点击下一页
  if(index == 5&&nowIndex!=5){
    nowIndex++;//当前页+1
    if(nowIndex==5){
      nowIndex = 4;
    }
    pageChange(nowIndex);
    return;
  }
  for (var i = pageNum*4; i < pageNum*4+4; i++) { 
    //通过页数获取data中相应段的值
    outStr += ' <div class="list-item"><div class="list-item-title">'+'<h6>'+data[i].title+'</h6>'+'</div>'+ '<p class="list-item-context">'+data[i].context+'</p> </div>'
  }
  newsList.innerHTML = outStr;
  nowIndex = index;
  console.log("现在是"+nowIndex+"页")
}
//
//
//新闻分类
function classifyNews(barItem){
  var bar = document.getElementsByClassName("bar-item");
  //切换分类
  if(barItem==bar[0]){//今日
    data = todayData;
  }
  if(barItem==bar[1]){//国内
    data = localData;
  }
  if(barItem==bar[2]){//国际
    data = forData;
  }
  pageChange(1);
  //切换颜色
  for(var i=0; i<bar.length;i++)
  if(bar[i] == barItem) {
    barItem.style.color ="#153458";
    barItem.style.fontWeight = "bold";
  }
  else {
    bar[i].style.color = "#6b6b6b";
    bar[i].style.fontWeight = "normal"
  }
}