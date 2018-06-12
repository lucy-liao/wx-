//index.js
//获取应用实例
import fetch from '../../utils/fetch.js'
const app = getApp()

Page({
  data: {
    sliderList: [],
    catagories:[],
  },
  onLoad: function () {
    this.getSlider();
    this.getCategroyData();
  },
  getSlider() {
    // var that=this;
    // wx.request({
    //   url: "https://locally.uieee.com/slides",
    //   success: function (res) {
    //     // console.log(res.data)
    //     // console.log(this)
    //     that.setData({
    //       sliderList: res.data
    //     })
    //     // console.log(that.data.sliderList)
    //   }
    // })
    fetch('slides').then(res=>{
        // console.log(res)
        // console.log(this)
        this.setData({
          sliderList: res.data
        })
    })
  },
  getCategroyData(){
    // var that = this;
    // wx.request({
    //   url:"https://locally.uieee.com/categories",
    //   success:res=>{
    //     that.setData({
    //       catagories: res.data
    //     })
    //     // console.log(that.data.catagories)
    //   }
    // })
    fetch('categories').then(res => {
      // console.log(res)
      // console.log(this)
      this.setData({
        catagories: res.data
      })
    })
  },
  toggle(e){
    // console.log(e)
    wx.navigateTo({
        
      url: `/pages/list/list?catagoriesId=${e.currentTarget.dataset.catagoryid}&catagoriesName=${e.currentTarget.dataset.catagoryname}`
    })
  }
})
