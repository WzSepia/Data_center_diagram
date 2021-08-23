if (window.parent.themeDataMap) {
  themeDataMap = window.parent.themeDataMap;
} /*else {
  themeDataMap = JSON.parse($("#themeData").attr("themeData"));
}*/
//主题对象
var themeDataDTO = {

  //多指标属性标识
  isManyIndiProperty: function (key) {
    var manyIndiFlag = ["_Header_", "_content_", "_even_", "_odd_", "_border_", "_checkeven_", "_checkodd_", "_checkrow_", "_hoverrow_"];
    var flag = "";
    for (var i = 0; i < manyIndiFlag.length; i++) {
      if (key.indexOf(manyIndiFlag[i]) > -1) {
        flag = manyIndiFlag[i];
        break;
      }
    }
    return flag;
  },

  //提取主题代码(echarts)
  getThemeCode: function (key) {
    //多指标属性
    if (themeDataDTO.isManyIndiProperty(key).length > 0) {
      return key.substring(0, key.indexOf(themeDataDTO.isManyIndiProperty(key)));
    } else {
//			return key.substring(0, key.lastIndexOf("_"));
      return key.substring(0, key.indexOf("_"));
    }
  },

  //获取主题参数
  getThemeData: function (key) {
    var themeCode = themeDataDTO.getThemeCode(key);
    try {
      if (themeDataMap.hasOwnProperty(themeCode)) {
        var ztpz = themeDataMap[themeCode];
        var ztpzObj = JSON.parse(ztpz);//具体样式
        var ztpzCode = key.replace(themeCode, "");
        var ztpzValue = ztpzObj[ztpzCode];
        return ztpzValue;
      } else {
        return null;
      }
    } catch (e) {
      console.log("themeCode=====" + key + "，取值出错！");
    }
  },
  //获取主题参数
  _getThemeData(themeCode) {
    if (themeDataMap.hasOwnProperty(themeCode)) {
      const ztpzStyle = JSON.parse(themeDataMap[themeCode]);//具体样式
      return ztpzStyle;
    } else {
      return null;
    }
  }
};