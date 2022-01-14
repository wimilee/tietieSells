// pages/index/index.js
const WXAPI = require("apifm-wxapi")
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    swiperMaxNumber:0,
    swiperCurrent:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const _this = this
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goMainPage: function (e) {
    const http = new XMLHttpRequest()
    const url = 'https://www.baidu.com'
    http.open('GET',url)
    http.send()
  },
  imageIndicator: function (e) {
    if(this.data.swiperCurrent+1!=this.data.swiperMaxNumber){
      wx.showToast({
        title: '右滑进入',
        icon:'none'
      })
    }
  },
  swiperChange: function (e) {
    console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  }
  
})