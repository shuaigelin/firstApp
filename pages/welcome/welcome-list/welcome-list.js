// pages/welcome/welcome-list/welcome-list.js
var welcomeData = require("../../data/welcome-data.js")
var welcomeDates = require("../../data/welcome-list-data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    welcomeListkey: [],
    dateday: [{ datetoday: '今天' }, { datetoday: '明天' }, { datetoday: '六' }, { datetoday: '日' }, { datetoday: '一' }, { datetoday: '二' }, { datetoday: '三' }, { datetoday: '四' },],
    dateList: '今天',

    morninglists: ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00'],
    afterlists: ['14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00'],
    timeitem: '08:00-09:00',
  },
  dateTimeTap: function (event) {
    console.log(123)
    var dateid = event.currentTarget.dataset.dateid;
    console.log(dateid)
    var that = this;
    this.setData({
      dataList: dateid,
    })
  },
  goIndex: function (event) {
    var classify = event.currentTarget.dataset.classify;
    var that = this;
    this.setData({
      timeitem: classify,
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.welcomeid;
    var welcomeDatas = welcomeData.welcomeList[id];
    this.setData({
      welcomeListkey: welcomeDates.welcomeLists,
      welcome_key: welcomeDatas
    })
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

  }
})