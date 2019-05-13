// pages/lib/location/location.js
Page({
  data: {
  },
  //获取位置信息按钮事件处理函数
  locationTap: function (e) {
    var self = this;
    wx.getLocation({
      type: 'gcj02', //定位类型 wgs84, gcj02
      success: function (res) {
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 28,
          name: '当前位置',
          address: '位置地址',
          //成功打印信息
          success: function (res) {
          },
          //失败打印信息
          fail: function (err) {
          },
          //完成打印信息
          complete: function (info) {
          }
        })
      }
    })
  }
})