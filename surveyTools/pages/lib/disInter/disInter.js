// pages/lib/disInter/disInter.js
//计算两点距离
var calcDis = function (x1, y1, x2, y2) {
  var dxDouble = (x1 - x2) * (x1 - x2);
  var dyDouble = (y1 - y2) * (y1 - y2);
  return Math.sqrt(dxDouble + dyDouble);
};
Page({
  data: {
    value:'',
    xa: '',
    ya: '',
    xb: '',
    yb: '',
    ap: '',
    bp: '',
    xp: 0,
    yp: 0,
  },
  inputXa:function(e){
    var n = e.detail.value;
    this.setData({
      xa: n
    })
  },
  inputYa:function(e){
    var n = e.detail.value;
    this.setData({
      ya: n
    })
  },
  inputXb:function(e){
    var n = e.detail.value;
    this.setData({
      xb: n
    })
  },
  inputYb:function(e){
    var n = e.detail.value;
    this.setData({
      yb: n
    })
  },
  inputAP:function(e){
    var n = e.detail.value;
    this.setData({
      ap: n
    })
  },
  inputBP:function(e){
    var n = e.detail.value;
    this.setData({
      bp: n
    })
  },
  disInter:function(e){
    var xa = this.data.xa;
    var ya = this.data.ya;
    var xb = this.data.xb;
    var yb = this.data.yb;
    var ap = this.data.ap;
    var bp = this.data.bp;
    if(!xa.length == 0 && !ya.length == 0 && !xb.length == 0 && !yb.length ==0 && !ap.length == 0 && !bp.length == 0){
      if(!isNaN(xa) && !isNaN(ya) && !isNaN(xb) && !isNaN(yb) && !isNaN(ap) && !isNaN(bp)){
        var _xa, _ya, _xb, _yb, _ap, _bp, _dist, _a, _b, _h, xp, yp, _xp, _yp
        _xa = parseFloat(xa);
        _ya = parseFloat(ya);
        _xb = parseFloat(xb);
        _yb = parseFloat(yb);
        _ap = parseFloat(ap);
        _bp = parseFloat(bp);
        _dist = calcDis(_xa, _ya, _xb, _yb);
        _a = (_dist * _dist + _ap * _ap - _bp * _bp)/(2 * _dist);
        _b = (_dist * _dist + _bp * _bp - _ap * _ap)/(2 * _dist);
        _h = Math.sqrt(_ap * _ap - _a * _a);
        _xp = (_a * _xa + _b * _xb - _h * (_ya - _yb))/(_a + _b); //P点横坐标
        _yp = (_a * _ya + _b * _yb + _h * (_xa - _xb))/(_a + _b); //P点纵坐标
        xp = _xp.toFixed(5);
        yp = _yp.toFixed(5);
        this.setData({
          xp: xp,
          yp: yp
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
        icon: 'none',
        duration: 1500
      })
    }
  },
  clear:function(e){
    this.setData({
      value:'',
      xp: 0,
      yp: 0
    })
  }
})