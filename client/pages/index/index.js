//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app = getApp();
Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        array: [
            {message: 'foo'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            {message: 'bar'},
            ],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000
    },

    // 用户登录示例
    login: function() {
       
    },
    changeIndicatorDots: function(e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function(e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function(e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function(e) {
        this.setData({
            duration: e.detail.value
        })
    },
    onLoad: function (options){
        // 获取授权
        // wx.getSetting({
        //     success(res) {
        //         if (!res.authSetting['scope.record']) {
        //             wx.authorize({
        //                 scope: 'scope.record',
        //                 success() {
        //                     // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        //                     wx.startRecord()
        //                 }
        //             })
        //         }
        //     }
        // })

    },
  gocatalog:function(e){
    let thisCata = e.target.dataset.cata;
    app.globalData.thisCata = thisCata;
    wx.switchTab({
      url: '../catalog/catalog' //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
    })
  }
})
