//var $ = require('../../utils/ajax.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stations: [],
    videoIntros: [],
    loadMore: 0,
    pageNum: 1,
    pageSize: 4,
    canLoadMore: '1',          // 是否可以加载更多视频数据
    scrollTop: 0,               // 搜索组件根据页面滚动高度设置透明度
    showSearch: true
  },
  /**
   * 加载视频数据
   */
  bindButtonTap: function (e){
    var that = this;
    var opentype=e.currentTarget.dataset.type;
    //opentype
 
    wx.chooseVideo({
      sourceType: ['"'+opentype+'"'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
        var tempFilePaths = res.tempFilePath
        wx.uploadFile({
          url: 'https://xcx.soyouqu.com/xcxxkeji/api/video/uploadvideo', //仅为示例，
          filePath: tempFilePaths,
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            console.log("视频上传成功");
            var data = res.data
            //do something
          }
        }) 
       }
      })
  }
  
})