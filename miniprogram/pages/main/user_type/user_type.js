// miniprogram/pages/main/user_type/user_type.js
var appInst = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    toast: false,
    hideToast: false,
    pl_index: 0,
    type_index: 0,
    pl: [
      "北京", "天津", "江苏", "浙江", "重庆", "上海", "广东", "山东", "湖南",
      "湖北", "陕西", "山西", "四川", "福建", "安徽", "辽宁", "江西", "海南", "宁夏", "吉林", "云南",
      "广西", "贵州", "青海", "甘肃", "河北", "河南", "新疆", "西藏", "黑龙江", "内蒙古"
    ],
    types: {
      "北京": [
        "不分文理",
        "文科",
        "理科"
      ],
      "天津": [
        "不分文理",
        "文科",
        "理科"
      ],
      "江苏": [
        "文科",
        "理科"
      ],
      "浙江": [
        "不分文理",
        "文科",
        "理科"
      ],
      "重庆": [
        "文科",
        "理科"
      ],
      "上海": [
        "不分文理（分数3+3科目）",
        "文科",
        "理科"
      ],
      "广东": [
        "文科",
        "理科"
      ],
      "山东": [
        "不分文理",
        "文科",
        "理科"
      ],
      "湖北": [
        "文科",
        "理科"
      ],
      "湖南": [
        "文科",
        "理科"
      ],
      "陕西": [
        "文科",
        "理科"
      ],
      "山西": [
        "文科",
        "理科"
      ],
      "四川": [
        "文科",
        "理科"
      ],
      "福建": [
        "文科",
        "理科"
      ],
      "安徽": [
        "文科",
        "理科"
      ],
      "辽宁": [
        "文科",
        "理科"
      ],
      "江西": [
        "文科",
        "理科"
      ],
      "海南": [
        "文科",
        "理科"
      ],
      "宁夏": [
        "文科",
        "理科"
      ],
      "吉林": [
        "文科",
        "理科"
      ],
      "云南": [
        "文科",
        "理科"
      ],
      "广西": [
        "文科",
        "理科"
      ],
      "贵州": [
        "文科",
        "理科"
      ],
      "青海": [
        "文科",
        "理科"
      ],
      "甘肃": [
        "文科",
        "理科"
      ],
      "河北": [
        "文科",
        "理科"
      ],
      "河南": [
        "文科",
        "理科"
      ],
      "新疆": [
        "文科",
        "理科"
      ],
      "西藏": [
        "文科",
        "理科"
      ],
      "黑龙江": [
        "文科",
        "理科"
      ],
      "内蒙古": [
        "文科",
        "理科"
      ]
    },
    type: [
      "不分文理",
      "文科",
      "理科"
    ]
  },
  /**
   * 省份选择
  */
  pickerPl: function (e) {
    var that = this
    this.setData({
      pl_index: e.detail.value,
      type:that.data.types[that.data.pl[e.detail.value]]
    })
  },
  /**
   * 选考科类选择
   */
  pickerType: function (e) {
    this.setData({
      type_index: e.detail.value
    })
  },
  userDataSub: function () {
    appInst.userData.pl = this.data.pl[this.data.pl_index]
    appInst.userData.type = this.data.type[this.data.type_index]
    console.log(appInst)
    wx.switchTab({
      url: '/pages/main/main',
      success: (result)=>{
        let page = getCurrentPages().pop();
        if(page == undefined || page == null){
          return
        }
        page.onLoad();
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  /**
   * 科类判断
  */
  flag: function(e){
    
  },
  /**
   * 警告弹窗
   */
  openToast: function () {
    this.setData({
      toast: true,
    });
    setTimeout(() => {
      this.setData({
        hideToast: true
      });
      setTimeout(() => {
        this.setData({
          toast: false,
          hideToast: false,
        });
      }, 150);
    }, 1500);
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