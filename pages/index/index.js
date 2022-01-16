const WXAPI = require('apifm-wxapi')
const CONFIG = require('../../config.js')
WXAPI.init('wimilee')
//获取应用实例
var app = getApp();
Page({
  data: {
    banners:[],
    swiperMaxNumber: 0,
    swiperCurrent: 0
  },
  onLoad:function(){
    const _this = this
      // 展示启动页
      WXAPI.banners({
        type: 'app' 
      }).then(function (res) {
        console.log(res)
          _this.setData({
            banners: res.data,
            swiperMaxNumber: res.data.length
          });
        }
      )
    },
  onShow:function(){
    
  },
  swiperchange: function (e) {
    console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  goMainPage: function (e) {
    
  },
  imageIndicator(){
    if (this.data.swiperCurrent + 1 != this.data.swiperMaxNumber) {
      wx.showToast({
        title: '左滑进入',
        icon: 'none',
      })
    }
  }
});