// pages/detail/detail.js
import fetch from'../../utils/fetch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      detail:[],
      id:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log(options)
      this.setData({
        id: parseInt(options.id)
      })
      // const id=parseInt(options.id)
      // console.log(id)
      this.showData();
  },
  showData(){
    const url = `shops/${this.data.id}`
    // console.log(id)
    fetch(url).then(res=>{
      console.log(res);
        this.setData({
          detail:res.data
        })
    })
  },
  prewImg(e){
    // console.log(e)
    wx.previewImage({
      current: e.target.dataset.img, // 当前显示图片的http链接
      urls: this.data.detail.images // 需要预览的图片http链接列表
    })
  }
})