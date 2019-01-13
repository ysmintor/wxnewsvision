//app.js
var news = require('./news.js')

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
 
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    news,
    userInfo: null,
    subDomain: "tz",
    version: "4.1.0",
    note: '增加小程序购物单支持',
    appid: "	wxbd2c2284aae814a5",
    shareProfile: '百款精品商品，总有一款适合您', 
    isConnected: true, // 网络是否连接
    _path: 'https://c.m.163.com/' 
  }
})