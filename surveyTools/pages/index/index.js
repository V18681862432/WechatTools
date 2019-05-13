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
        imgSrc: '../../images/item_06.png',
        desc: '坐标反算'
      },
      {
        id: 2,
        imgSrc: '../../images/item_07.png',
        desc: '简单计算器'
      },
      {
        id: 3,
        imgSrc: '../../images/item_08.png',
        desc: '获取位置'
      },
      {
        id: 4,
        imgSrc: '../../images/item_09.png',
        desc: '支导线坐标计算'
      },
      {
        id: 5,
        imgSrc: '../../images/item_10.png',
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
        wx.showToast({
          title: '做不出来，原谅我吧',
          icon:'none',
          duration:1500
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
