// pages/tools/tools.js
Page({
  data: {
    items:[
      {
        title: '计算三角形面积',
        bindtap:'triangleArea'
      },
      {
        title: '坐标反算',
        bindtap: 'disCalcFS'
      },
      {
        title: '度分秒 → 角度',
        bindtap: 'dmsToDeg'
      },
      {
        title: '角度 → 度分秒',
        bindtap: 'degToDms'
      },
      {
        title: '地图(获取当前位置)',
        bindtap: 'location'
      },
      {
        title: '计算器',
        bindtap: 'calcMech'
      },
    ]
  },
  triangleArea:function(e){
    wx.navigateTo({
      url:'../lib/triangleArea/triangleArea'
    })
  },
  disCalcFS:function(e){
    wx.navigateTo({
      url: '../lib/disCalcFS/disCalcFS'
    })
  },
  disInter:function(e){
    wx.navigateTo({
      url:'../lib/disInter/disInter'
    })
  },
  polygonArea:function(e){
    wx.navigateTo({
      url: '../lib/polygonArea/polygonArea'
    })
  },
  dmsToDeg:function(e){
    wx.navigateTo({
      url: '../lib/dmsToDeg/dmsToDeg'
    })
  },
  degToDms:function(e){
    wx.navigateTo({
      url: '../lib/degToDms/degToDms'
    })
  },
  angleToRad:function(e){
    wx.navigateTo({
      url: '../lib/angleToRad/angleToRad'
    })
  },
  radToAngle:function(e){
    wx.navigateTo({
      url: '../lib/radToAngle/radToAngle'
    })
  },
  cityToBuilt:function(e){
    wx.navigateTo({
      url: '../lib/cityToBuilt/cityToBuilt'
    })
  },
  location: function(e){
    wx.navigateTo({
      url: '../lib/location/location'
    })
  },
  calcMech:function(e){
    wx.navigateTo({
      url: '../lib/calcMech/calcMech'
    })
  }
})