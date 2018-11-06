// client/pages/ address_add/address_add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      provinces:[],
      citys:[],
      districts:[],
      selProvince:'请选择',
      selCity:'请选择',
      selDistrict:'请选择',
      selProvinceIndex:0,
      selCityIndex:0,
      selDistrictIndex:0
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
  bindCancel:function () {
      wx.navigateBack({})
  },
    bindSave: function(e) {
        let that = this;
        let linkMan = e.detail.value.linkMan;
        let address = e.detail.value.address;
        let mobile = e.detail.value.mobile;
        let code = e.detail.value.code;

        if (linkMan == ""){
            wx.showModal({
                title: '提示',
                content: '请填写联系人姓名',
                showCancel:false
            })
            return
        }
        if (mobile == ""){
            wx.showModal({
                title: '提示',
                content: '请填写手机号码',
                showCancel:false
            })
            return
        }
        if (this.data.selProvince == "请选择"){
            wx.showModal({
                title: '提示',
                content: '请选择地区',
                showCancel:false
            })
            return
        }
        if (this.data.selCity == "请选择"){
            wx.showModal({
                title: '提示',
                content: '请选择地区',
                showCancel:false
            })
            return
        }
        let cityId = commonCityData.cityData[this.data.selProvinceIndex].cityList[this.data.selCityIndex].id;
        let districtId;
        if (this.data.selDistrict == "请选择" || !this.data.selDistrict){
            districtId = '';
        } else {
            districtId = commonCityData.cityData[this.data.selProvinceIndex].cityList[this.data.selCityIndex].districtList[this.data.selDistrictIndex].id;
        }
        if (address == ""){
            wx.showModal({
                title: '提示',
                content: '请填写详细地址',
                showCancel:false
            })
            return
        }
        if (code == ""){
            wx.showModal({
                title: '提示',
                content: '请填写邮编',
                showCancel:false
            })
            return
        }
        let apiAddoRuPDATE = "add";
        let apiAddid = that.data.id;
        if (apiAddid) {
            apiAddoRuPDATE = "update";
        } else {
            apiAddid = 0;
        }
    },

    bindPickerProvinceChange:function(event){
        var selIterm = commonCityData.cityData[event.detail.value];
        this.setData({
            selProvince:selIterm.name,
            selProvinceIndex:event.detail.value,
            selCity:'请选择',
            selCityIndex:0,
            selDistrict:'请选择',
            selDistrictIndex: 0
        })
        this.initCityData(2, selIterm)
    },
    bindPickerCityChange:function (event) {
        var selIterm = commonCityData.cityData[this.data.selProvinceIndex].cityList[event.detail.value];
        this.setData({
            selCity:selIterm.name,
            selCityIndex:event.detail.value,
            selDistrict: '请选择',
            selDistrictIndex: 0
        })
        this.initCityData(3, selIterm)
    },
    bindPickerChange:function (event) {
        var selIterm = commonCityData.cityData[this.data.selProvinceIndex].cityList[this.data.selCityIndex].districtList[event.detail.value];
        if (selIterm && selIterm.name && event.detail.value) {
            this.setData({
                selDistrict: selIterm.name,
                selDistrictIndex: event.detail.value
            })
        }
    },
    deleteAddress: function (e) {
        var that = this;
        var id = e.currentTarget.dataset.id;
        wx.showModal({
            title: '提示',
            content: '确定要删除该收货地址吗？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击了删除')
                    // wx.request({
                    //     url: 'https://api.it120.cc/' + app.globalData.subDomain + '/user/shipping-address/delete',
                    //     data: {
                    //         token: wx.getStorageSync('token'),
                    //         id: id
                    //     },
                    //     success: (res) => {
                    //         wx.navigateBack({})
                    //     }
                    // })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
})