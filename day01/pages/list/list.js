// pages/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['美团', '饿了么'],
    currentTab: 0,
    headerData: "美团头部",
    mentor_name:"我是名字",
    message:[
      {
        mentor_image_uri:"../../image/icon_API_HL.png",
        mentor_name:"lhs",
        career: "程序员",
        company_name:"aft",
        address:"珠海",
        "mentor_skills":"微信小程序"
      },
      {
        mentor_image_uri: "../../image/icon_API_HL.png",
        mentor_name: "lwx",
        career: "美工",
        company_name: "aft",
        address: "珠海",
        "mentor_skills": "PS"
      }
    ]
  },

  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
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

  }
})
