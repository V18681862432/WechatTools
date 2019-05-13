// pages/lib/degToDms/degToDms.js

//角度转度分秒
var degToAngle = function (num) {
  var deg = parseInt(num);
  var min = parseInt((num - deg) * 60);
  var sec = parseFloat(((num - deg) * 60 - min) * 60).toFixed(2);
  return deg + ' 度 ' + min + " 分 " + sec + ' 秒 ';
}
Page({
  data: {
    deg:'',
    value:'',
    result:0
  },
  inputDeg:function(e){
    var n = e.detail.value;
    this.setData({
      deg:n
    })
  },
  dmsToDeg:function(e){
    var deg = this.data.deg;
    if(!deg.length == 0){
      if(!isNaN(deg)){
        var result = degToAngle(deg);
        this.setData({
          result: result
        })
      }else{
        wx.showToast({
          title: '乖！请填数字',
          icon: 'none',
          duration: 1500
        })
      }
    }else{
      wx.showToast({
        title: '小马虎！请填完整',
        icon:'none',
        duration:1500
      })
    }
  },
  clear:function(e){
    this.setData({
      value:'',
      result:0
    })
  },
})