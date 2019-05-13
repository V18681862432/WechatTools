// pages/lib/disCalc/disCalc.js
//角度转换成十进制数字格式
var angleToNum = function(deg, min, sec){
  var num = parseFloat(deg) + (parseFloat(min)/60) + (parseFloat(sec)/3600);
  return num;
}
//角度转换成弧度
var angleToRad = function(deg, min, sec){
  var num = angleToNum(deg, min, sec);
  var result = num * Math.PI / 180;
  return result
}
//弧度转角度，并以度分秒格式输出
var radToAngle = function(rad){
  var num = rad *180 / (Math.PI);
  var deg = parseInt(num);
  var min = parseInt((num - deg) * 60);
  var sec = parseInt(((num - deg) * 60 - min) * 60);
  return deg + ' 度 ' + min + " 分 " + sec + ' 秒 ';
}
// 计算两点距离
var calcDis = function (x1, y1, x2, y2) {
  var dxDouble = (x1 - x2) * (x1 - x2);
  var dyDouble = (y1 - y2) * (y1 - y2);
  return Math.sqrt(dxDouble + dyDouble);
};
//计算角度
var calcAngle = function(x1, y1, x2, y2){
  var dx = x2 - x1;
  var dy = y2 - y1;
  var result;
  if(dx == 0 && dy == 0){
    wx.showToast({
      title: '两点重合，请重新输入',
      icon:'none',
      duration:1500
    })
  }else if(dx == 0 && dy > 0){  //在x轴上且dy大于0
    return '90 度 0 分 0 秒'
  }else if(dx == 0 && dy < 0){  //在x轴上且dy小于0
    return '270 度 0 分 0 秒'
  }else{
    var temp = Math.atan(Math.abs(dy/dx));
    if(dx > 0 && dy >=0){ //第一象限
      result = radToAngle(temp);
    }
    if(dx < 0 && dy >= 0){ //第二象限
      result = radToAngle(Math.PI - temp);
    }
    if(dx < 0 && dy < 0){  //第三象限
      result = radToAngle(Math.PI + temp);
    }
    if(dx > 0 && dy < 0 ){  //第四象限
      result = radToAngle(2 * Math.PI - temp)
    }
    return result;
  }
}
Page({
  data: {
    value:'',
    x1: '',
    y1: '',
    x2: '',
    y1: '',
    dis:0,
    angle:'0 度 0 分 0 秒'
  },
  inputX1:function(e){
    var n = e.detail.value;
    this.setData({
      x1:n
    })
  },
  inputY1:function(e){
    var n = e.detail.value;
    this.setData({
      y1:n
    })
  },
  inputX2:function(e){
    var n = e.detail.value;
    this.setData({
      x2:n
    })
  },
  inputY2:function(e){
    var n = e.detail.value;
    this.setData({
      y2:n
    })
  },
  clear:function(e){
    this.setData({
      value:'',
      dis:0,
      angle: '0 度 0 分 0 秒'
    })
  },
  disCalc:function(e){
    var x1 = this.data.x1;
    var y1 = this.data.y1;
    var x2 = this.data.x2;
    var y2 = this.data.y2;
    if(!x1.length==0 && !y1.length==0 && !x2.length==0 && !y2.length==0){
      if(!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)){
        //计算距离dis
        var dis = calcDis(parseFloat(x1), parseFloat(y1), parseFloat(x2), parseFloat(y2)).toFixed(5);
        //计算方位角
        var angle = calcAngle(parseFloat(x1), parseFloat(y1), parseFloat(x2), parseFloat(y2));
        this.setData({
          dis: dis,
          angle:angle
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
  }
})