var appInstance = getApp();
Page({
  data:{
    cities: [{ name: 'taiyuan'},{ name: 'jincheng'},{ name : 'lingchuan'}],
  },
  onLoad:() => {

  },
  onShow:() => {

  },
  showLog: (msg) => {
        console.log(msg);
  }
})