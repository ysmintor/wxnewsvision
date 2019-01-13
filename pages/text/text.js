var util = require('../../utils/util.js')
var root = getApp()
var app = getApp()

Page({
  data: {
    data: app.globalData.news.data,
    icontype: ["info_circle", "info"],
    modalHidden: true,
    modalContent: {}
  },
  onLoad: function () {
    var self = this, tmpObjData = app.globalData.news.data
    console.log("onLoad news")

    this.setData({
      data: {
        T1348647853363: tmpObjData.T1348647853363,
        fakeUrl: "http://mp.weixin.qq.com/s?_biz="
      }
    })

   
  },
  goto:function(e){
    wx.navigateTo({
      url: "http://3g.163.com/news/19/0117/20/E5OGUIPM000189FH.html"
    })
   
} 
})
