//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    welcome: "今日新闻",
    "username": "喻彦龙",
    img: "../../images/user.jpg"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../text/text'
    })
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
