const pages = ["pages/index/index"];

const config = {
  title: "DJAMS",
  titleBarColor: "#fff",
  navigationBarTextStyle: "black",
};

module.exports.ali = {
  pages,
  window: {
    defaultTitle: config.title,
    titleBarColor: config.titleBarColor,
  },
};

module.exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: config.title,
    navigationBarBackgroundColor: config.titleBarColor,
    navigationBarTextStyle: config.navigationBarTextStyle,
  },
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: config.title,
    navigationBarBackgroundColor: config.titleBarColor,
  },
};

module.exports.web = {
  pages,
  title: config.title,
};
