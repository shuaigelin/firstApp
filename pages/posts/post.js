// pages/posts/post.js
var postData = require('../data/post-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // post_key: []
  },

  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function(options) {

    this.setData({
        post_key: postData.postList
      }),
      wx.setNavigationBarTitle({

        title: "活动列表",

      });
  },
  onPostTap: function(event) {
    var id = event.currentTarget.dataset.id;
    wx: wx.navigateTo({
      url: "post-list/post-list?postid=" + id
    })
  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})