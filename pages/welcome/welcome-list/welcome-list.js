// pages/welcome/welcome-list/welcome-list.js
var welcomeData = require("../../data/welcome-data.js")
var welcomeDates = require("../../data/welcome-list-data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    welcomeListkey:[],
    // lists:[
    //   { 'num':'08:00-09:00'},
    //   { 'num': '08:00-09:00' },
    //   { 'num': '08:00-09:00' },
    //   { 'num': '08:00-09:00' },],
    // list:[
    //   { 'num': '08:00-09:00' },
    //   { 'num': '08:00-09:00' },
    //   { 'num': '08:00-09:00' },
    //   { 'num': '08:00-09:00' },
      
    // ],
    // idx: 0
  }, 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = options.welcomeid;
    var welcomeDatas = welcomeData.welcomeList[id];
    this.setData({
      welcomeListkey: welcomeDates.welcomeLists,
      welcome_key: welcomeDatas
    })
  },

  // goIndex(e) {
  //   let index = e.currentTarget.dataset.index;
  //   console.log('每个index',index)
  //   this.setData({
  //     idx: index
  //   })
  // },


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