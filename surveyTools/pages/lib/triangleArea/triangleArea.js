// pages/lib/triangleArea/triangleArea.js
Page({
  data: {
    value:'',
    num1:'',  //a
    num2:'',  //b
    num3:'',  //c
    result: 0
  },
  inputA:function(e){
    var n = e.detail.value;
    this.setData({
      num1:n
    })
  },
  inputB:function(e){
    var n = e.detail.value;
    this.setData({
      num2:n
    })
  },
  inputC:function(e){
    var n = e.detail.value;
    this.setData({
      num3:n
    })
  },
  clear:function(e){
    this.setData({
      value:'',
      result:0
    })
  },
  calcArea:function(e){
    var t;
    var s;
    var a = this.data.num1;
    var b = this.data.num2;
    var c = this.data.num3;
    t = (a * 1 + b * 1 + c * 1)/2;
    if(!a.length==0 && !b.length==0 && !c.length==0){
      if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        if((a*1 + b*1) <= c*1 || (b*1 + c*1) <= a*1 || (a*1 + c*1) <= b*1){
          wx.showToast({
            title: '无法构成三角形！请检查边长条件',
            icon: 'none',
            duration: 2000
          })
        }else{
          s = Math.sqrt(t * (t - a*1) * (t - b*1) * (t - c*1)).toFixed(5);
          this.setData({
            result:s
          })
        }
      } else {
        wx.showToast({
          title: '乖！请填数字',
          icon: 'none',
          duration: 1500
        })
      }
    }else{
      wx.showToast({
        title: '小马虎！请填完整',
        icon: 'none',
        duration: 1500
      })
    }
  }
})