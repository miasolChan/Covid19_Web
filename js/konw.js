
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
        var left = document.getElementById("left")
        var right = document.getElementById("right")
        left.onclick = function(){
            imgNum--;
            console.log("点击左")
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
    },3000) 

}

//防疫数据加载
var konwdata =[  
  { title: "维生素ABCDE与免疫力", context: "【新华网】"},
  { title: "卫生好习惯 健康相与伴", context: "【人民日报】"},
  { title: "戴口罩爆痘怎么办？五招助你摆脱“爆痘”困扰", context: "【北京青年报】"},
  { title: "北京疾控中心： 使用空调时要注意开窗通风，户外运动原则上不用戴口罩", context: "【北京日报】"},

  { title: "感冒和流感会相互免疫", context: "【人民健康网】"},
  { title: "中医药：国货之光 战疫良方", context: "【中国日报网】"},
  { title: "湖北产的食用盐带有新冠病毒？谣言！", context: "【人民网】"},
  { title: "戴口罩一米线预约制 疫情改变了哪些习惯？", context: "【人民日报海外版】"},

  { title: "疫情防控“下半场”需要哪些“硬手段”？", context: "【新华社】"},
  { title: "首个新冠疫苗1期临床试验出结果", context: "【中国健康网】"},
  { title: "美食季又来了 送你一份安全饮食小贴士", context: "【新华网】"},
  { title: "中医药：国货之光 战疫良方", context: "【中国日报网】"},

  { title: "这七类地方还需口罩“护体”", context: "【北京青年报】"},
  { title: "疫苗瓶可年产80亿支以上 我国新冠疫苗生产无“瓶颈”", context: "【中新经纬】"},
  { title: "家庭药箱放什么？这些常备药物你需要知道", context: "【人民网】"},
  { title: "防疫不松懈 出游更顺心", context: "【人民日报】"},
]; 
function initKnowData() 
{
  // 取前四条数据初始化页面
  var konwList = document.getElementById('konwList');
  var outStr = "";
  for (var i = 0; i < 4; i++) {
    outStr += '<a href="../myhtml/news_detail.html"> <div class="list-item"><div class="list-item-title">'+'<h6>'+konwdata[i].title+'</h6>'+'</div>'+ '<p class="list-item-context">'+'来源：'+konwdata[i].context+'</p> </div></a>'
  }
  konwList.innerHTML = outStr;
  
  // 实现翻页功能
  var aBtn = document.getElementsByClassName("page-item");
  for (var j = 0; j < aBtn.length; j++) { // 为每个页数按钮都设置点击事件
    var funStr = "pageChange2("+j+')'
    aBtn[j].setAttribute("onclick",funStr)
  }
}

var nowIndex = 1;
function pageChange2(index){

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
    pageChange2(nowIndex);
    return;
  }
  //点击下一页
  if(index == 5&&nowIndex!=5){
    nowIndex++;//当前页+1
    if(nowIndex==5){
      nowIndex = 4;
    }
    pageChange2(nowIndex);
    return;
  }
  for (var i = pageNum*4; i < pageNum*4+4; i++) { 
    //通过页数获取data中相应段的值
    outStr += '<a href="../myhtml/news_detail.html"> <div class="list-item"><div class="list-item-title">'+'<h6>'+konwdata[i].title+'</h6>'+'</div>'+ '<p class="list-item-context">'+'来源：'+konwdata[i].context+'</p> </div></a>'
  }
  konwList.innerHTML = outStr;
  nowIndex = index;
  console.log("现在是"+nowIndex+"页")
}
