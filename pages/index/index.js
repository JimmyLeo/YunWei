//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    marketingTitle: '微营销标题微营销标题微营销标题微营销标题微营销标题微营销标题？',
    marketingContent: '微营销内容(微营销内',
    fullTextTitle: '查看全部',
    activeArr: [{
      headUrl: '../../image/kfzx1_normal.png',
      name: '廖小井222',
      brief: '韩夏创始人、星辰国际团团长',
      content: '微动态内容，微动态内容微微动态内容微，营销内容微动态内容，微动态内容微动态内容。微动态内容，微动态内容微微动态内容微，营销内容微动态内容，微动态内容微动态内容。',
      imgUrl:  '../../image/kfzx1_normal.png',
      releaseTime: '3小时前',
      thumbsNumber: '4455',
      shareNumber: '1234'
    }, {
        headUrl: '../../image/kfzx1_normal.png',
        name: '廖小井',
        brief: '韩夏创始人、星辰国际团团长',
        content: '微动态内容，微动态内容微微动态内容微，营销内容微动态内容，微动态内容微动态内容。微动态内容，微动态内容微微动态内容微，营销内容微动态内容，微动态内容微动态内容。',
        imgUrl: '../../image/kfzx1_normal.png',
        releaseTime: '3小时前',
        thumbsNumber: '4455',
        shareNumber: '1234'
      }],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  fullText: function(ev) {
    if(this.data.fullTextTitle === '查看全部'){
      this.data.marketingContent = '微营销内容(微营销内容微营销内容微营销内容微营销内容微营销内容微营销内容微营销内容微营销内容微营销内容微营销内容微营销内容)'
      this.setData({
        marketingContent: this.data.marketingContent,
        fullTextTitle: '收起全部'
      })
    }else if(this.data.fullTextTitle === '收起全部'){
      this.data.marketingContent = '微营销内容(微营销内'
      this.setData({
        marketingContent: this.data.marketingContent,
        fullTextTitle: '查看全部'
      })
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 转发
  onShareAppMessage(res){
    return {
      title: '云微',
      imageUrl: '../../image/biaoqing.jpg'
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh(){
    wx.stopPullDownRefresh();
  }
})
