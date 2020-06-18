// 自定义数据 实际开发中 数据是从后台获取
var localData =  [  
  { title: "钟南山：新冠疫苗最早秋天或年底可用，6种疫苗在临床试验中", context: "环球时报新媒体"},
  { title: "驳斥中国隐瞒疫情论，国家卫健委主任回顾疫情初期基本过程", context: "澎湃新闻"},
  { title: "疯狂口罩跌下暴富“神坛”：有生产商从日赚15万到面临亏损百万", context: "澎湃新闻"},
  { title: "抗击疫情，我国百余所高校做了什么？", context:"科技日报"},

  { title: "马云唱黄梅戏，与援鄂医护共唱夫妻双双把家还", context: "老板联播"},
  { title: "抗击疫情，我国百余所高校做了什么？", context: "国内"},
  { title: "新冠疫苗优先为谁接种？还要继续戴口罩吗？权威回应", context: "央视新闻"},
  { title: "国务院新闻办发布《抗击新冠肺炎疫情的中国行动》白皮书", context: "新华社"},

  { title: "疫情常态化,体育教学怎么保证质量?", context: "新浪新闻"},
  { title: "抗击新冠肺炎疫情的中国行动", context: "中国共产党新闻网"},
  { title: "刘晓明大使参加英国天空新闻台《疫情后我们的新世界》特别节目", context: "中国日报网"},
  { title: "泰安市贸促会:专业消杀进校园 助力复学防疫情", context: "东方泰山"},

  { title: "广东举行疫情防控第六十二场新闻发布会", context: "国务院新闻办公室"},
  { title: "疫情改变租房需求内核", context: "瓯网"},
  { title: "天津举行新型冠状病毒肺炎疫情防控工作系列新闻发布会", context: "国务院新闻办公室"},
  { title: "【变奏曲】疫情过去之后 他们的生活转向何处?", context: "央视网"},
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
  { title: "巴西感染人数在猛涨，大部分疫情数据被删除，特朗普给“巴西特朗普”补一刀", context: "环球网"},
  { title: "抗议不断、确诊病例近两百万 特朗普宣称“战胜”新冠肺炎疫情", context: "腾讯新闻"},
  { title: "抗议叠加疫情，超80％美民众认为美国局势已失控，63％担心感染", context: "国际联联看"},
  { title: "杜兰特回忆确诊感染新冠病毒：当时既震惊又好奇 我表现得非常棒", context: "篮球记者杨克己"},

  { title: "新冠病毒11月已在欧洲出现！博士：继续往前查，必须找到零号病人", context: "排头军事"},
  { title: "美军镇压平民加剧疫情？确诊人数直线上升，不顾白宫命令撤兵", context: "大国鉴"},
  { title: "在抗疫＋抗议中，拜登和特朗普的选战打响了", context: "新华社新闻"},
  { title: "印度感染人数超过意大利，军队不顾疫情频繁调动，或成为病毒媒介", context: "虹摄库尔斯克"},

  { title: "张文宏分析世界疫情形势：东亚地区疫情控制最优，美国局势不明朗", context: "腾讯新闻"},
  { title: "印度感染人数超过意大利，军队不顾疫情频繁调动，或成为病毒媒介", context: "虹摄库尔斯克"},
  { title: "全球新冠死亡病例超40万例 纽约新冠病毒源头被发现 ", context: "光明网"},
  { title: "日本新冠死亡病例3个月来首次单日零新增", context: "中国青年网"},

  { title: "新闻分析:疫情之下,德甲版权能否卖出高价?", context: "新华社"},
  { title: "第二波疫情警钟已响,但一些国家却现神操作,巴西和印度风险大", context: "新浪"},
  { title: "美多州抗议活动加剧新冠肺炎疫情传播", context: "福州新闻网"},
  { title: "示威、疫情交织 八成受访美国人认为国家已失控", context: "福州新闻网"},
]; 
var data = todayData;
var aBtn = document.getElementsByClassName("page-item");
var nowIndex = 1;
var dataType=0;
function initData() 
{
  // 取前四条数据初始化页面
  var newsList = document.getElementById('newsList');
  var outStr = "";
  for (var i = 0; i < 4; i++) {
    if(i%2==0) data = forData;
    else data = localData;
    outStr += '<a href="../myhtml/news_detail.html"> <div class="list-item"><div class="list-item-title">'+'<h6>'+data[i].title+'</h6>'+'</div>'+ '<p class="list-item-context">'+'来源：'+data[i].context+'</p> </div></a>'
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
    if(dataType==0){
      if(i%2==0) data = forData;
      else data = localData;
    }
    //通过页数获取data中相应段的值
    outStr += '<a href="../myhtml/news_detail.html"> <div class="list-item"><div class="list-item-title">'+'<h6>'+data[i].title+'</h6>'+'</div>'+ '<p class="list-item-context">'+'来源：'+data[i].context+'</p> </div></a>'
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
    dataType=0;
  }
  if(barItem==bar[1]){//国内
    data = localData;
    dataType =1;
  }
  if(barItem==bar[2]){//国际
    data = forData;
    dataType = 2;
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

  