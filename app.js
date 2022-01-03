// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    //腾讯地图插件调用
    const key = '3C4BZ-KLTLD-YLZ4O-PNOQ6-IVQ6F-I3F2D'; //使用在腾讯位置服务申请的key
    const referer = '贴贴的小店铺'; //调用插件的app的名称
    const location = '';
    const category = '生活服务,娱乐休闲';
 
    wx.navigateTo({
    url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
    });
  },
  globalData: {
    userInfo: null
  }
})
