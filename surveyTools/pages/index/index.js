'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configJson = require('./config.json.js');

exports.default = Page({
  data: {
    '__code__': {
      readme: '',
    },
    menus: _configJson.menus,
    bannerList:[
    
    ],
    itemLists1: [
      {
        id: 1,
        imgSrc: '../../images/xy.png',
        desc: '坐标反算'
      },
      {
        id: 2,
        imgSrc: '../../images/jisuanqi.png',
        desc: '简单计算器'
      },
      {
        id: 3,
        imgSrc: '../../images/location.png',
        desc: '获取位置'
      },
      {
        id: 4,
        imgSrc: '../../images/jingwei.png',
        desc: '获取经纬度'
      },
      {
        id: 5,
        imgSrc: '../../images/gengduo1.png',
        desc: '更多'
      },
    ]
  },
  navToSel:function(e){
    var activeIndexSel = e.currentTarget.dataset.index || e.target.dataset.index;
    switch(activeIndexSel){
      case 1:
        wx.navigateTo({
          url: '../lib/disCalcFS/disCalcFS',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '../lib/calcMech/calcMech',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '../lib/location/location',
        })
        break;
      case 4:
        wx.navigateTo({
          url: '../lib/jingwei/jingwei',
        })
        break;
      case 5:
        wx.showToast({
          title: '正在开发不要着急',
          icon: 'none',
          duration: 1500
        })
        break;
      default:
        break;
    }
  }
});
