
window.onload = function(){
    
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('myEcharts'));
    // 指定图表的配置项和数据
    option = {
      title: {
        text: '中国疫情：现存',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['中国疫情图']
      },
      visualMap: {
        type: 'piecewise',
        pieces: [
          { min: 1000, max: 1000000, label: '大于等于1000人', color: '#372a28' },
          { min: 500, max: 999, label: '确诊500-999人', color: '#4e160f' },
          { min: 100, max: 499, label: '确诊100-499人', color: '#974236' },
          { min: 10, max: 99, label: '确诊10-99人', color: '#ee7263' },
          { min: 1, max: 9, label: '确诊1-9人', color: '#f5bba7' },
        ],
        color: ['#E0022B', '#E09107', '#A3E00B']
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: false },
          dataView: { show: false, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: false }
        }
      },
      roamController: {
        show: true,
        left: 'right',
        mapTypeControl: {
          'china': true
        }
      },
      series: [
        {
          name: '确诊数',
          type: 'map',
          mapType: 'china',
          roam: false,
          showLegendSymbol: false,
          label: {
            show: true,
            color: 'rgb(70, 70, 70)'
          },
          data: [
            {
              name: '北京',
              value: 2
            }, {
              name: '天津',
              value: 1
            }, {
              name: '上海',
              value: 8
            }, {
              name: '重庆',
              value: 0
            }, {
              name: '河北',
              value: 0
            }, {
              name: '河南',
              value: 0
            }, {
              name: '云南',
              value: 0
            }, {
              name: '辽宁',
              value: 0
            }, {
              name: '黑龙江',
              value: 0
            }, {
              name: '湖南',
              value: 0
            }, {
              name: '安徽',
              value: 0
            }, {
              name: '山东',
              value: 5
            }, {
              name: '新疆',
              value: 0
            }, {
              name: '江苏',
              value: 0
            }, {
              name: '浙江',
              value: 0
            }, {
              name: '江西',
              value: 0
            }, {
              name: '湖北',
              value: 0
            }, {
              name: '广西',
              value: 0
            }, {
              name: '甘肃',
              value: 0
            }, {
              name: '山西',
              value: 0
            }, {
              name: '内蒙古',
              value: 21
            }, {
              name: '陕西',
              value: 1
            }, {
              name: '吉林',
              value: 4
            }, {
              name: '福建',
              value: 1
            }, {
              name: '贵州',
              value: 0
            }, {
              name: '广东',
              value: 7
            }, {
              name: '青海',
              value: 0
            }, {
              name: '西藏',
              value: 0
            }, {
              name: '四川',
              value: 17
            }, {
              name: '宁夏',
              value: 0
            }, {
              name: '海南',
              value: 1
            }, {
              name: '台湾',
              value: 0
            }, {
              name: '香港',
              value: 53
            }, {
              name: '澳门',
              value: 0
            }
          ]
        }
      ]
    };

    //使用指定的配置项和数据显示图表
    myChart.setOption(option);
}
