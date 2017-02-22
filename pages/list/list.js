const app = getApp();
const util = require('../../utils/util.js')
Page({
    data : {
        list: []
    },
    onLoad(){
        // 0a04076c06ac47ea914dce8c66c21323  30786
        //api store ae003a5c670e784e8159c68ad1e7cd40
        // console.log(util.formatTime(Date.now()))
        const _this = this
        wx.request({
            // url :'http://apis.baidu.com/tngou/top/news?id=0&rows=20&apikey=ae003a5c670e784e8159c68ad1e7cd40',
            url :'http://api.juheapi.com/japi/toh',
            data:{
                key : 'a229de3a65c82d3bf387f29d5d761e6d',
                v : '1.0',
                month : '10',
                day : '1'
            },
            method : 'POST',
            header: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            success: function(res){
                // console.log(res.data.result)
                _this.setData({list:res.data.result})
            }
        })
    }
})