// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather:"天气信息",
    city:""
  },
  getWeather:function(){
    let city=this.data.city;
    const HOST = 'https://free-api.heweather.com/s6/';
    const KEY = 'fa66a4c393974639bcb6f2c06bf504b8';
    let url = `${HOST}weather/now?location=${city}&key=${KEY}`;
    let page = this;
    wx.request({
      url: url,
      success: function (res) {
        let weather = res.data.HeWeather6[0].now.cond_txt;
        page.setData({
          weather: weather
        });
      }
    });
  },
  getCity:function(event){
    // console.log(event.detail.value);
    let city=event.detail.value
    this.setData({
      city:city
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