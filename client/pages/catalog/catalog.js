var app = getApp()
Page({
    data: {
        navLeftItems: [],
        navRightItems: [],
        curNav: 1,
        curIndex: 0,
        nodata:'暂无数据'
    },
    onLoad: function() {

        var that = this;

        // wx.request({
        //     url: '',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         that.setData({
        //             navLeftItems: res.data,
        //             navRightItems: res.data
        //         })
        //     }
        // })

        that.setData({
            navLeftItems: [
                {'title':'热门推荐',id:1 ,goods:{0:{'name':"手机",img:'a.png'},1:{'name':"充电宝",img:'a.png'}},},
                {'title':'手机数码',id:2,goods:{0:{'name':"牛奶",img:'a.png'},1:{'name':"洗衣液",img:'a.png'}},},
                {'title':'电脑办公',id:3,goods:{0:{'name':"U盘",img:'a.png'},1:{'name':"耳机",img:'a.png'}},},
                {'title':'家用电器',id:4,goods:{0:{'name':"内裤",img:'a.png'},1:{'name':"微波炉",img:'a.png'}},},
                ],
            navRightItems: [
                {'title':'热门推荐',id:1 ,goods:{0:{'name':"手机",img:'a.png'},1:{'name':"充电宝",img:'a.png'}},},
                {'title':'手机数码',id:2,goods:{0:{'name':"牛奶",img:'a.png'},1:{'name':"洗衣液",img:'a.png'}},},
                {'title':'电脑办公',id:3,goods:{0:{'name':"U盘",img:'a.png'},1:{'name':"耳机",img:'a.png'}},},
                {'title':'家用电器',id:4,goods:{0:{'name':"内裤",img:'a.png'},1:{'name':"微波炉",img:'a.png'}},},
            ]
        })

    },

    //事件处理函数
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
            index = parseInt(e.target.dataset.index);
        this.setData({
            curNav: id,
            curIndex: index
        })
    }

});