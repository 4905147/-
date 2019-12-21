//app.js
var plugin1 = requirePlugin("chatbot");
var plugin2 = requirePlugin("chatbot");
var plugin3 = requirePlugin("chatbot");
var plugin4 = requirePlugin("chatbot");
var plugin5 = requirePlugin("chatbot");
var plugin6 = requirePlugin("chatbot");
App({
  onLaunch: function () {
    plugin1.init({
      appid: "RcU3IOUmMjnv2bGmpkLIQntzACOr1Z", //小程序示例账户，仅供学习和参考
      openid: "",//用户的openid，非必填，建议传递该参数
      success: () => { }, //非必填
      fail: error => { } //非必填
    });
    plugin2.init({
      appid: "LqBR80CIiCtiB714dRaGKWk00MXRvJ", //小程序示例账户，仅供学习和参考
      openid: "",//用户的openid，非必填，建议传递该参数
      success: () => { }, //非必填
      fail: error => { } //非必填
    });
    plugin3.init({
      appid: "ZOo7mfv9JTsCwMCXchZ2jfnMcyH4or", //小程序示例账户，仅供学习和参考
      openid: "",//用户的openid，非必填，建议传递该参数
      success: () => { }, //非必填
      fail: error => { } //非必填
    });
    plugin4.init({
      appid: "LcNFpNs6K7TWfncVm2fSlKWqVdDVi9", //小程序示例账户，仅供学习和参考
      openid: "",//用户的openid，非必填，建议传递该参数
      success: () => { }, //非必填
      fail: error => { } //非必填
    });
    plugin5.init({
      appid: "0BpVsEXyuVS9BGhmMwAja5xy8ftS4N", //小程序示例账户，仅供学习和参考
      openid: "",//用户的openid，非必填，建议传递该参数
      success: () => { }, //非必填
      fail: error => { } //非必填
    });
    plugin6.init({
      appid: "7t8cZ7SLmaQXq3YRzmLTxR42mM7nu9", //小程序示例账户，仅供学习和参考
      openid: "",//用户的openid，非必填，建议传递该参数
      success: () => { }, //非必填
      fail: error => { } //非必填
    });
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  globalData: {
    userInfo: null
  }
})
