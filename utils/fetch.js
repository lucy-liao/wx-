const BaseUrl ="https://locally.uieee.com/"
export default fetch = (url,data,header,method="GET") => {
  wx.showLoading({ title: '正在加载中...' })
   return new Promise((resolve,reject)=>{
      wx.request({
        url: `${BaseUrl}${url}`,
        data,
        header,
        method,
        success:function(res){
          resolve(res)
        },
        fail:function(err){
          reject(err)
        },
        complete:wx.hideLoading()
      })
   })
}