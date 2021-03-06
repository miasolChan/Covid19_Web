function InterP(){
    var str ="6月5日，北京市体育局体育产业发展处发布了《北京市体育局关于新型冠状病毒肺炎疫情三级应急响应期间体育健身场所开放和体育赛事活动组织工作的通知》|各区人民政府，北京经济技术开发区管理委员会：|为进一步做好本市新型冠状病毒肺炎疫情三级应急响应期间体育健身场所开放和体育赛事活动组织工作，推动体育行业全面复工复产，丰富和满足市民体育健身需求，经市新冠肺炎疫情防控领导小组同意，现将本市三级应急响应期间体育健身场所开放和体育赛事活动组织工作有关事项通知如下：| 一、稳妥推进体育健身场所开放|在严格落实本市疫情防控要求的前提下，依据《新型冠状病毒肺炎疫情三级应急响应期间北京市体育健身场所开放防控指引》（见附件1），全市各类体育健身场所恢复正常营运，各类体育运动项目正常开展。|二、逐步恢复赛事活动举办|在严格落实本市疫情防控要求的前提下，依据《新型冠状病毒肺炎疫情三级应急响应期间北京市举办体育赛事活动防控指引》（见附件2），在北京市行政区域内举办一定规模的市级体育赛事活动。国际、全国和跨区域的体育赛事活动暂不恢复举办。赛事主办方或承办方应将赛事活动相关信息通过北京市体育竞赛管理中心赛事管理平台（https://www.bjcac.org.cn/）等渠道进行公布。|三、有关要求|（一）落实防控责任，推进体育健身场所开放和赛事活动筹办工作。各地区、各单位应按照国务院联防联控机制《关于做好新冠肺炎疫情常态化防控工作的指导意见》和本市防控工作统一部署，严格落实“外防输入、内防反弹”的总要求，坚持预防为主，落实“四早”措施，突出重点环节，加强组织领导，坚持依法防控、科学防控、精准防控，严格落实常态化防控各项措施要求，积极稳妥地做好体育健身场所开放和体育赛事活动筹办工作，满足广大市民参与体育健身、增强体质的需求。|（二）加强监督检查，确保防控责任和措施落实到位。各地区、各单位应进一步细化防控责任，加大对体育健身场所和体育赛事活动的监督检查力度，督促指导体育健身场所运营主体和赛事活动主、承办方严格落实疫情防控主体责任，认真落实各项防控措施。对防控责任和措施落实不到位的，要责令限期整改。对防控责任不落实和整改措施不到位的，要依法依规进行处置，确保广大市民参与体育健身和赛事活动过程中的安全和健康。|（三）做好科学防控、精准防控和科学健身宣传指导。市区有关部门应从科学防疫、科学健身的角度，加大科学健身的宣传引导，提供内容丰富、科学的健身指导内容。通过多种途径，做好广大健身爱好者的健康提示工作，提醒健身群众自觉遵守公共场所防控要求，做好自我防护，开展强度适宜的体育锻炼，保护自身健康。|附件：1.新型冠状病毒肺炎疫情三级应急响应期间北京市体育健身场所开放防控指引|2.新型冠状病毒肺炎疫情三级应急响应期间北京市举办体育赛事活动防控指引|北京市体育局"
    var arr=str.split("|");
    var article = document.getElementById("content-article")
    var inStr =""
    for(var i=0;i<arr.length; i++){
        inStr += '<p class="one-p">'+arr[i]+'</p>'
    }
    article.innerHTML = inStr;
    console.log(article.innerHTML)
}