// pages/about/about.js
Page({
  data: {
    activeIndex:0,
    detailFlag:true,
    oneWordIndex:0,
    num:0,
    lists:[
      {
        id:1,
        title:'一句话',
        label_title:'label_title1'
      },
      {
        id:2,
        title: '了解更多',
        label_title: 'label_title2'
      },
      {
        id:3,
        title: '联系我',
        label_title: 'label_title3'
      }
    ],
    oneWord:[
      {
        text: '我们的小程序非常有特色'
      } 
    ]
  },
  onReady:function(){
    //页面渲染完成
  },
  showDetail:function(e){
    var activeIndex = e.currentTarget.dataset.id || e.target.dataset.id;
    var detailFlag = this.data.detailFlag;
    var oneWordIndex = this.data.oneWordIndex;
    var num = this.data.num;
    this.setData({
      activeIndex: activeIndex, 
      detailFlag : false,
      oneWordIndex:0,
      num:0
    })
  },
  hideDetail:function(e){
    var detailFlag = this.data.detailFlag;
    var oneWordIndex = this.data.oneWordIndex;
    var num =1;
    this.setData({
      detailFlag: true,
      oneWordIndex: 0,
      num:0
    })
  },
  oneWordNext:function(e){
    var oneWord = this.data.oneWord;
    var oneWordIndex = e.currentTarget.dataset.index || e.target.dataset.index;
    var num =1;
    oneWordIndex = num;
    this.setData({
      num:num,
    
    })
  }
})