// client/pages/my_coupon/my_coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupons: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getMyCoupons();
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
  getMyCoupons: function () {
    var that = this;
    let coupons = [{ money: '1', moneyHreshold: '12', name: '生鲜专用券', dateEnd: '2018/12/12' }];
  
    this.setData({
      coupons: coupons
    })
    if (coupons.length < 1){
      wx.showModal({
        title: '提示',
        content: '立即前往领取优惠券',
        showCancel: true,
        cancelText: '再等等',
        cancelColor: '',
        confirmText: '确定',
        confirmColor: '',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
   
  },
  goBuy: function () {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  }
})