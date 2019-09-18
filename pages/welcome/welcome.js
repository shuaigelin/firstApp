// pages/welcome/welcome.js
var welcomeData = require('../data/welcome-data.js')
Page({

  /**
   * 页面的初始数据
   */

  data: {
    welcome_key: [],
    appHeight: '',
    msgList: [
      { key: 1, name: '城市' },
      { key: 2, name: '主题' },
    ],
    meunShow: [
      { isShows: true },
      { isShows: true }
    ],
    areaLise: [
      { id: 0, name: '全部城市' },
      { id: 0, name: '深圳市' },
      { id: 1, name: '广州市' },
      { id: 2, name: '东莞市' },
      { id: 3, name: '珠海市' },
      { id: 4, name: '惠州市' },
      { id: 5, name: '佛山市' }
    ],
    rowLise: {
      row_SZ: { id: 0, name: ['南山区', '罗湖区', '宝安区', '坪山区', '龙岗区', '福田区', '盐田区', '光明区'] },
      row_GZ: { id: 1, name: ['天河区', '越秀区', '荔湾区', '海珠区', '白云区', '黄埔区', '番禺区', '花都区', '南沙区', '增城区', '从化区'] },
      row_DG: { id: 2, name: ['莞城区', '南城区', '万江区', '东城区'] },
      row_ZH: { id: 3, name: ['香洲区', '金湾区', '斗门区'] },
      row_HZ: { id: 4, name: ['惠城区', '惠阳区'] },
      row_FS: { id: 5, name: ['禅城区', '顺德区', '南海区', '三水区', '高明区'] }
    },
    rowShow: [
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true },
      { isShows: true }
    ],
    price: [
      { id: 0, name: '全部主题' },
      { id: 0, name: '健身主题' },
      { id: 1, name: '轰趴主题' },
      { id: 2, name: '亲子主题' },
      { id: 3, name: '舞蹈主题' },
      { id: 4, name: '音乐K歌主题' },
      { id: 5, name: '神秘主题' }
    ],

    // 区域右侧是否显示
    rigShow: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var res = wx.getSystemInfoSync();
    this.setData({
      appHeight: res.windowHeight
    });

    console.log(this.data.appHeight),
      this.setData({
        welcome_key: welcomeData.welcomeList
      });
  },
  
  menuClick: function (e) {
    // 获取通过wxml  data-hi="{{ idx }}" 传过来的索引
    var menuNum = e.currentTarget.dataset.hi;

    // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
    var menuSrc = "meunShow[" + menuNum + "].isShows";

    // 循环data中设置的meunShow
    for (var n = 0; n < this.data.meunShow.length; n++) {
      // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
      var menuSrcs = "meunShow[" + n + "].isShows";
      // 解决重复点击不能隐藏的问题
      if (n != menuNum) {
        // 初始化，每次点击时先全部隐藏，但是重复点击不会隐藏
        this.setData({
          [menuSrcs]: true
        });
      };
    };
  
    this.setData({
      [menuSrc]: !this.data.meunShow[e.currentTarget.dataset.hi].isShows
    });
  },
  onWelcomeTap: function (event) {
    var id = event.currentTarget.dataset.id;
    wx: wx.navigateTo({
      url: "welcome-list/welcome-list?welcomeid=" + id
    })
  },
  rowClick: function (e) {
    // 限制第一个 '不限' 不能点击
    if (e.currentTarget.dataset.hi != 0) {
      // 获取wxml  data-hi="{{ index }}" 传过来的索引
      var rowNum = e.currentTarget.dataset.hi;
      // 同筛选导航栏事件，因第一个为不限不可点击， 所以减一
      var rowSrc = "rowShow[" + (rowNum - 1) + "].isShows";
      // 隐藏所有的三级菜单
      for (var m = 0; m < this.data.rowShow.length; m++) {
        var rowSrcs = "rowShow[" + m + "].isShows";
        this.setData({
          [rowSrcs]: true
        });
      };
      // 同上
      this.setData({
        rigShow: false,
        [rowSrc]: !this.data.rowShow[e.currentTarget.dataset.hi].isShows
      });
    };
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