// client/pages/deliver/deliver.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trackingNumber:123456233,
    shipperName: 'shunfeng',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var orderId = e.id;
    this.data.orderId = orderId;
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
      wx.showModal({
        title: '错误',
        content: 'this is a message',
        showCancel: false
      })
    this.setData({
      orderDetail: 5,
      logisticsTraces: 4
    });
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

  }
})