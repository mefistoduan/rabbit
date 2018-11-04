// client/pages/goods_detail/goods_detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hideShopPopup: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        swiperCurrent: 0,
        buyNumber: 1,
        buyNumMax: 99,
        shopType: 'addShopCar',
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        goodsDetail:
            {
                basicInfo: {
                    name:'四川冷吃兔',
                    commission:200,
                    numberOrders:12,
                    numberGoodReputation:33,
                    introduce:'冷吃兔又名香辣兔、麻辣兔丁，是四川一种特色传统美食，在川菜分类上属于小河帮菜系，迄今已有百余年历史。四川的自贡、富顺、荣县一带是全国有名的养兔之乡，兔肉供应十分充足；该地区人们也十分喜爱吃兔肉，尤其是喜爱烹饪和品尝一种名为...',
                },
                properties:[
                    {name:'袋装500g',
                    id:1,
                    childsCurGoods:{name:'袋装500g',}
                    },
                    {name:'袋装1000g',
                        id:2,
                        childsCurGoods:{name:'袋装1000g',}
                    },
                ],
            },
        selectSizePrice:'199.00',
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
    toAddShopCar:function () {
        this.setData({
            hideShopPopup: !this.data.hideShopPopup,
            shopType:'addShopCar'
        })
    },
    tobuy:function () {
        this.setData({
            hideShopPopup: !this.data.hideShopPopup,
            shopType:'tobuy'
        })
    },
    closePopupTap:function () {
        this.setData({
            hideShopPopup: !this.data.hideShopPopup
        })
    },
    addShopCar:function () {
        console.log('调用购物接口')
    },
    numJianTap:function () {
        let that = this;
        let num = that.data.buyNumber;
        if(that.data.buyNumber > 1){
            that.setData({
                buyNumber: num - 1
            })
        }
    },
    numJiaTap:function () {
        let that = this;
        let num = that.data.buyNumber;
        if(this.data.buyNumMax > num) {
            that.setData({
                buyNumber: num + 1
            })
        }
    },
    labelItemTap:function () {
        let that = this;
        let canSubmit = false;
        let needSelectNum = that.data.goodsDetail.properties.length;
        if (needSelectNum == curSelectNum) {
            canSubmit = true;
        }
        // 计算当前价格
        if (canSubmit) {
            that.setData({
                selectSizePrice: 123,
                totalScoreToPay: 321,
            })
        }
    }
})