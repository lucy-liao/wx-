// pages/list.js
import fetch from '../../utils/fetch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryId: 0,
    pageIndex: 0,
    pageSize: 20,
    seller: [],
    hasMore: true,
    inputShowed: false,
    inputVal: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.data.categoryId = options.catagoriesId
    wx.setNavigationBarTitle({
      title: `${options.catagoriesName}`
    })
    this.loadmore();
  },
  loadmore() {
      this.data.pageIndex++
      const url = `categories/${this.data.categoryId}/shops?_page=${this.data.pageIndex}&_limit=${this.data.pageSize}&q=${this.data.inputVal}`
      // console.log(url);
      // console.log(url)
      fetch(url).then(res => {
        // 停止下拉刷新
        wx.stopPullDownRefresh()
        // console.log(res.header)
        //拿到数据的总条数，在请求头中
        const total = parseInt(res.header["X-Total-Count"])

        // console.log(total)
          this.setData({
            seller: this.data.seller.concat(res.data),
            hasMore: this.data.pageIndex * this.data.pageSize < total
          })
        
      })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      this.setData({
        seller: [],
        pageIndex: 0,
        hasMore:true,
      })
      // this.loadMore();
      this.loadmore();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 发送请求增加数据
     this.loadmore();
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
 search: function (e) {
  //  console.log(e.detail.value)
    this.setData({
      pageIndex: 0,
      hasMore: true,
      seller: [],
      inputVal: e.detail.value
    });
    this.loadmore();
  }
})