// pages/lib/dmsToDeg/dmsToDeg.js
//角度转换成十进制数字格式
var angleToNum = function (deg, min, sec) {
  var num = parseFloat(deg) + (parseFloat(min) / 60) + (parseFloat(sec) / 3600);
  return num;
}
Page({
  data: {
    d:'',
    m:'',
    s:'',
    result:0,
    value:''
  },
  inputD:function(e){
    var n = e.detail.value;
    this.setData({
      d:n
    })
  },
  inputM:function(e){
    var n = e.detail.value;
    this.setData({
      m:n
    })  
  },
  inputS:function(e){
    var n = e.detail.value;
    this.setData({
      s:n
    })
  },
  dmsToDeg:function(e){
    var d, m, s
    d = this.data.d;
    m = this.data.m;
    s = this.data.s;
    if(!d.length == 0 && !m.length == 0 && !s.length == 0){
      if(!isNaN(d) && !isNaN(m) && !isNaN(s)){
        if(m > 60 || s > 60){
          wx.showToast({
            title: '小伙子你很有想法^_^',
            icon: 'none',
            duration: 2000
          });
          var result = angleToNum(parseFloat(d), parseFloat(m), parseFloat(s)).toFixed(4);
          this.setData({
            result: result
          })
        }
        result = angleToNum(d, m, s).toFixed(4);
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
  }
})