// blue2.js 蓝2
var blue2_colorPalette=["#cee6cb","#84cbce","#4bafec","#3c86bc","#2d5c9a","#b5e3e6","#7fc8ea","#47bace","#00686b"];//图例颜色（不改）
var blue2_backgroundColor='#FCFCFC';//组件背景色（不改）
var blue2_fontColor='#0187CB';//单个控件文字颜色包括标题颜色和口径颜色
var blue2_gaugeAxisLineColor=["#cee6cb","#84cbce","#4bafec"];//设置仪表盘的表盘颜色--必须是三个值
var blue2_labelColor="#000000";//数值颜色（轨迹曲线图专用）
var blue2_oddLineColor="#aaaaaa";//强调曲线图线颜色(按图形的位置算)
var blue2_evenLineColor="#ff0000";//强调曲线图强调线颜色
var blue2_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var blue2_GWBTfontColor="#0187CB";//控件组标题文字颜色
var blue2_BTBNfontSize="15px";//控件组按钮字体大小
var blue2_BTfontColor="#0187CB";//控件组总口径文字颜色
var blue2_BTbackgroundColor="#FCFCFC";//标题背景颜色
var blue2_BTfontSize='22px';//标题文字大小
var blue2_BTfontFamily='微软雅黑';//标题文字字体
var blue2_BTborderColor="#7f7f7f";//标题边框颜色，多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var blue2_BTborderWidth="0";//标题边框宽度,设置宽度前需要设置边框样式，同上
var blue2_BTborderStyle="none";//标题边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var blue2_CBfontSize="15px";//控件组文字大小
var blue2_CBfontFamily="微软雅黑";//控件组文字字体
var blue2_BTBNbackgroundColor="#FCFCFC";//确定按钮背景颜色
var blue2_BTBNfontColor="#0187CB";//确定按钮文字颜色
var blue2_BTBNborderColor="#FCFCFC";//确定按钮边框
var blue2_tabUnColor="#E1A100";//未选中页签颜色
var blue2_tabColor="#BAD400";//选中页签颜色
var blue2_tabUnFontColor="#38BE00";//未选中页签标题颜色
var blue2_tabFontColor="#831CFF";//选中页签标题颜色
var blue2_GWbackgroundColor="#E13500";//控件组背景颜色
var blue2_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var blue2_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent";//下拉框下拉图片

//组件
var blue2_GWfontSize="18px";
var blue2_GWfontfamily="微软雅黑";
var blue2_GWborderColor="#1CFFB7";//边框同上
var blue2_GWborderWidth="0";//边框同上
var blue2_GWborderStyle="solid";//边框同上
var blue2_GWCBfontSize="12px";
var blue2_GWCBfontFamily="微软雅黑";
var blue2_GWBNbackgroundColor="#FCFCFC";
var blue2_GWBNfontColor="#0187CB";
var blue2_GWBNborderColor="#FCFCFC";//边框同上
var blue2_GWmargin="0px";//组件间距，多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左

//多指标配置
var blue2_Header_backgroundColor='#00686b';//table-表头颜色
var blue2_Header_fontColor='#424242';//table-表头字颜色
var blue2_Header_fontSize='16px';//table-表头字号
var blue2_Header_fontFamily='微软雅黑';//table-表头字体
var blue2_content_fontFamily='微软雅黑';//table-内容字体
var blue2_content_fontSize='14px';//table-内容字大小
var blue2_content_fontColor='#666666';//table-内容字颜色
var blue2_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var blue2_even_backgroundColor='#cee6cb';//table-奇数行颜色
var blue2_odd_backgroundColor='#84cbce';//table-偶数行颜色

var blue2_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

// brightdark 亮黑
var brightdark_colorPalette=["#36ffe1","#52E8FF","#15aee6","#89a2fc","#f7e439","#0366a8","#73a373","#73b9bc","#7289ab","#91ca8c"];
var brightdark_backgroundColor='rgba(11,33,58,1)';
var brightdark_fontColor='#F2FCFF';
var brightdark_gaugeAxisLineColor=["#36ffe1","#50c5ea","#15aee6"];//设置仪表盘的表盘颜色--必须是三个值
var brightdark_labelColor="#000000";
var brightdark_oddLineColor="#aaaaaa";//强调曲线图线颜色
var brightdark_evenLineColor="#ff0000";//强调曲线图强调线颜色
var brightdark_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var brightdark_GWBTfontColor="#F2FCFF";//控件组标题文字颜色
var brightdark_BTBNfontSize="15px";//控件组按钮字体大小
var brightdark_BTfontColor="#F2FCFF";
var brightdark_BTbackgroundColor="#0B213A";
var brightdark_BTfontSize='22px';
var brightdark_BTfontFamily='微软雅黑';
var brightdark_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var brightdark_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var brightdark_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var brightdark_CBfontSize="15px";
var brightdark_CBfontFamily="微软雅黑";
var brightdark_BTBNbackgroundColor="#0B213A";
var brightdark_BTBNfontColor="#EEEEEE";
var brightdark_BTBNborderColor="#0B213A";//边框同上
var brightdark_tabUnColor="#164173";//未选中页签颜色
var brightdark_tabColor="#0B213A";//选中页签颜色
var brightdark_tabUnFontColor="#85909D";//未选中页签标题颜色
var brightdark_tabFontColor="#FFFFFF";//选中页签标题颜色
var brightdark_GWbackgroundColor="#0B213A";//控件组背景颜色
var brightdark_tabPanelBackgroundColor="#123761";//页签背景颜色
var brightdark_selectBackground="url(../img/selectimg/select_white.png) no-repeat scroll right center transparent";//下拉框下拉图片

//组件
var brightdark_GWfontSize="18px";
var brightdark_GWfontfamily="微软雅黑";
var brightdark_GWborderColor="#636363";//边框同上
var brightdark_GWborderWidth="0";//边框同上
var brightdark_GWborderStyle="none";//边框同上
var brightdark_GWCBfontSize="15px";
var brightdark_GWCBfontFamily="微软雅黑";
var brightdark_GWBNbackgroundColor="#0B213A";
var brightdark_GWBNfontColor="#EEEEEE";
var brightdark_GWBNborderColor="#0B213A";//边框同上
var brightdark_GWmargin="0px";//组件间距同上

//多指标配置
var brightdark_Header_backgroundColor='#50C5EA';//table-表头颜色
var brightdark_Header_fontColor='#46494A';//table-表头字颜色
var brightdark_Header_fontSize='16px';//table-表头字号
var brightdark_Header_fontFamily='微软雅黑';//table-表头字体
var brightdark_content_fontFamily='微软雅黑';//table-内容字体
var brightdark_content_fontSize='14px';//table-内容字大小
var brightdark_content_fontColor='#F2FCFF';//table-内容字颜色
var brightdark_content_lineColor='#0B213A';//table-间隔线颜色（宽度是1个像素）
var brightdark_even_backgroundColor='#0B213A';//table-奇数行颜色
var brightdark_odd_backgroundColor='#156358';//table-偶数行颜色

var brightdark_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

// chalk 粉笔
var chalk_colorPalette=["#fc97af","#87f7cf","#f7f494","#72ccff","#f7c5a0","#d4a4eb","#d2f5a6","#76f2f2"];
var chalk_backgroundColor='#1B2D42';
var chalk_fontColor='#FFFFFF';
var chalk_gaugeAxisLineColor=["#fc97af","#87f7cf","#f7f494"];//设置仪表盘的表盘颜色--必须是三个值
var chalk_labelColor="#293441";
var chalk_oddLineColor="#aaaaaa";//强调曲线图线颜色
var chalk_evenLineColor="#ff0000";//强调曲线图强调线颜色
var chalk_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var chalk_GWBTfontColor="#FFFFFF";//控件组标题文字颜色
var chalk_BTBNfontSize="15px";//控件组按钮字体大小
var chalk_BTfontColor="#FFFFFF";
var chalk_BTbackgroundColor="#1B2D42";
var chalk_BTfontSize='22px';
var chalk_BTfontFamily='微软雅黑';
var chalk_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var chalk_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var chalk_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var chalk_CBfontSize="14px";
var chalk_CBfontFamily="微软雅黑";
var chalk_BTBNbackgroundColor="#1B2D42";
var chalk_BTBNfontColor="#FFFFFF";
var chalk_BTBNborderColor="#1B2D42";//边框同上
var chalk_tabUnColor="#FF4500";//未选中页签颜色
var chalk_tabColor="#A1A1A1";//选中页签颜色
var chalk_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var chalk_tabFontColor="#BF3EFF";//选中页签标题颜色
var chalk_GWbackgroundColor="#68228B";//控件组背景颜色
var chalk_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var chalk_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var chalk_GWfontSize="18px";
var chalk_GWfontfamily="微软雅黑";
var chalk_GWborderColor="#636363";//边框同上
var chalk_GWborderWidth="0";//边框同上
var chalk_GWborderStyle="none";//边框同上
var chalk_GWCBfontSize="14px";
var chalk_GWCBfontFamily="微软雅黑";
var chalk_GWBNbackgroundColor="#1B2D42";
var chalk_GWBNfontColor="#FFFFFF";
var chalk_GWBNborderColor="#1B2D42";//边框同上
var chalk_GWmargin="0px";//组件间距同上
//多指标配置
var chalk_Header_backgroundColor='#76f2f2';//table-表头颜色
var chalk_Header_fontColor='#f7f494';//table-表头字颜色
var chalk_Header_fontSize='16px';//table-表头字号
var chalk_Header_fontFamily='微软雅黑';//table-表头字体
var chalk_content_fontFamily='微软雅黑';//table-内容字体
var chalk_content_fontSize='14px';//table-内容字大小
var chalk_content_fontColor='#666666';//table-内容字颜色
var chalk_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var chalk_even_backgroundColor='#fc97af';//table-奇数行颜色
var chalk_odd_backgroundColor='#87f7cf';//table-偶数行颜色

var chalk_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）


// dark	黑暗
var dark_colorPalette=['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'];
var dark_backgroundColor='#1E1818';
var dark_fontColor='#ffffff';
var dark_gaugeAxisLineColor=["#dd6b66","#759aa0","#e69d87"];//设置仪表盘的表盘颜色--必须是三个值
var dark_labelColor="#000000";
var dark_oddLineColor="#aaaaaa";//强调曲线图线颜色
var dark_evenLineColor="#ff0000";//强调曲线图强调线颜色
var dark_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var dark_GWBTfontColor="#ffffff";//控件组标题文字颜色
var dark_BTBNfontSize="15px";//控件组按钮字体大小
var dark_BTfontColor="#ffffff";
var dark_BTbackgroundColor="#1E1818";
var dark_BTfontSize='22px';
var dark_BTfontFamily='微软雅黑';
var dark_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var dark_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var dark_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var dark_CBfontSize="15px";
var dark_CBfontFamily="微软雅黑";
var dark_BTBNbackgroundColor="#1E1818";
var dark_BTBNfontColor="#ffffff";
var dark_BTBNborderColor="#1E1818";//边框同上
var dark_tabUnColor="#4C4C4C";//未选中页签颜色
var dark_tabColor="#1E1818";//选中页签颜色
var dark_tabUnFontColor="#85909D";//未选中页签标题颜色
var dark_tabFontColor="#FFFFFF";//选中页签标题颜色
var dark_GWbackgroundColor="#1E1818";//控件组背景颜色
var dark_tabPanelBackgroundColor="#3B3B3B";//页签背景颜色
var dark_selectBackground="url(../img/selectimg/select_white.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var dark_GWfontSize="18px";
var dark_GWfontfamily="微软雅黑";
var dark_GWborderColor="#636363";//边框同上
var dark_GWborderWidth="0";//边框同上
var dark_GWborderStyle="none";//边框同上
var dark_GWCBfontSize="15px";
var dark_GWCBfontFamily="微软雅黑";
var dark_GWBNbackgroundColor="#1E1818";
var dark_GWBNfontColor="#ffffff";
var dark_GWBNborderColor="#1E1818";//边框同上
var dark_GWmargin="0px";//组件间距同上

//多指标配置
var dark_Header_backgroundColor='#f49f42';//table-表头颜色
var dark_Header_fontColor='#e69d87';//table-表头字颜色
var dark_Header_fontSize='16px';//table-表头字号
var dark_Header_fontFamily='微软雅黑';//table-表头字体
var dark_content_fontFamily='微软雅黑';//table-内容字体
var dark_content_fontSize='14px';//table-内容字大小
var dark_content_fontColor='#666666';//table-内容字颜色
var dark_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var dark_even_backgroundColor='#dd6b66';//table-奇数行颜色
var dark_odd_backgroundColor='#759aa0';//table-偶数行颜色

var dark_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）


//dark3purple 黑气泡
var dark3purple_colorPalette=["#cebaf7","#ffade2","#9ee8ff","#a998eb","#ff8cdb","#8fcfeb"];
var dark3purple_backgroundColor='rgba(14,60,83,1)';
var dark3purple_fontColor='#E3E9FF';
var dark3purple_gaugeAxisLineColor=["#cebaf7","#ffade2","#9ee8ff"];//设置仪表盘的表盘颜色--必须是三个值
var dark3purple_labelColor="#eeeeee";
var dark3purple_oddLineColor="#aaaaaa";//强调曲线图线颜色
var dark3purple_evenLineColor="#ff0000";//强调曲线图强调线颜色
var dark3purple_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var dark3purple_GWBTfontColor="#E3E9FF";//控件组标题文字颜色
var dark3purple_BTBNfontSize="15px";//控件组按钮字体大小
var dark3purple_BTfontColor="#E3E9FF";
var dark3purple_BTbackgroundColor="#0E3C53";
var dark3purple_BTfontSize='22px';
var dark3purple_BTfontFamily='微软雅黑';
var dark3purple_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var dark3purple_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var dark3purple_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var dark3purple_CBfontSize="14px";
var dark3purple_CBfontFamily="微软雅黑";
var dark3purple_BTBNbackgroundColor="#0E3C53";
var dark3purple_BTBNfontColor="#E3E9FF";
var dark3purple_BTBNborderColor="#0E3C53";//边框同上
var dark3purple_tabUnColor="#FF4500";//未选中页签颜色
var dark3purple_tabColor="#A1A1A1";//选中页签颜色
var dark3purple_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var dark3purple_tabFontColor="#BF3EFF";//选中页签标题颜色
var dark3purple_GWbackgroundColor="#68228B";//控件组背景颜色
var dark3purple_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var dark3purple_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var dark3purple_GWfontSize="18px";
var dark3purple_GWfontfamily="微软雅黑";
var dark3purple_GWborderColor="#636363";//边框同上
var dark3purple_GWborderWidth="0";//边框同上
var dark3purple_GWborderStyle="none";//边框同上
var dark3purple_GWCBfontSize="14px";
var dark3purple_GWCBfontFamily="微软雅黑";
var dark3purple_GWBNbackgroundColor="#0E3C53";
var dark3purple_GWBNfontColor="#E3E9FF";
var dark3purple_GWBNborderColor="#0E3C53";//边框同上
var dark3purple_GWmargin="0px";//组件间距同上

//多指标配置
var dark3purple_Header_backgroundColor='#8fcfeb';//table-表头颜色
var dark3purple_Header_fontColor='#9ee8ff';//table-表头字颜色
var dark3purple_Header_fontSize='16px';//table-表头字号
var dark3purple_Header_fontFamily='微软雅黑';//table-表头字体
var dark3purple_content_fontFamily='微软雅黑';//table-内容字体
var dark3purple_content_fontSize='14px';//table-内容字大小
var dark3purple_content_fontColor='#666666';//table-内容字颜色
var dark3purple_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var dark3purple_even_backgroundColor='#cebaf7';//table-奇数行颜色
var dark3purple_odd_backgroundColor='#ffade2';//table-偶数行颜色

var dark3purple_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//essos	厄斯索斯
var essos_colorPalette=["#893448","#d95850","#eb8146","#ffb248","#f2d643","#ebdba4"];
var essos_backgroundColor='#FDFCF6';
var essos_fontColor='#2E111B';
var essos_gaugeAxisLineColor=["#893448","#d95850","#eb8146"];//设置仪表盘的表盘颜色--必须是三个值
var essos_labelColor="#ffffff";
var essos_oddLineColor="#aaaaaa";//强调曲线图线颜色
var essos_evenLineColor="#ff0000";//强调曲线图强调线颜色
var essos_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var essos_GWBTfontColor="#2E111B";//控件组标题文字颜色
var essos_BTBNfontSize="15px";//控件组按钮字体大小
var essos_BTfontColor="#2E111B";
var essos_BTbackgroundColor="#FDFCF6";
var essos_BTfontSize='22px';
var essos_BTfontFamily='微软雅黑';
var essos_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var essos_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var essos_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var essos_CBfontSize="15px";
var essos_CBfontFamily="微软雅黑";
var essos_BTBNbackgroundColor="#FDFCF6";
var essos_BTBNfontColor="";
var essos_BTBNborderColor="#FDFCF6";//边框同上
var essos_tabUnColor="#FF4500";//未选中页签颜色
var essos_tabColor="#A1A1A1";//选中页签颜色
var essos_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var essos_tabFontColor="#BF3EFF";//选中页签标题颜色
var essos_GWbackgroundColor="#68228B";//控件组背景颜色
var essos_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var essos_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var essos_GWfontSize="18px";
var essos_GWfontfamily="微软雅黑";
var essos_GWborderColor="#636363";//边框同上
var essos_GWborderWidth="0";//边框同上
var essos_GWborderStyle="none";//边框同上
var essos_GWCBfontSize="15px";
var essos_GWCBfontFamily="微软雅黑";
var essos_GWBNbackgroundColor="#FDFCF6";
var essos_GWBNfontColor="";
var essos_GWBNborderColor="#FDFCF6";//边框同上
var essos_GWmargin="0px";//组件间距同上

//多指标配置
var essos_Header_backgroundColor='#BDB8AA';//table-表头颜色
var essos_Header_fontColor='#2E111B';//table-表头字颜色
var essos_Header_fontSize='16px';//table-表头字号
var essos_Header_fontFamily='微软雅黑';//table-表头字体
var essos_content_fontFamily='微软雅黑';//table-内容字体
var essos_content_fontSize='14px';//table-内容字大小
var essos_content_fontColor='#4A1C27';//table-内容字颜色
var essos_content_lineColor='#FDFCF6';//table-间隔线颜色（宽度是1个像素）
var essos_even_backgroundColor='#FDFCF6';//table-奇数行颜色
var essos_odd_backgroundColor='#EBE5D3';//table-偶数行颜色

var essos_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//银河 galaxy
var galaxy_colorPalette=["#dbaa9c","#bd6866","#952847","#7a133b","#520247","#c3d2e1","#7cdef5","#0298f5","#0065b0"];
var galaxy_backgroundColor='#17293e';
var galaxy_fontColor='#eeeeee';
var galaxy_gaugeAxisLineColor=["#dbaa9c","#bd6866","#952847"];//设置仪表盘的表盘颜色--必须是三个值
var galaxy_labelColor="#eee";
var galaxy_oddLineColor="#aaaaaa";//强调曲线图线颜色
var galaxy_evenLineColor="#ff0000";//强调曲线图强调线颜色
var galaxy_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var galaxy_GWBTfontColor="#2E111B";//控件组标题文字颜色
var galaxy_BTBNfontSize="15px";//控件组按钮字体大小
var galaxy_BTfontColor="#2E111B";
var galaxy_BTbackgroundColor="#FDFCF6";
var galaxy_BTfontSize='22px';
var galaxy_BTfontFamily='微软雅黑';
var galaxy_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var galaxy_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var galaxy_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var galaxy_CBfontSize="14px";
var galaxy_CBfontFamily="微软雅黑";
var galaxy_BTBNbackgroundColor="#FDFCF6";
var galaxy_BTBNfontColor="";
var galaxy_BTBNborderColor="#FDFCF6";//边框同上
var galaxy_tabUnColor="#FF4500";//未选中页签颜色
var galaxy_tabColor="#A1A1A1";//选中页签颜色
var galaxy_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var galaxy_tabFontColor="#BF3EFF";//选中页签标题颜色
var galaxy_GWbackgroundColor="#68228B";//控件组背景颜色
var galaxy_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var galaxy_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var galaxy_GWfontSize="18px";
var galaxy_GWfontfamily="微软雅黑";
var galaxy_GWborderColor="#636363";//边框同上
var galaxy_GWborderWidth="0";//边框同上
var galaxy_GWborderStyle="none";//边框同上
var galaxy_GWCBfontSize="14px";
var galaxy_GWCBfontFamily="微软雅黑";
var galaxy_GWBNbackgroundColor="#FDFCF6";
var galaxy_GWBNfontColor="";
var galaxy_GWBNborderColor="#FDFCF6";//边框同上
var galaxy_GWmargin="0px";//组件间距同上

//多指标配置
var galaxy_Header_backgroundColor='#ebdba4';//table-表头颜色
var galaxy_Header_fontColor='#eb8146';//table-表头字颜色
var galaxy_Header_fontSize='16px';//table-表头字号
var galaxy_Header_fontFamily='微软雅黑';//table-表头字体
var galaxy_content_fontFamily='微软雅黑';//table-内容字体
var galaxy_content_fontSize='14px';//table-内容字大小
var galaxy_content_fontColor='#666666';//table-内容字颜色
var galaxy_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var galaxy_even_backgroundColor='#893448';//table-奇数行颜色
var galaxy_odd_backgroundColor='#d95850';//table-偶数行颜色

var galaxy_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//halloween 万圣节
var halloween_colorPalette=["#ff715e","#ffaf51","#ffee51","#8c6ac4","#715c87"];
var halloween_backgroundColor='#F7F7F7';
var halloween_fontColor='#000000';
var halloween_gaugeAxisLineColor=["#ff715e","#ffaf51","#ffee51"];//设置仪表盘的表盘颜色--必须是三个值
var halloween_labelColor="#333333";
var halloween_oddLineColor="#aaaaaa";//强调曲线图线颜色
var halloween_evenLineColor="#ff0000";//强调曲线图强调线颜色
var halloween_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var halloween_GWBTfontColor="#d543ab";//控件组标题文字颜色
var halloween_BTBNfontSize="15px";//控件组按钮字体大小
var halloween_BTfontColor="#345abd";
var halloween_BTbackgroundColor="#F7F7F7";
var halloween_BTfontSize='22px';
var halloween_BTfontFamily='微软雅黑';
var halloween_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var halloween_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var halloween_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var halloween_CBfontSize="15px";
var halloween_CBfontFamily="微软雅黑";
var halloween_BTBNbackgroundColor="#ba345d";
var halloween_BTBNfontColor="";
var halloween_BTBNborderColor="#7A7A7A";//边框同上
var halloween_tabUnColor="#FF4500";//未选中页签颜色
var halloween_tabColor="#A1A1A1";//选中页签颜色
var halloween_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var halloween_tabFontColor="#BF3EFF";//选中页签标题颜色
var halloween_GWbackgroundColor="#68228B";//控件组背景颜色
var halloween_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var halloween_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var halloween_GWfontSize="18px";
var halloween_GWfontfamily="微软雅黑";
var halloween_GWborderColor="#636363";//边框同上
var halloween_GWborderWidth="0";//边框同上
var halloween_GWborderStyle="none";//边框同上
var halloween_GWCBfontSize="15px";
var halloween_GWCBfontFamily="微软雅黑";
var halloween_GWBNbackgroundColor="#d543ab";
var halloween_GWBNfontColor="";
var halloween_GWBNborderColor="#7A7A7A";//边框同上
var halloween_GWmargin="0px";//组件间距同上

//多指标配置
var halloween_Header_backgroundColor='#715c87';//table-表头颜色
var halloween_Header_fontColor='#ffee51';//table-表头字颜色
var halloween_Header_fontSize='16px';//table-表头字号
var halloween_Header_fontFamily='微软雅黑';//table-表头字体
var halloween_content_fontFamily='微软雅黑';//table-内容字体
var halloween_content_fontSize='14px';//table-内容字大小
var halloween_content_fontColor='#666666';//table-内容字颜色
var halloween_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var halloween_even_backgroundColor='#ff715e';//table-奇数行颜色
var halloween_odd_backgroundColor='#ffaf51';//table-偶数行颜色

var halloween_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//infographic	信息图
var infographic_colorPalette=['#C1232B','#27727B','#FCCE10','#E87C25','#B5C334','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD','#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'];
var infographic_backgroundColor='#F7F7F7';
var infographic_fontColor='#000000';
var infographic_gaugeAxisLineColor=['#B5C334','#27727B','#C1232B'];//设置仪表盘的表盘颜色--必须是三个值
var infographic_labelColor="#000000";
var infographic_oddLineColor="#aaaaaa";//强调曲线图线颜色
var infographic_evenLineColor="#ff0000";//强调曲线图强调线颜色
var infographic_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var infographic_GWBTfontColor="#d543ab";//控件组标题文字颜色
var infographic_BTBNfontSize="15px";//控件组按钮字体大小
var infographic_BTfontColor="#345abd";
var infographic_BTbackgroundColor="#F7F7F7";
var infographic_BTfontSize='22px';
var infographic_BTfontFamily='微软雅黑';
var infographic_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var infographic_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var infographic_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var infographic_CBfontSize="15px";
var infographic_CBfontFamily="微软雅黑";
var infographic_BTBNbackgroundColor="#ba345d";
var infographic_BTBNfontColor="";
var infographic_BTBNborderColor="#7A7A7A";//边框同上
var infographic_tabUnColor="#FF4500";//未选中页签颜色
var infographic_tabColor="#A1A1A1";//选中页签颜色
var infographic_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var infographic_tabFontColor="#BF3EFF";//选中页签标题颜色
var infographic_GWbackgroundColor="#68228B";//控件组背景颜色
var infographic_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var infographic_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var infographic_GWfontSize="18px";
var infographic_GWfontfamily="微软雅黑";
var infographic_GWborderColor="#636363";//边框同上
var infographic_GWborderWidth="0";//边框同上
var infographic_GWborderStyle="none";//边框同上
var infographic_GWCBfontSize="15px";
var infographic_GWCBfontFamily="微软雅黑";
var infographic_GWBNbackgroundColor="#d543ab";
var infographic_GWBNfontColor="";
var infographic_GWBNborderColor="#7A7A7A";//边框同上
var infographic_GWmargin="0px";//组件间距同上

//多指标配置
var infographic_Header_backgroundColor='#26C0C0';//table-表头颜色
var infographic_Header_fontColor='#FCCE10';//table-表头字颜色
var infographic_Header_fontSize='16px';//table-表头字号
var infographic_Header_fontFamily='微软雅黑';//table-表头字体
var infographic_content_fontFamily='微软雅黑';//table-内容字体
var infographic_content_fontSize='14px';//table-内容字大小
var infographic_content_fontColor='#666666';//table-内容字颜色
var infographic_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var infographic_even_backgroundColor='#C1232B';//table-奇数行颜色
var infographic_odd_backgroundColor='#27727B';//table-偶数行颜色

var infographic_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//lightgray	淡灰（默认）
var lightgray_colorPalette=["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"];
var lightgray_backgroundColor='#FCFCFC';
var lightgray_fontColor='#333333';
var lightgray_gaugeAxisLineColor=["#c23531","#2f4554","#61a0a8"];//设置仪表盘的表盘颜色--必须是三个值
var lightgray_labelColor="#eee";
var lightgray_oddLineColor="#aaaaaa";//强调曲线图线颜色
var lightgray_evenLineColor="#ff0000";//强调曲线图强调线颜色
var lightgray_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var lightgray_GWBTfontColor="#333333";//控件组标题文字颜色
var lightgray_BTBNfontSize="15px";//控件组按钮字体大小
var lightgray_BTfontColor="#333333";//控件组总口径文字颜色
var lightgray_BTbackgroundColor="#FCFCFC";//标题背景颜色
var lightgray_BTfontSize='22px';//标题文字大小
var lightgray_BTfontFamily='微软雅黑';//标题文字字体
var lightgray_BTborderColor="#FCFCFC";//标题边框颜色，多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var lightgray_BTborderWidth="0";//标题边框宽度,设置宽度前需要设置边框样式，同上
var lightgray_BTborderStyle="none";//标题边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var lightgray_CBfontSize="15px";//控件组文字大小
var lightgray_CBfontFamily="微软雅黑";//控件组文字字体
var lightgray_BTBNbackgroundColor="#FCFCFC";//确定按钮背景颜色
var lightgray_BTBNfontColor="#333333";//确定按钮文字颜色
var lightgray_BTBNborderColor="#FCFCFC";//确定按钮边框
var lightgray_tabUnColor="#FF4500";//未选中页签颜色
var lightgray_tabColor="#A1A1A1";//选中页签颜色
var lightgray_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var lightgray_tabFontColor="#BF3EFF";//选中页签标题颜色
var lightgray_GWbackgroundColor="#68228B";//控件组背景颜色
var lightgray_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var lightgray_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var lightgray_GWfontSize="18px";//组件文字大小
var lightgray_GWfontfamily="微软雅黑";//组件文字字体
var lightgray_GWborderColor="#636363";//组件边框颜色
var lightgray_GWborderWidth="0";//组件边框宽度同上
var lightgray_GWborderStyle="none";//组件边框样式
var lightgray_GWCBfontSize="15px";//组件口径文字大小
var lightgray_GWCBfontFamily="微软雅黑";//组件口径文字字体
var lightgray_GWBNbackgroundColor="#FCFCFC";//组件口径确定按钮背景颜色
var lightgray_GWBNfontColor="#333333";//组件口径确定按钮文字颜色
var lightgray_GWBNborderColor="#FCFCFC";//组件确定按钮边框颜色 同上
var lightgray_GWmargin="0px";//组件间距同上

//多指标配置
var lightgray_Header_backgroundColor='#61A0A8';//table-表头颜色
var lightgray_Header_fontColor='#333333';//table-表头字颜色
var lightgray_Header_fontSize='16px';//table-表头字号
var lightgray_Header_fontFamily='微软雅黑';//table-表头字体
var lightgray_content_fontFamily='微软雅黑';//table-内容字体
var lightgray_content_fontSize='14px';//table-内容字大小
var lightgray_content_fontColor='#333333';//table-内容字颜色
var lightgray_content_lineColor='#F7F7F7';//table-间隔线颜色（宽度是1个像素）
var lightgray_even_backgroundColor='#F7F7F7';//table-奇数行颜色
var lightgray_odd_backgroundColor='#BCCACC';//table-偶数行颜色

var lightgray_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//macarons	马卡龙
var macarons_colorPalette=['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa','#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050','#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'];
var macarons_backgroundColor='#F3F2F7';
var macarons_fontColor='#008ACD';
var macarons_gaugeAxisLineColor=["#2ec7c9","#5ab1ef","#d87a80"];//设置仪表盘的表盘颜色--必须是三个值
var macarons_labelColor="#000000";
var macarons_oddLineColor="#aaaaaa";//强调曲线图线颜色
var macarons_evenLineColor="#ff0000";//强调曲线图强调线颜色
var macarons_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var macarons_GWBTfontColor="#008ACD";//控件组标题文字颜色
var macarons_BTBNfontSize="15px";//控件组按钮字体大小
var macarons_BTfontColor="#008ACD";
var macarons_BTbackgroundColor="#F3F2F7";
var macarons_BTfontSize='22px';
var macarons_BTfontFamily='微软雅黑';
var macarons_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var macarons_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var macarons_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var macarons_CBfontSize="15px";
var macarons_CBfontFamily="微软雅黑";
var macarons_BTBNbackgroundColor="#F3F2F7";
var macarons_BTBNfontColor="#008ACD";
var macarons_BTBNborderColor="#F3F2F7";//边框同上
var macarons_tabUnColor="#FF4500";//未选中页签颜色
var macarons_tabColor="#A1A1A1";//选中页签颜色
var macarons_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var macarons_tabFontColor="#BF3EFF";//选中页签标题颜色
var macarons_GWbackgroundColor="#68228B";//控件组背景颜色
var macarons_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var macarons_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var macarons_GWfontSize="18px";
var macarons_GWfontfamily="微软雅黑";
var macarons_GWborderColor="#636363";//边框同上
var macarons_GWborderWidth="0";//边框同上
var macarons_GWborderStyle="none";//边框同上
var macarons_GWCBfontSize="15px";
var macarons_GWCBfontFamily="微软雅黑";
var macarons_GWBNbackgroundColor="#F3F2F7";
var macarons_GWBNfontColor="#008ACD";
var macarons_GWBNborderColor="#F3F2F7";//边框同上
var macarons_GWmargin="0px";//组件间距同上

//多指标配置
var macarons_Header_backgroundColor='#c14089';//table-表头颜色
var macarons_Header_fontColor='#5ab1ef';//table-表头字颜色
var macarons_Header_fontSize='16px';//table-表头字号
var macarons_Header_fontFamily='微软雅黑';//table-表头字体
var macarons_content_fontFamily='微软雅黑';//table-内容字体
var macarons_content_fontSize='14px';//table-内容字大小
var macarons_content_fontColor='#666666';//table-内容字颜色
var macarons_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var macarons_even_backgroundColor='#2ec7c9';//table-奇数行颜色
var macarons_odd_backgroundColor='#b6a2de';//table-偶数行颜色

var macarons_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//purple-passion 热情紫
var purple_passion_colorPalette=["#9b8bba","#e098c7","#8fd3e8","#71669e","#cc70af","#7cb4cc"];
var purple_passion_backgroundColor='#F7F7F7';
var purple_passion_fontColor='#000000';
var purple_passion_gaugeAxisLineColor=["#9b8bba","#e098c7","#8fd3e8"];//设置仪表盘的表盘颜色--必须是三个值
var purple_passion_labelColor="#eeeeee";
var purple_passion_oddLineColor="#aaaaaa";//强调曲线图线颜色
var purple_passion_evenLineColor="#ff0000";//强调曲线图强调线颜色
var purple_passion_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var purple_passion_GWBTfontColor="#d543ab";//控件组标题文字颜色
var purple_passion_BTBNfontSize="15px";//控件组按钮字体大小
var purple_passion_BTfontColor="#345abd";
var purple_passion_BTbackgroundColor="#F7F7F7";
var purple_passion_BTfontSize='22px';
var purple_passion_BTfontFamily='微软雅黑';
var purple_passion_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var purple_passion_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var purple_passion_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var purple_passion_CBfontSize="15px";
var purple_passion_CBfontFamily="微软雅黑";
var purple_passion_BTBNbackgroundColor="#ba345d";
var purple_passion_BTBNfontColor="";
var purple_passion_BTBNborderColor="#7A7A7A";//边框同上
var purple_passion_tabUnColor="#FF4500";//未选中页签颜色
var purple_passion_tabColor="#A1A1A1";//选中页签颜色
var purple_passion_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var purple_passion_tabFontColor="#BF3EFF";//选中页签标题颜色
var purple_passion_GWbackgroundColor="#68228B";//控件组背景颜色
var purple_passion_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var purple_passion_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var purple_passion_GWfontSize="18px";
var purple_passion_GWfontfamily="微软雅黑";
var purple_passion_GWborderColor="#636363";//边框同上
var purple_passion_GWborderWidth="0";//边框同上
var purple_passion_GWborderStyle="none";//边框同上
var purple_passion_GWCBfontSize="15px";
var purple_passion_GWCBfontFamily="微软雅黑";
var purple_passion_GWBNbackgroundColor="#d543ab";
var purple_passion_GWBNfontColor="";
var purple_passion_GWBNborderColor="#7A7A7A";//边框同上
var purple_passion_GWmargin="0px";//组件间距同上

//多指标配置
var purple_passion_Header_backgroundColor='#4b565b';//table-表头颜色
var purple_passion_Header_fontColor='#c4f294';//table-表头字颜色
var purple_passion_Header_fontSize='16px';//table-表头字号
var purple_passion_Header_fontFamily='微软雅黑';//table-表头字体
var purple_passion_content_fontFamily='微软雅黑';//table-内容字体
var purple_passion_content_fontSize='14px';//table-内容字大小
var purple_passion_content_fontColor='#666666';//table-内容字颜色
var purple_passion_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var purple_passion_even_backgroundColor='#9b8bba';//table-奇数行颜色
var purple_passion_odd_backgroundColor='#e098c7';//table-偶数行颜色

var purple_passion_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//质检1 quality1
var quality1_colorPalette=["#8bd1eb", "#6aadd8", "#086486", "#f9c3c9", "#f0e9a0", "#effcde", "#70d9ff", "#539fff", "#2d77d4", "#946a38", "#4e7848"];
var quality1_backgroundColor="#0b213a";
var quality1_fontColor="#eeeeee";
var quality1_gaugeAxisLineColor=["#8bd1eb","#6aadd8","#086486"];//设置仪表盘的表盘颜色--必须是三个值
var quality1_labelColor="#000000";
var quality1_oddLineColor="#aaaaaa";//强调曲线图线颜色
var quality1_evenLineColor="#ff0000";//强调曲线图强调线颜色
var quality1_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var quality1_GWBTfontColor="#eeeeee";//控件组标题文字颜色
var quality1_BTBNfontSize="15px";//控件组按钮字体大小
var quality1_BTfontColor="#eeeeee";
var quality1_BTbackgroundColor="#0B213A";
var quality1_BTfontSize='22px';
var quality1_BTfontFamily='微软雅黑';
var quality1_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var quality1_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var quality1_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var quality1_CBfontSize="15px";
var quality1_CBfontFamily="微软雅黑";
var quality1_BTBNbackgroundColor="#0B213A";
var quality1_BTBNfontColor="#eeeeee";
var quality1_BTBNborderColor="#0B213A";//边框同上
var quality1_tabUnColor="#164173";//未选中页签颜色
var quality1_tabColor="#0B213A";//选中页签颜色
var quality1_tabUnFontColor="#85909D";//未选中页签标题颜色
var quality1_tabFontColor="#FFFFFF";//选中页签标题颜色
var quality1_GWbackgroundColor="#0B213A";//控件组背景颜色
var quality1_tabPanelBackgroundColor="#123761";//页签背景颜色
var quality1_selectBackground="url(../img/selectimg/select_white.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var quality1_GWfontSize="18px";
var quality1_GWfontfamily="微软雅黑";
var quality1_GWborderColor="#636363";//边框同上
var quality1_GWborderWidth="0";//边框同上
var quality1_GWborderStyle="none";//边框同上
var quality1_GWCBfontSize="15px";
var quality1_GWCBfontFamily="微软雅黑";
var quality1_GWBNbackgroundColor="#0B213A";
var quality1_GWBNfontColor="#eeeeee";
var quality1_GWBNborderColor="#0B213A";//边框同上
var quality1_GWmargin="0px";//组件间距同上

//多指标配置
var quality1_Header_backgroundColor='#06475E';//table-表头颜色
var quality1_Header_fontColor='#EEEEEE';//table-表头字颜色
var quality1_Header_fontSize='16px';//table-表头字号
var quality1_Header_fontFamily='微软雅黑';//table-表头字体
var quality1_content_fontFamily='微软雅黑';//table-内容字体
var quality1_content_fontSize='14px';//table-内容字大小
var quality1_content_fontColor='#ffffff';//table-内容字颜色
var quality1_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var quality1_even_backgroundColor='#0B213A';//table-奇数行颜色
var quality1_odd_backgroundColor='#064E69';//table-偶数行颜色

var quality1_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//质检2 quality2
var quality2_colorPalette=["#effcde","#9cb890","#75986b","#4e7848","#946a38","#c2d584","#95c1c3","#72a0e3","#6d70e5"];
var quality2_backgroundColor='#010054';
var quality2_fontColor='#eeeeee';
var quality2_gaugeAxisLineColor=["#effcde","#9cb890","#75986b"];//设置仪表盘的表盘颜色--必须是三个值
var quality2_labelColor="#000000";
var quality2_oddLineColor="#aaaaaa";//强调曲线图线颜色
var quality2_evenLineColor="#ff0000";//强调曲线图强调线颜色
var quality2_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var quality2_GWBTfontColor="#eeeeee";//控件组标题文字颜色
var quality2_BTBNfontSize="15px";//控件组按钮字体大小
var quality2_BTfontColor="#eeeeee";
var quality2_BTbackgroundColor="#010054";
var quality2_BTfontSize='22px';
var quality2_BTfontFamily='微软雅黑';
var quality2_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var quality2_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var quality2_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var quality2_CBfontSize="15px";
var quality2_CBfontFamily="微软雅黑";
var quality2_BTBNbackgroundColor="#010054";
var quality2_BTBNfontColor="#eeeeee";
var quality2_BTBNborderColor="#010054";//边框同上
var quality2_tabUnColor="#FF4500";//未选中页签颜色
var quality2_tabColor="#A1A1A1";//选中页签颜色
var quality2_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var quality2_tabFontColor="#BF3EFF";//选中页签标题颜色
var quality2_GWbackgroundColor="#68228B";//控件组背景颜色
var quality2_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var quality2_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var quality2_GWfontSize="18px";
var quality2_GWfontfamily="微软雅黑";
var quality2_GWborderColor="#636363";//边框同上
var quality2_GWborderWidth="0";//边框同上
var quality2_GWborderStyle="none";//边框同上
var quality2_GWCBfontSize="15px";
var quality2_GWCBfontFamily="微软雅黑";
var quality2_GWBNbackgroundColor="#010054";//站位
var quality2_GWBNfontColor="#eeeeee";
var quality2_GWBNborderColor="#010054";//边框同上
var quality2_GWmargin="0px";//组件间距同上

//多指标配置
var quality2_Header_backgroundColor='#4b565b';//table-表头颜色
var quality2_Header_fontColor='#c4f294';//table-表头字颜色
var quality2_Header_fontSize='16px';//table-表头字号
var quality2_Header_fontFamily='微软雅黑';//table-表头字体
var quality2_content_fontFamily='微软雅黑';//table-内容字体
var quality2_content_fontSize='14px';//table-内容字大小
var quality2_content_fontColor='#666666';//table-内容字颜色
var quality2_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var quality2_even_backgroundColor='#9b8bba';//table-奇数行颜色
var quality2_odd_backgroundColor='#e098c7';//table-偶数行颜色

var quality2_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//rainbow 彩虹
var rainbow_colorPalette=["#ffc76c","#ffea71","#c4f294","#94edd4","#96e4ff","#5cbfea","#2a9ddd","#cc7e63","#724e58","#4b565b"];
var rainbow_backgroundColor='#fcfdf6';
var rainbow_fontColor='#2a9ddd';
var rainbow_gaugeAxisLineColor=["#ffc76c","#ffea71","#c4f294"];//设置仪表盘的表盘颜色--必须是三个值
var rainbow_labelColor="#2a2424";
var rainbow_oddLineColor="#aaaaaa";//强调曲线图线颜色
var rainbow_evenLineColor="#ff0000";//强调曲线图强调线颜色
var rainbow_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var rainbow_GWBTfontColor="#2a9ddd";//控件组标题文字颜色
var rainbow_BTBNfontSize="15px";//控件组按钮字体大小
var rainbow_BTfontColor="#2a9ddd";
var rainbow_BTbackgroundColor="#fcfdf6";
var rainbow_BTfontSize='22px';
var rainbow_BTfontFamily='微软雅黑';
var rainbow_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var rainbow_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var rainbow_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var rainbow_CBfontSize="15px";
var rainbow_CBfontFamily="微软雅黑";
var rainbow_BTBNbackgroundColor="#fcfdf6";
var rainbow_BTBNfontColor="#2a9ddd";
var rainbow_BTBNborderColor="#fcfdf6";//边框同上
var rainbow_tabUnColor="#FF4500";//未选中页签颜色
var rainbow_tabColor="#A1A1A1";//选中页签颜色
var rainbow_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var rainbow_tabFontColor="#BF3EFF";//选中页签标题颜色
var rainbow_GWbackgroundColor="#68228B";//控件组背景颜色
var rainbow_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var rainbow_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var rainbow_GWfontSize="18px";
var rainbow_GWfontfamily="微软雅黑";
var rainbow_GWborderColor="#636363";//边框同上
var rainbow_GWborderWidth="0";//边框同上
var rainbow_GWborderStyle="none";//边框同上
var rainbow_GWCBfontSize="15px";
var rainbow_GWCBfontFamily="微软雅黑";
var rainbow_GWBNbackgroundColor="#fcfdf6";
var rainbow_GWBNfontColor="#2a9ddd";
var rainbow_GWBNborderColor="#fcfdf6";//边框同上
var rainbow_GWmargin="0px";//组件间距同上

//多指标配置
var rainbow_Header_backgroundColor='#4b565b';//table-表头颜色
var rainbow_Header_fontColor='#c4f294';//table-表头字颜色
var rainbow_Header_fontSize='16px';//table-表头字号
var rainbow_Header_fontFamily='微软雅黑';//table-表头字体
var rainbow_content_fontFamily='微软雅黑';//table-内容字体
var rainbow_content_fontSize='14px';//table-内容字大小
var rainbow_content_fontColor='#666666';//table-内容字颜色
var rainbow_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var rainbow_even_backgroundColor='#ffc76c';//table-奇数行颜色
var rainbow_odd_backgroundColor='#ffea71';//table-偶数行颜色

var rainbow_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//roma	罗马
var roma_colorPalette=['#E01F54','#001852','#f5e8c8','#b8d2c7','#c6b38e','#a4d8c2','#f3d999','#d3758f','#dcc392','#2e4783','#82b6e9','#ff6347','#a092f1','#0a915d','#eaf889','#6699FF','#ff6666','#3cb371','#d5b158','#38b6b6'];
var roma_backgroundColor='#FFFFFA';
var roma_fontColor='#333333';
var roma_gaugeAxisLineColor=['E01F54','#b8d2c7','#001852'];//设置仪表盘的表盘颜色--必须是三个值
var roma_labelColor="#000000";
var roma_oddLineColor="#aaaaaa";//强调曲线图线颜色
var roma_evenLineColor="#ff0000";//强调曲线图强调线颜色
var roma_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var roma_GWBTfontColor="#333333";//控件组标题文字颜色
var roma_BTBNfontSize="15px";//控件组按钮字体大小
var roma_BTfontColor="#333333";
var roma_BTbackgroundColor="#FFFFFA";
var roma_BTfontSize='22px';
var roma_BTfontFamily='微软雅黑';
var roma_BTborderColor="#FFFFFA";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var roma_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var roma_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var roma_CBfontSize="15px";
var roma_CBfontFamily="微软雅黑";
var roma_BTBNbackgroundColor="#FFFFFA";
var roma_BTBNfontColor="#333333";
var roma_BTBNborderColor="#FFFFFA";//边框同上
var roma_tabUnColor="#FF4500";//未选中页签颜色
var roma_tabColor="#A1A1A1";//选中页签颜色
var roma_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var roma_tabFontColor="#BF3EFF";//选中页签标题颜色
var roma_GWbackgroundColor="#68228B";//控件组背景颜色
var roma_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var roma_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var roma_GWfontSize="18px";
var roma_GWfontfamily="微软雅黑";
var roma_GWborderColor="#636363";//边框同上
var roma_GWborderWidth="0";//边框同上
var roma_GWborderStyle="none";//边框同上
var roma_GWCBfontSize="15px";
var roma_GWCBfontFamily="微软雅黑";
var roma_GWBNbackgroundColor="#FFFFFA";
var roma_GWBNfontColor="#333333";
var roma_GWBNborderColor="#FFFFFA";//边框同上
var roma_GWmargin="0px";//组件间距同上

//多指标配置
var roma_Header_backgroundColor='#38b6b6';//table-表头颜色
var roma_Header_fontColor='#f5e8c8';//table-表头字颜色
var roma_Header_fontSize='16px';//table-表头字号
var roma_Header_fontFamily='微软雅黑';//table-表头字体
var roma_content_fontFamily='微软雅黑';//table-内容字体
var roma_content_fontSize='14px';//table-内容字大小
var roma_content_fontColor='#666666';//table-内容字颜色
var roma_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var roma_even_backgroundColor='#E01F54';//table-奇数行颜色
var roma_odd_backgroundColor='#001852';//table-偶数行颜色

var roma_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//shine	发光
var shine_colorPalette=['#c12e34','#e6b600','#0098d9','#2b821d','#005eaa','#339ca8','#cda819','#32a487'];
var shine_backgroundColor='#F7F7F7';
var shine_fontColor='#000000';
var shine_gaugeAxisLineColor=['2b821d','#005eaa','#c12e34'];//设置仪表盘的表盘颜色--必须是三个值
var shine_labelColor="#000000";
var shine_oddLineColor="#aaaaaa";//强调曲线图线颜色
var shine_evenLineColor="#ff0000";//强调曲线图强调线颜色
var shine_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var shine_GWBTfontColor="#d543ab";//控件组标题文字颜色
var shine_BTBNfontSize="15px";//控件组按钮字体大小
var shine_BTfontColor="#345abd";
var shine_BTbackgroundColor="#F7F7F7";
var shine_BTfontSize='22px';
var shine_BTfontFamily='微软雅黑';
var shine_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var shine_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var shine_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var shine_CBfontSize="15px";
var shine_CBfontFamily="微软雅黑";
var shine_BTBNbackgroundColor="#ba345d";
var shine_BTBNfontColor="";
var shine_BTBNborderColor="#7A7A7A";//边框同上
var shine_tabUnColor="#FF4500";//未选中页签颜色
var shine_tabColor="#A1A1A1";//选中页签颜色
var shine_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var shine_tabFontColor="#BF3EFF";//选中页签标题颜色
var shine_GWbackgroundColor="#68228B";//控件组背景颜色
var shine_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var shine_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var shine_GWfontSize="18px";
var shine_GWfontfamily="微软雅黑";
var shine_GWborderColor="#636363";//边框同上
var shine_GWborderWidth="0";//边框同上
var shine_GWborderStyle="none";//边框同上
var shine_GWCBfontSize="15px";
var shine_GWCBfontFamily="微软雅黑";
var shine_GWBNbackgroundColor="#d543ab";
var shine_GWBNfontColor="";
var shine_GWBNborderColor="#7A7A7A";//边框同上
var shine_GWmargin="0px";//组件间距同上

//多指标配置
var shine_Header_backgroundColor='#32a487';//table-表头颜色
var shine_Header_fontColor='#0098d9';//table-表头字颜色
var shine_Header_fontSize='16px';//table-表头字号
var shine_Header_fontFamily='微软雅黑';//table-表头字体
var shine_content_fontFamily='微软雅黑';//table-内容字体
var shine_content_fontSize='14px';//table-内容字大小
var shine_content_fontColor='#666666';//table-内容字颜色
var shine_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var shine_even_backgroundColor='#c12e34';//table-奇数行颜色
var shine_odd_backgroundColor='#e6b600';//table-偶数行颜色

var shine_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//vintage	古董
var vintage_colorPalette=["#d87c7c","#919e8b","#d7ab82","#6e7074","#61a0a8","#efa18d","#787464","#cc7e63","#724e58","#4b565b"];
var vintage_backgroundColor='rgba(254,248,239,1)';
var vintage_fontColor='#333333';
var vintage_gaugeAxisLineColor=["#d87c7c","#919e8b","#d7ab82"];//设置仪表盘的表盘颜色--必须是三个值
var vintage_labelColor="#eeeeee";
var vintage_oddLineColor="#aaaaaa";//强调曲线图线颜色
var vintage_evenLineColor="#ff0000";//强调曲线图强调线颜色
var vintage_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var vintage_GWBTfontColor="#333333";//控件组标题文字颜色
var vintage_BTBNfontSize="15px";//控件组按钮字体大小
var vintage_BTfontColor="#333333";
var vintage_BTbackgroundColor="#FEF8EF";
var vintage_BTfontSize='22px';
var vintage_BTfontFamily='微软雅黑';
var vintage_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var vintage_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var vintage_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var vintage_CBfontSize="14px";
var vintage_CBfontFamily="微软雅黑";
var vintage_BTBNbackgroundColor="#FEF8EF";
var vintage_BTBNfontColor="#333333";
var vintage_BTBNborderColor="#FEF8EF";//边框同上
var vintage_tabUnColor="#FF4500";//未选中页签颜色
var vintage_tabColor="#A1A1A1";//选中页签颜色
var vintage_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var vintage_tabFontColor="#BF3EFF";//选中页签标题颜色
var vintage_GWbackgroundColor="#68228B";//控件组背景颜色
var vintage_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var vintage_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var vintage_GWfontSize="18px";
var vintage_GWfontfamily="微软雅黑";
var vintage_GWborderColor="#636363";//边框同上
var vintage_GWborderWidth="0";//边框同上
var vintage_GWborderStyle="none";//边框同上
var vintage_GWCBfontSize="14px";
var vintage_GWCBfontFamily="微软雅黑";
var vintage_GWBNbackgroundColor="#FEF8EF";
var vintage_GWBNfontColor="#333333";
var vintage_GWBNborderColor="#FEF8EF";//边框同上
var vintage_GWmargin="0px";//组件间距同上

//多指标配置
var vintage_Header_backgroundColor='#919E8B';//table-表头颜色
var vintage_Header_fontColor='#262B2E';//table-表头字颜色
var vintage_Header_fontSize='16px';//table-表头字号
var vintage_Header_fontFamily='微软雅黑';//table-表头字体
var vintage_content_fontFamily='微软雅黑';//table-内容字体
var vintage_content_fontSize='14px';//table-内容字大小
var vintage_content_fontColor='#4B565B';//table-内容字颜色
var vintage_content_lineColor='#FEF8EF';//table-间隔线颜色（宽度是1个像素）
var vintage_even_backgroundColor='#FEF8EF';//table-奇数行颜色
var vintage_odd_backgroundColor='#D6CCC3';//table-偶数行颜色

var vintage_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//walden	瓦尔登
var walden_colorPalette=["#3fb1e3","#6be6c1","#626c91","#a0a7e6","#c4ebad","#96dee8"];
var walden_backgroundColor='#f8ffff';
var walden_fontColor='#666666';
var walden_gaugeAxisLineColor=["#3fb1e3","#6be6c1","#626c91"];//设置仪表盘的表盘颜色--必须是三个值
var walden_labelColor="#ff0000";
var walden_oddLineColor="#aaaaaa";//强调曲线图线颜色
var walden_evenLineColor="#ff0000";//强调曲线图强调线颜色
var walden_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var walden_GWBTfontColor="#666666";//控件组标题文字颜色
var walden_BTBNfontSize="15px";//控件组按钮字体大小
var walden_BTfontColor="#666666";
var walden_BTbackgroundColor="#f8ffff";
var walden_BTfontSize='22px';
var walden_BTfontFamily='微软雅黑';
var walden_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var walden_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var walden_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var walden_CBfontSize="15px";
var walden_CBfontFamily="微软雅黑";
var walden_BTBNbackgroundColor="#f8ffff";
var walden_BTBNfontColor="#666666";
var walden_BTBNborderColor="#f8ffff";//边框同上
var walden_tabUnColor="#FF4500";//未选中页签颜色
var walden_tabColor="#A1A1A1";//选中页签颜色
var walden_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var walden_tabFontColor="#BF3EFF";//选中页签标题颜色
var walden_GWbackgroundColor="#68228B";//控件组背景颜色
var walden_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var walden_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var walden_GWfontSize="18px";
var walden_GWfontfamily="微软雅黑";
var walden_GWborderColor="#636363";//边框同上
var walden_GWborderWidth="0";//边框同上
var walden_GWborderStyle="none";//边框同上
var walden_GWCBfontSize="15px";
var walden_GWCBfontFamily="微软雅黑";
var walden_GWBNbackgroundColor="#f8ffff";
var walden_GWBNfontColor="#666666";
var walden_GWBNborderColor="#f8ffff";//边框同上
var walden_GWmargin="0px";//组件间距同上

//多指标配置
var walden_Header_backgroundColor='#96dee8';//table-表头颜色
var walden_Header_fontColor='#424242';//table-表头字颜色
var walden_Header_fontSize='16px';//table-表头字号
var walden_Header_fontFamily='微软雅黑';//table-表头字体
var walden_content_fontFamily='微软雅黑';//table-内容字体
var walden_content_fontSize='14px';//table-内容字大小
var walden_content_fontColor='#666666';//table-内容字颜色
var walden_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var walden_even_backgroundColor='#F8FFFF';//table-奇数行颜色
var walden_odd_backgroundColor='#C3E4E8';//table-偶数行颜色

var walden_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//westeros	维斯特洛
var westeros_colorPalette=["#516b91","#59c4e6","#edafda","#93b7e3","#a5e7f0","#cbb0e3"];
var westeros_backgroundColor='#FFFFFF';
var westeros_fontColor='#516B91';
var westeros_gaugeAxisLineColor=["#516b91","#59c4e6","#edafda"];//设置仪表盘的表盘颜色--必须是三个值
var westeros_labelColor="#000";
var westeros_oddLineColor="#aaaaaa";//强调曲线图线颜色
var westeros_evenLineColor="#ff0000";//强调曲线图强调线颜色
var westeros_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var westeros_GWBTfontColor="#516B91";//控件组标题文字颜色
var westeros_BTBNfontSize="15px";//控件组按钮字体大小
var westeros_BTfontColor="#516B91";
var westeros_BTbackgroundColor="#FFFFFF";
var westeros_BTfontSize='22px';
var westeros_BTfontFamily='微软雅黑';
var westeros_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var westeros_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var westeros_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var westeros_CBfontSize="15px";
var westeros_CBfontFamily="微软雅黑";
var westeros_BTBNbackgroundColor="#FFFFFF";
var westeros_BTBNfontColor="#516B91";
var westeros_BTBNborderColor="#FFFFFF";//边框同上
var westeros_tabUnColor="#FF4500";//未选中页签颜色
var westeros_tabColor="#A1A1A1";//选中页签颜色
var westeros_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var westeros_tabFontColor="#BF3EFF";//选中页签标题颜色
var westeros_GWbackgroundColor="#68228B";//控件组背景颜色
var westeros_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var westeros_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var westeros_GWfontSize="18px";
var westeros_GWfontfamily="微软雅黑";
var westeros_GWborderColor="#636363";//边框同上
var westeros_GWborderWidth="0";//边框同上
var westeros_GWborderStyle="none";//边框同上
var westeros_GWCBfontSize="15px";
var westeros_GWCBfontFamily="微软雅黑";
var westeros_GWBNbackgroundColor="#FFFFFF";
var westeros_GWBNfontColor="#516B91";
var westeros_GWBNborderColor="#FFFFFF";//边框同上
var westeros_GWmargin="0px";//组件间距同上

//多指标配置
var westeros_Header_backgroundColor='#548CB1';//table-表头颜色
var westeros_Header_fontColor='#424242';//table-表头字颜色
var westeros_Header_fontSize='16px';//table-表头字号
var westeros_Header_fontFamily='微软雅黑';//table-表头字体
var westeros_content_fontFamily='微软雅黑';//table-内容字体
var westeros_content_fontSize='14px';//table-内容字大小
var westeros_content_fontColor='#666666';//table-内容字颜色
var westeros_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var westeros_even_backgroundColor='#FFFFFF';//table-奇数行颜色
var westeros_odd_backgroundColor='#A0E5EF';//table-偶数行颜色

var westeros_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//wheat 小麦
var wheat_colorPalette=["#a8d5e2","#007dc8","#006895","#ed7e00","#f7af5c","#fae3d3","#e3682b"];
var wheat_backgroundColor='rgba(0,23,44,1)';
var wheat_fontColor='#FFFAF2';
var wheat_gaugeAxisLineColor=["#fae3d3","#f7af5c","#ed7e00"];//设置仪表盘的表盘颜色--必须是三个值
var wheat_labelColor="#000000";
var wheat_oddLineColor="#aaaaaa";//强调曲线图线颜色
var wheat_evenLineColor="#ff0000";//强调曲线图强调线颜色
var wheat_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var wheat_GWBTfontColor="#FFFAF2";//控件组标题文字颜色
var wheat_BTBNfontSize="15px";//控件组按钮字体大小
var wheat_BTfontColor="#FFFAF2";
var wheat_BTbackgroundColor="#00172C";
var wheat_BTfontSize='22px';
var wheat_BTfontFamily='微软雅黑';
var wheat_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var wheat_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var wheat_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var wheat_CBfontSize="14px";
var wheat_CBfontFamily="微软雅黑";
var wheat_BTBNbackgroundColor="#00172C";
var wheat_BTBNfontColor="#FFFAF2";
var wheat_BTBNborderColor="#00172C";//边框同上
var wheat_tabUnColor="#00376B";//未选中页签颜色
var wheat_tabColor="#00172C";//选中页签颜色
var wheat_tabUnFontColor="#85909D";//未选中页签标题颜色
var wheat_tabFontColor="#FFFFFF";//选中页签标题颜色
var wheat_GWbackgroundColor="#00172C";//控件组背景颜色
var wheat_tabPanelBackgroundColor="#00284C";//页签背景颜色
var wheat_selectBackground="url(../img/selectimg/select_white.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var wheat_GWfontSize="18px";
var wheat_GWfontfamily="微软雅黑";
var wheat_GWborderColor="#636363";//边框同上
var wheat_GWborderWidth="0";//边框同上
var wheat_GWborderStyle="none";//边框同上
var wheat_GWCBfontSize="14px";
var wheat_GWCBfontFamily="微软雅黑";
var wheat_GWBNbackgroundColor="#00172C";
var wheat_GWBNfontColor="#FFFAF2";
var wheat_GWBNborderColor="#00172C";//边框同上
var wheat_GWmargin="0px";//组件间距同上

//多指标配置
var wheat_Header_backgroundColor='#e3682b';//table-表头颜色
var wheat_Header_fontColor='#ed7e00';//table-表头字颜色
var wheat_Header_fontSize='16px';//table-表头字号
var wheat_Header_fontFamily='微软雅黑';//table-表头字体
var wheat_content_fontFamily='微软雅黑';//table-内容字体
var wheat_content_fontSize='14px';//table-内容字大小
var wheat_content_fontColor='#666666';//table-内容字颜色
var wheat_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var wheat_even_backgroundColor='#fae3d3';//table-奇数行颜色
var wheat_odd_backgroundColor='#f7af5c';//table-偶数行颜色

var wheat_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//wonderland 仙境
var wonderland_colorPalette=["#4ea397","#22c3aa","#7bd9a5","#d0648a","#f58db2","#f2b3c9"];
var wonderland_backgroundColor='#F7F7F7';
var wonderland_fontColor='#000000';
var wonderland_gaugeAxisLineColor=["#4ea397","#22c3aa","#7bd9a5"];//设置仪表盘的表盘颜色--必须是三个值
var wonderland_labelColor="#ffffff";
var wonderland_oddLineColor="#aaaaaa";//强调曲线图线颜色
var wonderland_evenLineColor="#ff0000";//强调曲线图强调线颜色
var wonderland_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var wonderland_GWBTfontColor="#d543ab";//控件组标题文字颜色
var wonderland_BTBNfontSize="15px";//控件组按钮字体大小
var wonderland_BTfontColor="#345abd";
var wonderland_BTbackgroundColor="#F7F7F7";
var wonderland_BTfontSize='22px';
var wonderland_BTfontFamily='微软雅黑';
var wonderland_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var wonderland_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var wonderland_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var wonderland_CBfontSize="15px";
var wonderland_CBfontFamily="微软雅黑";
var wonderland_BTBNbackgroundColor="#ba345d";
var wonderland_BTBNfontColor="";
var wonderland_BTBNborderColor="#7A7A7A";//边框同上
var wonderland_tabUnColor="#FF4500";//未选中页签颜色
var wonderland_tabColor="#A1A1A1";//选中页签颜色
var wonderland_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var wonderland_tabFontColor="#BF3EFF";//选中页签标题颜色
var wonderland_GWbackgroundColor="#68228B";//控件组背景颜色
var wonderland_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var wonderland_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var wonderland_GWfontSize="18px";
var wonderland_GWfontfamily="微软雅黑";
var wonderland_GWborderColor="#636363";//边框同上
var wonderland_GWborderWidth="0";//边框同上
var wonderland_GWborderStyle="none";//边框同上
var wonderland_GWCBfontSize="15px";
var wonderland_GWCBfontFamily="微软雅黑";
var wonderland_GWBNbackgroundColor="#d543ab";
var wonderland_GWBNfontColor="";
var wonderland_GWBNborderColor="#7A7A7A";//边框同上
var wonderland_GWmargin="0px";//组件间距同上

//多指标配置
var wonderland_Header_backgroundColor='#f2b3c9';//table-表头颜色
var wonderland_Header_fontColor='#7bd9a5';//table-表头字颜色
var wonderland_Header_fontSize='16px';//table-表头字号
var wonderland_Header_fontFamily='微软雅黑';//table-表头字体
var wonderland_content_fontFamily='微软雅黑';//table-内容字体
var wonderland_content_fontSize='14px';//table-内容字大小
var wonderland_content_fontColor='#666666';//table-内容字颜色
var wonderland_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var wonderland_even_backgroundColor='#4ea397';//table-奇数行颜色
var wonderland_odd_backgroundColor='#22c3aa';//table-偶数行颜色

var wonderland_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//colorful 七彩
var colorful_colorPalette=["#fbb735","#e98931","#eb403b","#b32e37","#6c2a6a","#5c4399","#274389","#1f5ea8","#227fb0","#2ab0c5","#39c0b3"];
var colorful_backgroundColor='#FFFFFF';
var colorful_fontColor='#008ACD';
var colorful_gaugeAxisLineColor=["#fbb735","#e98931","#eb403b"];//设置仪表盘的表盘颜色--必须是三个值
var colorful_labelColor="#eeeeee";
var colorful_oddLineColor="#aaaaaa";//强调曲线图线颜色
var colorful_evenLineColor="#ff0000";//强调曲线图强调线颜色
var colorful_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var colorful_GWBTfontColor="#008ACD";
var colorful_BTBNfontSize="15px";
var colorful_BTfontColor="#008ACD";
var colorful_BTbackgroundColor="#FFFFFF";
var colorful_BTfontSize='22px';
var colorful_BTfontFamily='微软雅黑';
var colorful_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var colorful_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var colorful_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var colorful_CBfontSize="15px";
var colorful_CBfontFamily="黑体";
var colorful_BTBNbackgroundColor="#FFFFFF";
var colorful_BTBNfontColor="#008ACD";
var colorful_BTBNborderColor="#FFFFFF";//边框同上
var colorful_tabUnColor="#FF4500";//未选中页签颜色
var colorful_tabColor="#A1A1A1";//选中页签颜色
var colorful_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var colorful_tabFontColor="#BF3EFF";//选中页签标题颜色
var colorful_GWbackgroundColor="#68228B";//控件组背景颜色
var colorful_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var colorful_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var colorful_GWfontSize="18px";
var colorful_GWfontfamily="微软雅黑";
var colorful_GWborderColor="#636363";//边框同上
var colorful_GWborderWidth="0";//边框同上
var colorful_GWborderStyle="none";//边框同上
var colorful_GWCBfontSize="15px";
var colorful_GWCBfontFamily="微软雅黑"; 
var colorful_GWBNbackgroundColor="#FFFFFF";
var colorful_GWBNfontColor="#008ACD";//颜色
var colorful_GWBNborderColor="#FFFFFF";//边框同上
var colorful_GWmargin="0px";//组件间距同上

//多指标配置
var colorful_Header_backgroundColor='#39c0b3';//table-表头颜色
var colorful_Header_fontColor='#eb403b';//table-表头字颜色
var colorful_Header_fontSize='16px';//table-表头字号
var colorful_Header_fontFamily='微软雅黑';//table-表头字体
var colorful_content_fontFamily='微软雅黑';//table-内容字体
var colorful_content_fontSize='14px';//table-内容字大小
var colorful_content_fontColor='#666666';//table-内容字颜色
var colorful_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var colorful_even_backgroundColor='#fbb735';//table-奇数行颜色
var colorful_odd_backgroundColor='#e98931';//table-偶数行颜色

var colorful_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

/** 带间距的主题样式 */
// blue2.js 蓝2
var blue2_spacing_colorPalette=["#cee6cb","#84cbce","#4bafec","#3c86bc","#2d5c9a","#b5e3e6","#7fc8ea","#47bace","#00686b"];//图例颜色（不改）
var blue2_spacing_backgroundColor='#FCFCFC';//组件背景色（不改）
var blue2_spacing_fontColor='#0187CB';//单个控件文字颜色包括标题颜色和口径颜色
var blue2_spacing_gaugeAxisLineColor=["#cee6cb","#84cbce","#4bafec"];//设置仪表盘的表盘颜色--必须是三个值
var blue2_spacing_labelColor="#ffffff";
var blue2_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var blue2_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var blue2_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var blue2_spacing_GWBTfontColor="#0187CB";//控件组标题文字颜色
var blue2_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var blue2_spacing_BTfontColor="#0187CB";//控件组总口径文字颜色
var blue2_spacing_BTbackgroundColor="#F0F5F6";//标题背景颜色
var blue2_spacing_BTfontSize='22px';//标题文字大小
var blue2_spacing_BTfontFamily='微软雅黑';//标题文字字体
var blue2_spacing_BTborderColor="#7f7f7f";//标题边框颜色，多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var blue2_spacing_BTborderWidth="0";//标题边框宽度,设置宽度前需要设置边框样式，同上
var blue2_spacing_BTborderStyle="none";//标题边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var blue2_spacing_CBfontSize="15px";//控件组文字大小
var blue2_spacing_CBfontFamily="微软雅黑";//控件组文字字体
var blue2_spacing_BTBNbackgroundColor="#FCFCFC";//确定按钮背景颜色
var blue2_spacing_BTBNfontColor="#0187CB";//确定按钮文字颜色
var blue2_spacing_BTBNborderColor="#FCFCFC";//确定按钮边框
var blue2_spacing_tabUnColor="#FAFAFA";//未选中页签颜色
var blue2_spacing_tabColor="#F0F5F6";//选中页签颜色
var blue2_spacing_tabUnFontColor="#7f7f7f";//未选中页签标题颜色
var blue2_spacing_tabFontColor="#0187CB";//选中页签标题颜色
var blue2_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var blue2_spacing_tabPanelBackgroundColor="#E8ECED";//页签背景颜色
var blue2_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var blue2_spacing_GWBTfontColor="#0187CB";
var blue2_spacing_GWfontSize="18px";
var blue2_spacing_GWfontfamily="微软雅黑";
var blue2_spacing_GWborderColor="#F0F5F6";//边框同上
var blue2_spacing_GWborderWidth="7";//边框同上
var blue2_spacing_GWborderStyle="solid";//边框同上
var blue2_spacing_GWCBfontSize="12px";
var blue2_spacing_GWCBfontFamily="微软雅黑";
var blue2_spacing_GWBNbackgroundColor="#FCFCFC";
var blue2_spacing_GWBNfontColor="#0187CB";
var blue2_spacing_GWBNborderColor="#FCFCFC";//边框同上
var blue2_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var blue2_spacing_Header_backgroundColor='#00686b';//table-表头颜色
var blue2_spacing_Header_fontColor='#424242';//table-表头字颜色
var blue2_spacing_Header_fontSize='16px';//table-表头字号
var blue2_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var blue2_spacing_content_fontFamily='微软雅黑';//table-内容字体
var blue2_spacing_content_fontSize='14px';//table-内容字大小
var blue2_spacing_content_fontColor='#666666';//table-内容字颜色
var blue2_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var blue2_spacing_even_backgroundColor='#cee6cb';//table-奇数行颜色
var blue2_spacing_odd_backgroundColor='#84cbce';//table-偶数行颜色

var blue2_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

// brightdark 亮黑

var brightdark_spacing_colorPalette=["#36ffe1","#52E8FF","#15aee6","#89a2fc","#f7e439","#0366a8","#73a373","#73b9bc","#7289ab","#91ca8c"];
var brightdark_spacing_backgroundColor='rgba(11,33,58,1)';
var brightdark_spacing_fontColor='#F2FCFF';
var brightdark_spacing_gaugeAxisLineColor=["#36ffe1","#50c5ea","#15aee6"];//设置仪表盘的表盘颜色--必须是三个值
var brightdark_spacing_labelColor="#000000";
var brightdark_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var brightdark_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var brightdark_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var brightdark_spacing_GWBTfontColor="#F2FCFF";//控件组标题文字颜色
var brightdark_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var brightdark_spacing_BTfontColor="#F2FCFF";
var brightdark_spacing_BTbackgroundColor="#0F2D4F";
var brightdark_spacing_BTfontSize='22px';
var brightdark_spacing_BTfontFamily='微软雅黑';
var brightdark_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var brightdark_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var brightdark_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var brightdark_spacing_CBfontSize="15px";
var brightdark_spacing_CBfontFamily="微软雅黑";
var brightdark_spacing_BTBNbackgroundColor="#0B213A";
var brightdark_spacing_BTBNfontColor="#EEEEEE";
var brightdark_spacing_BTBNborderColor="#0B213A";//边框同上
var brightdark_spacing_tabUnColor="#FF4500";//未选中页签颜色
var brightdark_spacing_tabColor="#A1A1A1";//选中页签颜色
var brightdark_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var brightdark_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var brightdark_spacing_GWbackgroundColor="#0F2D4F";//控件组背景颜色
var brightdark_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var brightdark_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var brightdark_spacing_GWfontSize="18px";
var brightdark_spacing_GWfontfamily="微软雅黑";
var brightdark_spacing_GWborderColor="#0F2D4F";//边框同上
var brightdark_spacing_GWborderWidth="7";//边框同上
var brightdark_spacing_GWborderStyle="solid";//边框同上
var brightdark_spacing_GWCBfontSize="15px";
var brightdark_spacing_GWCBfontFamily="微软雅黑";
var brightdark_spacing_GWBNbackgroundColor="#0B213A";
var brightdark_spacing_GWBNfontColor="#EEEEEE";
var brightdark_spacing_GWBNborderColor="#0B213A";//边框同上
var brightdark_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var brightdark_spacing_Header_backgroundColor='#50C5EA';//table-表头颜色
var brightdark_spacing_Header_fontColor='#46494A';//table-表头字颜色
var brightdark_spacing_Header_fontSize='16px';//table-表头字号
var brightdark_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var brightdark_spacing_content_fontFamily='微软雅黑';//table-内容字体
var brightdark_spacing_content_fontSize='14px';//table-内容字大小
var brightdark_spacing_content_fontColor='#F2FCFF';//table-内容字颜色
var brightdark_spacing_content_lineColor='#0B213A';//table-间隔线颜色（宽度是1个像素）
var brightdark_spacing_even_backgroundColor='#0B213A';//table-奇数行颜色
var brightdark_spacing_odd_backgroundColor='#156358';//table-偶数行颜色

var brightdark_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

// chalk 粉笔
var chalk_spacing_colorPalette=["#fc97af","#87f7cf","#f7f494","#72ccff","#f7c5a0","#d4a4eb","#d2f5a6","#76f2f2"];
var chalk_spacing_backgroundColor='#1B2D42';
var chalk_spacing_fontColor='#FFFFFF';
var chalk_spacing_gaugeAxisLineColor=["#fc97af","#87f7cf","#f7f494"];//设置仪表盘的表盘颜色--必须是三个值
var chalk_spacing_labelColor="#293441";
var chalk_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var chalk_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var chalk_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var chalk_spacing_GWBTfontColor="#FFFFFF";//控件组标题文字颜色
var chalk_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var chalk_spacing_BTfontColor="#FFFFFF";
var chalk_spacing_BTbackgroundColor="#1B2D42";
var chalk_spacing_BTfontSize='22px';
var chalk_spacing_BTfontFamily='微软雅黑';
var chalk_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var chalk_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var chalk_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var chalk_spacing_CBfontSize="14px";
var chalk_spacing_CBfontFamily="微软雅黑";
var chalk_spacing_BTBNbackgroundColor="#1B2D42";
var chalk_spacing_BTBNfontColor="#FFFFFF";
var chalk_spacing_BTBNborderColor="#1B2D42";//边框同上
var chalk_spacing_tabUnColor="#FF4500";//未选中页签颜色
var chalk_spacing_tabColor="#A1A1A1";//选中页签颜色
var chalk_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var chalk_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var chalk_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var chalk_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var chalk_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var chalk_spacing_GWfontSize="18px";
var chalk_spacing_GWfontfamily="微软雅黑";
var chalk_spacing_GWborderColor="#F0F5F6";//边框同上
var chalk_spacing_GWborderWidth="7";//边框同上
var chalk_spacing_GWborderStyle="solid";//边框同上
var chalk_spacing_GWCBfontSize="14px";
var chalk_spacing_GWCBfontFamily="微软雅黑";
var chalk_spacing_GWBNbackgroundColor="#1B2D42";
var chalk_spacing_GWBNfontColor="#FFFFFF";
var chalk_spacing_GWBNborderColor="#1B2D42";//边框同上
var chalk_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var chalk_spacing_Header_backgroundColor='#76f2f2';//table-表头颜色
var chalk_spacing_Header_fontColor='#f7f494';//table-表头字颜色
var chalk_spacing_Header_fontSize='16px';//table-表头字号
var chalk_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var chalk_spacing_content_fontFamily='微软雅黑';//table-内容字体
var chalk_spacing_content_fontSize='14px';//table-内容字大小
var chalk_spacing_content_fontColor='#666666';//table-内容字颜色
var chalk_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var chalk_spacing_even_backgroundColor='#fc97af';//table-奇数行颜色
var chalk_spacing_odd_backgroundColor='#87f7cf';//table-偶数行颜色

var chalk_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

// dark	黑暗
var dark_spacing_colorPalette=['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'];
var dark_spacing_backgroundColor='#1E1818';
var dark_spacing_fontColor='#ffffff';
var dark_spacing_gaugeAxisLineColor=["#dd6b66","#759aa0","#e69d87"];//设置仪表盘的表盘颜色--必须是三个值
var dark_spacing_labelColor="#000000";
var dark_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var dark_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var dark_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var dark_spacing_GWBTfontColor="#ffffff";//控件组标题文字颜色
var dark_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var dark_spacing_BTfontColor="#ffffff";
var dark_spacing_BTbackgroundColor="#1E1818";
var dark_spacing_BTfontSize='22px';
var dark_spacing_BTfontFamily='微软雅黑';
var dark_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var dark_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var dark_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var dark_spacing_CBfontSize="15px";
var dark_spacing_CBfontFamily="微软雅黑";
var dark_spacing_BTBNbackgroundColor="#1E1818";
var dark_spacing_BTBNfontColor="#ffffff";
var dark_spacing_BTBNborderColor="#1E1818";//边框同上
var dark_spacing_tabUnColor="#FF4500";//未选中页签颜色
var dark_spacing_tabColor="#A1A1A1";//选中页签颜色
var dark_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var dark_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var dark_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var dark_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var dark_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var dark_spacing_GWfontSize="18px";
var dark_spacing_GWfontfamily="微软雅黑";
var dark_spacing_GWborderColor="#F0F5F6";//边框同上
var dark_spacing_GWborderWidth="7";//边框同上
var dark_spacing_GWborderStyle="solid";//边框同上
var dark_spacing_GWCBfontSize="15px";
var dark_spacing_GWCBfontFamily="微软雅黑";
var dark_spacing_GWBNbackgroundColor="#1E1818";
var dark_spacing_GWBNfontColor="#ffffff";
var dark_spacing_GWBNborderColor="#1E1818";//边框同上
var dark_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var dark_spacing_Header_backgroundColor='#f49f42';//table-表头颜色
var dark_spacing_Header_fontColor='#e69d87';//table-表头字颜色
var dark_spacing_Header_fontSize='16px';//table-表头字号
var dark_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var dark_spacing_content_fontFamily='微软雅黑';//table-内容字体
var dark_spacing_content_fontSize='14px';//table-内容字大小
var dark_spacing_content_fontColor='#666666';//table-内容字颜色
var dark_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var dark_spacing_even_backgroundColor='#dd6b66';//table-奇数行颜色
var dark_spacing_odd_backgroundColor='#759aa0';//table-偶数行颜色

var dark_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//dark3purple 黑气泡
var dark3purple_spacing_colorPalette=["#cebaf7","#ffade2","#9ee8ff","#a998eb","#ff8cdb","#8fcfeb"];
var dark3purple_spacing_backgroundColor='rgba(14,60,83,1)';
var dark3purple_spacing_fontColor='#E3E9FF';
var dark3purple_spacing_gaugeAxisLineColor=["#cebaf7","#ffade2","#9ee8ff"];//设置仪表盘的表盘颜色--必须是三个值
var dark3purple_spacing_labelColor="#eeeeee";
var dark3purple_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var dark3purple_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var dark3purple_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var dark3purple_spacing_GWBTfontColor="#E3E9FF";//控件组标题文字颜色
var dark3purple_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var dark3purple_spacing_BTfontColor="#E3E9FF";
var dark3purple_spacing_BTbackgroundColor="#0E3C53";
var dark3purple_spacing_BTfontSize='22px';
var dark3purple_spacing_BTfontFamily='微软雅黑';
var dark3purple_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var dark3purple_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var dark3purple_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var dark3purple_spacing_CBfontSize="14px";
var dark3purple_spacing_CBfontFamily="微软雅黑";
var dark3purple_spacing_BTBNbackgroundColor="#0E3C53";
var dark3purple_spacing_BTBNfontColor="#E3E9FF";
var dark3purple_spacing_BTBNborderColor="#0E3C53";//边框同上
var dark3purple_spacing_tabUnColor="#FF4500";//未选中页签颜色
var dark3purple_spacing_tabColor="#A1A1A1";//选中页签颜色
var dark3purple_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var dark3purple_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var dark3purple_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var dark3purple_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var dark3purple_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var dark3purple_spacing_GWfontSize="18px";
var dark3purple_spacing_GWfontfamily="微软雅黑";
var dark3purple_spacing_GWborderColor="#F0F5F6";//边框同上
var dark3purple_spacing_GWborderWidth="7";//边框同上
var dark3purple_spacing_GWborderStyle="solid";//边框同上
var dark3purple_spacing_GWCBfontSize="14px";
var dark3purple_spacing_GWCBfontFamily="微软雅黑";
var dark3purple_spacing_GWBNbackgroundColor="#0E3C53";
var dark3purple_spacing_GWBNfontColor="#E3E9FF";
var dark3purple_spacing_GWBNborderColor="#0E3C53";//边框同上
var dark3purple_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var dark3purple_spacing_Header_backgroundColor='#8fcfeb';//table-表头颜色
var dark3purple_spacing_Header_fontColor='#9ee8ff';//table-表头字颜色
var dark3purple_spacing_Header_fontSize='16px';//table-表头字号
var dark3purple_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var dark3purple_spacing_content_fontFamily='微软雅黑';//table-内容字体
var dark3purple_spacing_content_fontSize='14px';//table-内容字大小
var dark3purple_spacing_content_fontColor='#666666';//table-内容字颜色
var dark3purple_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var dark3purple_spacing_even_backgroundColor='#cebaf7';//table-奇数行颜色
var dark3purple_spacing_odd_backgroundColor='#ffade2';//table-偶数行颜色

var dark3purple_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//essos	厄斯索斯
var essos_spacing_colorPalette=["#893448","#d95850","#eb8146","#ffb248","#f2d643","#ebdba4"];
var essos_spacing_backgroundColor='#FDFCF6';
var essos_spacing_fontColor='#2E111B';
var essos_spacing_gaugeAxisLineColor=["#893448","#d95850","#eb8146"];//设置仪表盘的表盘颜色--必须是三个值
var essos_spacing_labelColor="#2E111B";
var essos_spacing_oddLineColor="#893448";//强调曲线图线颜色
var essos_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var essos_spacing_sectionsColor="#F7EDA7";//强调曲线图强调区颜色
//控件组
var essos_spacing_GWBTfontColor="#2E111B";//控件组标题文字颜色
var essos_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var essos_spacing_BTfontColor="#2E111B";
var essos_spacing_BTbackgroundColor="#F5F4ED";
var essos_spacing_BTfontSize='22px';
var essos_spacing_BTfontFamily='微软雅黑';
var essos_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var essos_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var essos_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var essos_spacing_CBfontSize="15px";
var essos_spacing_CBfontFamily="微软雅黑";
var essos_spacing_BTBNbackgroundColor="#FDFCF6";
var essos_spacing_BTBNfontColor="";
var essos_spacing_BTBNborderColor="#FDFCF6";//边框同上
var essos_spacing_tabUnColor="#FDFCF6";//未选中页签颜色
var essos_spacing_tabColor="#F5F4ED";//选中页签颜色
var essos_spacing_tabUnFontColor="#7f7f7f";//未选中页签标题颜色
var essos_spacing_tabFontColor="#2E111B";//选中页签标题颜色
var essos_spacing_GWbackgroundColor="#F5F4ED";//控件组背景颜色
var essos_spacing_tabPanelBackgroundColor="#E6E5DF";//页签背景颜色
var essos_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var essos_spacing_GWfontSize="18px";
var essos_spacing_GWfontfamily="微软雅黑";
var essos_spacing_GWborderColor="#F5F4ED";//边框同上
var essos_spacing_GWborderWidth="7";//边框同上
var essos_spacing_GWborderStyle="solid";//边框同上
var essos_spacing_GWCBfontSize="15px";
var essos_spacing_GWCBfontFamily="微软雅黑";
var essos_spacing_GWBNbackgroundColor="#FDFCF6";
var essos_spacing_GWBNfontColor="";
var essos_spacing_GWBNborderColor="#FDFCF6";//边框同上
var essos_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var essos_spacing_Header_backgroundColor='#BDB8AA';//table-表头颜色
var essos_spacing_Header_fontColor='#2E111B';//table-表头字颜色
var essos_spacing_Header_fontSize='16px';//table-表头字号
var essos_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var essos_spacing_content_fontFamily='微软雅黑';//table-内容字体
var essos_spacing_content_fontSize='14px';//table-内容字大小
var essos_spacing_content_fontColor='#4A1C27';//table-内容字颜色
var essos_spacing_content_lineColor='#FDFCF6';//table-间隔线颜色（宽度是1个像素）
var essos_spacing_even_backgroundColor='#FDFCF6';//table-奇数行颜色
var essos_spacing_odd_backgroundColor='#EBE5D3';//table-偶数行颜色

var essos_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//银河 galaxy
var galaxy_spacing_colorPalette=["#dbaa9c","#bd6866","#952847","#7a133b","#520247","#c3d2e1","#7cdef5","#0298f5","#0065b0"];
var galaxy_spacing_backgroundColor='#17293e';
var galaxy_spacing_fontColor='#eeeeee';
var galaxy_spacing_gaugeAxisLineColor=["#dbaa9c","#bd6866","#952847"];//设置仪表盘的表盘颜色--必须是三个值
var galaxy_spacing_labelColor="#eee";
var galaxy_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var galaxy_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var galaxy_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var galaxy_spacing_GWBTfontColor="#2E111B";//控件组标题文字颜色
var galaxy_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var galaxy_spacing_BTfontColor="#2E111B";
var galaxy_spacing_BTbackgroundColor="#FDFCF6";
var galaxy_spacing_BTfontSize='22px';
var galaxy_spacing_BTfontFamily='微软雅黑';
var galaxy_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var galaxy_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var galaxy_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var galaxy_spacing_CBfontSize="14px";
var galaxy_spacing_CBfontFamily="微软雅黑";
var galaxy_spacing_BTBNbackgroundColor="#FDFCF6";
var galaxy_spacing_BTBNfontColor="";
var galaxy_spacing_BTBNborderColor="#FDFCF6";//边框同上
var galaxy_spacing_tabUnColor="#FF4500";//未选中页签颜色
var galaxy_spacing_tabColor="#A1A1A1";//选中页签颜色
var galaxy_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var galaxy_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var galaxy_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var galaxy_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var galaxy_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var galaxy_spacing_GWfontSize="18px";
var galaxy_spacing_GWfontfamily="微软雅黑";
var galaxy_spacing_GWborderColor="#F0F5F6";//边框同上
var galaxy_spacing_GWborderWidth="7";//边框同上
var galaxy_spacing_GWborderStyle="solid";//边框同上
var galaxy_spacing_GWCBfontSize="14px";
var galaxy_spacing_GWCBfontFamily="微软雅黑";
var galaxy_spacing_GWBNbackgroundColor="#FDFCF6";
var galaxy_spacing_GWBNfontColor="";
var galaxy_spacing_GWBNborderColor="#FDFCF6";//边框同上
var galaxy_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var galaxy_spacing_Header_backgroundColor='#ebdba4';//table-表头颜色
var galaxy_spacing_Header_fontColor='#eb8146';//table-表头字颜色
var galaxy_spacing_Header_fontSize='16px';//table-表头字号
var galaxy_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var galaxy_spacing_content_fontFamily='微软雅黑';//table-内容字体
var galaxy_spacing_content_fontSize='14px';//table-内容字大小
var galaxy_spacing_content_fontColor='#666666';//table-内容字颜色
var galaxy_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var galaxy_spacing_even_backgroundColor='#893448';//table-奇数行颜色
var galaxy_spacing_odd_backgroundColor='#d95850';//table-偶数行颜色

var galaxy_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//halloween 万圣节
var halloween_spacing_colorPalette=["#ff715e","#ffaf51","#ffee51","#8c6ac4","#715c87"];
var halloween_spacing_backgroundColor='#F7F7F7';
var halloween_spacing_fontColor='#000000';
var halloween_spacing_gaugeAxisLineColor=["#ff715e","#ffaf51","#ffee51"];//设置仪表盘的表盘颜色--必须是三个值
var halloween_spacing_labelColor="#333333";
var halloween_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var halloween_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var halloween_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var halloween_spacing_GWBTfontColor="#d543ab";//控件组标题文字颜色
var halloween_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var halloween_spacing_BTfontColor="#345abd";
var halloween_spacing_BTbackgroundColor="#F7F7F7";
var halloween_spacing_BTfontSize='22px';
var halloween_spacing_BTfontFamily='微软雅黑';
var halloween_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var halloween_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var halloween_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var halloween_spacing_CBfontSize="15px";
var halloween_spacing_CBfontFamily="微软雅黑";
var halloween_spacing_BTBNbackgroundColor="#ba345d";
var halloween_spacing_BTBNfontColor="";
var halloween_spacing_BTBNborderColor="#7A7A7A";//边框同上
var halloween_spacing_tabUnColor="#FF4500";//未选中页签颜色
var halloween_spacing_tabColor="#A1A1A1";//选中页签颜色
var halloween_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var halloween_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var halloween_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var halloween_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var halloween_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var halloween_spacing_GWfontSize="18px";
var halloween_spacing_GWfontfamily="微软雅黑";
var halloween_spacing_GWborderColor="#F0F5F6";//边框同上
var halloween_spacing_GWborderWidth="7";//边框同上
var halloween_spacing_GWborderStyle="solid";//边框同上
var halloween_spacing_GWCBfontSize="15px";
var halloween_spacing_GWCBfontFamily="微软雅黑";
var halloween_spacing_GWBNbackgroundColor="#d543ab";
var halloween_spacing_GWBNfontColor="";
var halloween_spacing_GWBNborderColor="#7A7A7A";//边框同上
var halloween_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var halloween_spacing_Header_backgroundColor='#715c87';//table-表头颜色
var halloween_spacing_Header_fontColor='#ffee51';//table-表头字颜色
var halloween_spacing_Header_fontSize='16px';//table-表头字号
var halloween_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var halloween_spacing_content_fontFamily='微软雅黑';//table-内容字体
var halloween_spacing_content_fontSize='14px';//table-内容字大小
var halloween_spacing_content_fontColor='#666666';//table-内容字颜色
var halloween_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var halloween_spacing_even_backgroundColor='#ff715e';//table-奇数行颜色
var halloween_spacing_odd_backgroundColor='#ffaf51';//table-偶数行颜色

var halloween_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//infographic	信息图
var infographic_spacing_colorPalette=['#C1232B','#27727B','#FCCE10','#E87C25','#B5C334','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD','#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'];
var infographic_spacing_backgroundColor='#F7F7F7';
var infographic_spacing_fontColor='#000000';
var infographic_spacing_gaugeAxisLineColor=['#B5C334','#27727B','#C1232B'];//设置仪表盘的表盘颜色--必须是三个值
var infographic_spacing_labelColor="#000000";
var infographic_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var infographic_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var infographic_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var infographic_spacing_GWBTfontColor="#d543ab";//控件组标题文字颜色
var infographic_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var infographic_spacing_BTfontColor="#345abd";
var infographic_spacing_BTbackgroundColor="#F7F7F7";
var infographic_spacing_BTfontSize='22px';
var infographic_spacing_BTfontFamily='微软雅黑';
var infographic_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var infographic_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var infographic_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var infographic_spacing_CBfontSize="15px";
var infographic_spacing_CBfontFamily="微软雅黑";
var infographic_spacing_BTBNbackgroundColor="#ba345d";
var infographic_spacing_BTBNfontColor="";
var infographic_spacing_BTBNborderColor="#7A7A7A";//边框同上
var infographic_spacing_tabUnColor="#FF4500";//未选中页签颜色
var infographic_spacing_tabColor="#A1A1A1";//选中页签颜色
var infographic_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var infographic_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var infographic_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var infographic_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var infographic_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var infographic_spacing_GWfontSize="18px";
var infographic_spacing_GWfontfamily="微软雅黑";
var infographic_spacing_GWborderColor="#F0F5F6";//边框同上
var infographic_spacing_GWborderWidth="7";//边框同上
var infographic_spacing_GWborderStyle="solid";//边框同上
var infographic_spacing_GWCBfontSize="15px";
var infographic_spacing_GWCBfontFamily="微软雅黑";
var infographic_spacing_GWBNbackgroundColor="#d543ab";
var infographic_spacing_GWBNfontColor="";
var infographic_spacing_GWBNborderColor="#7A7A7A";//边框同上
var infographic_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var infographic_spacing_Header_backgroundColor='#26C0C0';//table-表头颜色
var infographic_spacing_Header_fontColor='#FCCE10';//table-表头字颜色
var infographic_spacing_Header_fontSize='16px';//table-表头字号
var infographic_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var infographic_spacing_content_fontFamily='微软雅黑';//table-内容字体
var infographic_spacing_content_fontSize='14px';//table-内容字大小
var infographic_spacing_content_fontColor='#666666';//table-内容字颜色
var infographic_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var infographic_spacing_even_backgroundColor='#C1232B';//table-奇数行颜色
var infographic_spacing_odd_backgroundColor='#27727B';//table-偶数行颜色

var infographic_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//lightgray	淡灰（默认）
var lightgray_spacing_colorPalette=["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"];
var lightgray_spacing_backgroundColor='#FCFCFC';
var lightgray_spacing_fontColor='#333333';
var lightgray_spacing_gaugeAxisLineColor=["#c23531","#2f4554","#61a0a8"];//设置仪表盘的表盘颜色--必须是三个值
var lightgray_spacing_labelColor="#eee";
var lightgray_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var lightgray_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var lightgray_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var lightgray_spacing_GWBTfontColor="#333333";//控件组标题文字颜色
var lightgray_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var lightgray_spacing_BTfontColor="#333333";//控件组总口径文字颜色
var lightgray_spacing_BTbackgroundColor="#F0F5F6";//标题背景颜色
var lightgray_spacing_BTfontSize='22px';//标题文字大小
var lightgray_spacing_BTfontFamily='微软雅黑';//标题文字字体
var lightgray_spacing_BTborderColor="#FCFCFC";//标题边框颜色，多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var lightgray_spacing_BTborderWidth="0";//标题边框宽度,设置宽度前需要设置边框样式，同上
var lightgray_spacing_BTborderStyle="none";//标题边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var lightgray_spacing_CBfontSize="15px";//控件组文字大小
var lightgray_spacing_CBfontFamily="微软雅黑";//控件组文字字体
var lightgray_spacing_BTBNbackgroundColor="#FCFCFC";//确定按钮背景颜色
var lightgray_spacing_BTBNfontColor="#333333";//确定按钮文字颜色
var lightgray_spacing_BTBNborderColor="#FCFCFC";//确定按钮边框
var lightgray_spacing_tabUnColor="#FAFAFA";//未选中页签颜色
var lightgray_spacing_tabColor="#F0F5F6";//选中页签颜色
var lightgray_spacing_tabUnFontColor="#7f7f7f";//未选中页签标题颜色
var lightgray_spacing_tabFontColor="#000000";//选中页签标题颜色
var lightgray_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var lightgray_spacing_tabPanelBackgroundColor="#E8ECED";//页签背景颜色
var lightgray_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var lightgray_spacing_GWfontSize="18px";//组件文字大小
var lightgray_spacing_GWfontfamily="微软雅黑";//组件文字字体
var lightgray_spacing_GWborderColor="#F0F5F6";//组件边框颜色
var lightgray_spacing_GWborderWidth="7";//组件边框宽度同上
var lightgray_spacing_GWborderStyle="solid";//组件边框样式
var lightgray_spacing_GWCBfontSize="15px";//组件口径文字大小
var lightgray_spacing_GWCBfontFamily="微软雅黑";//组件口径文字字体
var lightgray_spacing_GWBNbackgroundColor="#FCFCFC";//组件口径确定按钮背景颜色
var lightgray_spacing_GWBNfontColor="#333333";//组件口径确定按钮文字颜色
var lightgray_spacing_GWBNborderColor="#FCFCFC";//组件确定按钮边框颜色 同上
var lightgray_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var lightgray_spacing_Header_backgroundColor='#61A0A8';//table-表头颜色
var lightgray_spacing_Header_fontColor='#333333';//table-表头字颜色
var lightgray_spacing_Header_fontSize='16px';//table-表头字号
var lightgray_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var lightgray_spacing_content_fontFamily='微软雅黑';//table-内容字体
var lightgray_spacing_content_fontSize='14px';//table-内容字大小
var lightgray_spacing_content_fontColor='#333333';//table-内容字颜色
var lightgray_spacing_content_lineColor='#FCFCFC';//table-间隔线颜色（宽度是1个像素）
var lightgray_spacing_even_backgroundColor='#FCFCFC';//table-奇数行颜色
var lightgray_spacing_odd_backgroundColor='#BCCACC';//table-偶数行颜色

var lightgray_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//macarons	马卡龙
var macarons_spacing_colorPalette=['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa','#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050','#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'];
var macarons_spacing_backgroundColor='#F3F2F7';
var macarons_spacing_fontColor='#008ACD';
var macarons_spacing_gaugeAxisLineColor=["#2ec7c9","#5ab1ef","#d87a80"];//设置仪表盘的表盘颜色--必须是三个值
var macarons_spacing_labelColor="#000000";
var macarons_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var macarons_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var macarons_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var macarons_spacing_GWBTfontColor="#008ACD";//控件组标题文字颜色
var macarons_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var macarons_spacing_BTfontColor="#008ACD";
var macarons_spacing_BTbackgroundColor="#F3F2F7";
var macarons_spacing_BTfontSize='22px';
var macarons_spacing_BTfontFamily='微软雅黑';
var macarons_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var macarons_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var macarons_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var macarons_spacing_CBfontSize="15px";
var macarons_spacing_CBfontFamily="微软雅黑";
var macarons_spacing_BTBNbackgroundColor="#F3F2F7";
var macarons_spacing_BTBNfontColor="#008ACD";
var macarons_spacing_BTBNborderColor="#F3F2F7";//边框同上
var macarons_spacing_tabUnColor="#FF4500";//未选中页签颜色
var macarons_spacing_tabColor="#A1A1A1";//选中页签颜色
var macarons_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var macarons_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var macarons_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var macarons_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var macarons_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var macarons_spacing_GWfontSize="18px";
var macarons_spacing_GWfontfamily="微软雅黑";
var macarons_spacing_GWborderColor="#F0F5F6";//边框同上
var macarons_spacing_GWborderWidth="7";//边框同上
var macarons_spacing_GWborderStyle="solid";//边框同上
var macarons_spacing_GWCBfontSize="15px";
var macarons_spacing_GWCBfontFamily="微软雅黑";
var macarons_spacing_GWBNbackgroundColor="#F3F2F7";
var macarons_spacing_GWBNfontColor="#008ACD";
var macarons_spacing_GWBNborderColor="#F3F2F7";//边框同上
var macarons_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var macarons_spacing_Header_backgroundColor='#c14089';//table-表头颜色
var macarons_spacing_Header_fontColor='#5ab1ef';//table-表头字颜色
var macarons_spacing_Header_fontSize='16px';//table-表头字号
var macarons_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var macarons_spacing_content_fontFamily='微软雅黑';//table-内容字体
var macarons_spacing_content_fontSize='14px';//table-内容字大小
var macarons_spacing_content_fontColor='#666666';//table-内容字颜色
var macarons_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var macarons_spacing_even_backgroundColor='#2ec7c9';//table-奇数行颜色
var macarons_spacing_odd_backgroundColor='#b6a2de';//table-偶数行颜色

var macarons_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//purple-passion 热情紫
var purple_passion_spacing_colorPalette=["#9b8bba","#e098c7","#8fd3e8","#71669e","#cc70af","#7cb4cc"];
var purple_passion_spacing_backgroundColor='#F7F7F7';
var purple_passion_spacing_fontColor='#000000';
var purple_passion_spacing_gaugeAxisLineColor=["#9b8bba","#e098c7","#8fd3e8"];//设置仪表盘的表盘颜色--必须是三个值
var purple_passion_spacing_labelColor="#eeeeee";
var purple_passion_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var purple_passion_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var purple_passion_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var purple_passion_spacing_GWBTfontColor="#d543ab";//控件组标题文字颜色
var purple_passion_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var purple_passion_spacing_BTfontColor="#345abd";
var purple_passion_spacing_BTbackgroundColor="#F7F7F7";
var purple_passion_spacing_BTfontSize='22px';
var purple_passion_spacing_BTfontFamily='微软雅黑';
var purple_passion_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var purple_passion_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var purple_passion_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var purple_passion_spacing_CBfontSize="15px";
var purple_passion_spacing_CBfontFamily="微软雅黑";
var purple_passion_spacing_BTBNbackgroundColor="#ba345d";
var purple_passion_spacing_BTBNfontColor="";
var purple_passion_spacing_BTBNborderColor="#7A7A7A";//边框同上
var purple_passion_spacing_tabUnColor="#FF4500";//未选中页签颜色
var purple_passion_spacing_tabColor="#A1A1A1";//选中页签颜色
var purple_passion_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var purple_passion_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var purple_passion_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var purple_passion_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var purple_passion_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var purple_passion_spacing_GWfontSize="18px";
var purple_passion_spacing_GWfontfamily="微软雅黑";
var purple_passion_spacing_GWborderColor="#F0F5F6";//边框同上
var purple_passion_spacing_GWborderWidth="7";//边框同上
var purple_passion_spacing_GWborderStyle="solid";//边框同上
var purple_passion_spacing_GWCBfontSize="15px";
var purple_passion_spacing_GWCBfontFamily="微软雅黑";
var purple_passion_spacing_GWBNbackgroundColor="#d543ab";
var purple_passion_spacing_GWBNfontColor="";
var purple_passion_spacing_GWBNborderColor="#7A7A7A";//边框同上
var purple_passion_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var purple_passion_spacing_Header_backgroundColor='#4b565b';//table-表头颜色
var purple_passion_spacing_Header_fontColor='#c4f294';//table-表头字颜色
var purple_passion_spacing_Header_fontSize='16px';//table-表头字号
var purple_passion_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var purple_passion_spacing_content_fontFamily='微软雅黑';//table-内容字体
var purple_passion_spacing_content_fontSize='14px';//table-内容字大小
var purple_passion_spacing_content_fontColor='#666666';//table-内容字颜色
var purple_passion_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var purple_passion_spacing_even_backgroundColor='#9b8bba';//table-奇数行颜色
var purple_passion_spacing_odd_backgroundColor='#e098c7';//table-偶数行颜色

var purple_passion_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//质检1 quality1
var quality1_spacing_colorPalette=["#8bd1eb","#086486","#f9c3c9","#6aadd8","#f0e9a0","#effcde","#70d9ff","#539fff","#2d77d4","#946a38","#4e7848"];
var quality1_spacing_backgroundColor="#0B213A";
var quality1_spacing_fontColor='#eeeeee';
var quality1_spacing_gaugeAxisLineColor=["#8bd1eb","#6aadd8","#086486"];//设置仪表盘的表盘颜色--必须是三个值
var quality1_spacing_labelColor="#ffffff";
var quality1_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var quality1_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var quality1_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var quality1_spacing_GWBTfontColor="#eeeeee";//控件组标题文字颜色
var quality1_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var quality1_spacing_BTfontColor="#eeeeee";
var quality1_spacing_BTbackgroundColor="#01002B";
var quality1_spacing_BTfontSize='22px';
var quality1_spacing_BTfontFamily='微软雅黑';
var quality1_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var quality1_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var quality1_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var quality1_spacing_CBfontSize="15px";
var quality1_spacing_CBfontFamily="微软雅黑";
var quality1_spacing_BTBNbackgroundColor="#0B213A";
var quality1_spacing_BTBNfontColor="#eeeeee";
var quality1_spacing_BTBNborderColor="#0B213A";//边框同上
var quality1_spacing_tabUnColor="#FF4500";//未选中页签颜色
var quality1_spacing_tabColor="#A1A1A1";//选中页签颜色
var quality1_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var quality1_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var quality1_spacing_GWbackgroundColor="#01002B";//控件组背景颜色
var quality1_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var quality1_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var quality1_spacing_GWfontSize="18px";
var quality1_spacing_GWfontfamily="微软雅黑";
var quality1_spacing_GWborderColor="#01002B";//边框同上
var quality1_spacing_GWborderWidth="7";//边框同上
var quality1_spacing_GWborderStyle="solid";//边框同上
var quality1_spacing_GWCBfontSize="15px";
var quality1_spacing_GWCBfontFamily="微软雅黑";
var quality1_spacing_GWBNbackgroundColor="#0B213A";
var quality1_spacing_GWBNfontColor="#eeeeee";
var quality1_spacing_GWBNborderColor="#0B213A";//边框同上
var quality1_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var quality1_spacing_Header_backgroundColor='#4b565b';//table-表头颜色
var quality1_spacing_Header_fontColor='#c4f294';//table-表头字颜色
var quality1_spacing_Header_fontSize='16px';//table-表头字号
var quality1_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var quality1_spacing_content_fontFamily='微软雅黑';//table-内容字体
var quality1_spacing_content_fontSize='14px';//table-内容字大小
var quality1_spacing_content_fontColor='#666666';//table-内容字颜色
var quality1_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var quality1_spacing_even_backgroundColor='#9b8bba';//table-奇数行颜色
var quality1_spacing_odd_backgroundColor='#e098c7';//table-偶数行颜色

var quality1_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//质检2 quality2
var quality2_spacing_colorPalette=["#effcde","#9cb890","#75986b","#4e7848","#946a38","#c2d584","#95c1c3","#72a0e3","#6d70e5"];
var quality2_spacing_backgroundColor='#010054';
var quality2_spacing_fontColor='#eeeeee';
var quality2_spacing_gaugeAxisLineColor=["#effcde","#9cb890","#75986b"];//设置仪表盘的表盘颜色--必须是三个值
var quality2_spacing_labelColor="#000000";
var quality2_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var quality2_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var quality2_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var quality2_spacing_GWBTfontColor="#eeeeee";//控件组标题文字颜色
var quality2_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var quality2_spacing_BTfontColor="#eeeeee";
var quality2_spacing_BTbackgroundColor="#010054";
var quality2_spacing_BTfontSize='22px';
var quality2_spacing_BTfontFamily='微软雅黑';
var quality2_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var quality2_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var quality2_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var quality2_spacing_CBfontSize="15px";
var quality2_spacing_CBfontFamily="微软雅黑";
var quality2_spacing_BTBNbackgroundColor="#010054";
var quality2_spacing_BTBNfontColor="#eeeeee";
var quality2_spacing_BTBNborderColor="#010054";//边框同上
var quality2_spacing_tabUnColor="#FF4500";//未选中页签颜色
var quality2_spacing_tabColor="#A1A1A1";//选中页签颜色
var quality2_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var quality2_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var quality2_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var quality2_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var quality2_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var quality2_spacing_GWfontSize="18px";
var quality2_spacing_GWfontfamily="微软雅黑";
var quality2_spacing_GWborderColor="#F0F5F6";//边框同上
var quality2_spacing_GWborderWidth="7";//边框同上
var quality2_spacing_GWborderStyle="solid";//边框同上
var quality2_spacing_GWCBfontSize="15px";
var quality2_spacing_GWCBfontFamily="微软雅黑";
var quality2_spacing_GWBNbackgroundColor="#010054";//站位

var quality2_spacing_GWBNfontColor="#eeeeee";
var quality2_spacing_GWBNborderColor="#010054";//边框同上
var quality2_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var quality2_spacing_Header_backgroundColor='#4b565b';//table-表头颜色
var quality2_spacing_Header_fontColor='#c4f294';//table-表头字颜色
var quality2_spacing_Header_fontSize='16px';//table-表头字号
var quality2_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var quality2_spacing_content_fontFamily='微软雅黑';//table-内容字体
var quality2_spacing_content_fontSize='14px';//table-内容字大小
var quality2_spacing_content_fontColor='#666666';//table-内容字颜色
var quality2_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var quality2_spacing_even_backgroundColor='#9b8bba';//table-奇数行颜色
var quality2_spacing_odd_backgroundColor='#e098c7';//table-偶数行颜色

var quality2_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//rainbow 彩虹
var rainbow_spacing_colorPalette=["#ffc76c","#ffea71","#c4f294","#94edd4","#96e4ff","#5cbfea","#2a9ddd","#cc7e63","#724e58","#4b565b"];
var rainbow_spacing_backgroundColor='#fcfdf6';
var rainbow_spacing_fontColor='#2a9ddd';
var rainbow_spacing_gaugeAxisLineColor=["#ffc76c","#ffea71","#c4f294"];//设置仪表盘的表盘颜色--必须是三个值
var rainbow_spacing_labelColor="#2a2424";
var rainbow_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var rainbow_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var rainbow_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var rainbow_spacing_GWBTfontColor="#2a9ddd";//控件组标题文字颜色
var rainbow_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var rainbow_spacing_BTfontColor="#2a9ddd";
var rainbow_spacing_BTbackgroundColor="#fcfdf6";
var rainbow_spacing_BTfontSize='22px';
var rainbow_spacing_BTfontFamily='微软雅黑';
var rainbow_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var rainbow_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var rainbow_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var rainbow_spacing_CBfontSize="15px";
var rainbow_spacing_CBfontFamily="微软雅黑";
var rainbow_spacing_BTBNbackgroundColor="#fcfdf6";
var rainbow_spacing_BTBNfontColor="#2a9ddd";
var rainbow_spacing_BTBNborderColor="#fcfdf6";//边框同上
var rainbow_spacing_tabUnColor="#FF4500";//未选中页签颜色
var rainbow_spacing_tabColor="#A1A1A1";//选中页签颜色
var rainbow_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var rainbow_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var rainbow_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var rainbow_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var rainbow_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var rainbow_spacing_GWfontSize="18px";
var rainbow_spacing_GWfontfamily="微软雅黑";
var rainbow_spacing_GWborderColor="#F0F5F6";//边框同上
var rainbow_spacing_GWborderWidth="7";//边框同上
var rainbow_spacing_GWborderStyle="solid";//边框同上
var rainbow_spacing_GWCBfontSize="15px";
var rainbow_spacing_GWCBfontFamily="微软雅黑";
var rainbow_spacing_GWBNbackgroundColor="#fcfdf6";
var rainbow_spacing_GWBNfontColor="#2a9ddd";
var rainbow_spacing_GWBNborderColor="#fcfdf6";//边框同上
var rainbow_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var rainbow_spacing_Header_backgroundColor='#4b565b';//table-表头颜色
var rainbow_spacing_Header_fontColor='#c4f294';//table-表头字颜色
var rainbow_spacing_Header_fontSize='16px';//table-表头字号
var rainbow_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var rainbow_spacing_content_fontFamily='微软雅黑';//table-内容字体
var rainbow_spacing_content_fontSize='14px';//table-内容字大小
var rainbow_spacing_content_fontColor='#666666';//table-内容字颜色
var rainbow_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var rainbow_spacing_even_backgroundColor='#ffc76c';//table-奇数行颜色
var rainbow_spacing_odd_backgroundColor='#ffea71';//table-偶数行颜色

var rainbow_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//roma	罗马
var roma_spacing_colorPalette=['#E01F54','#001852','#f5e8c8','#b8d2c7','#c6b38e','#a4d8c2','#f3d999','#d3758f','#dcc392','#2e4783','#82b6e9','#ff6347','#a092f1','#0a915d','#eaf889','#6699FF','#ff6666','#3cb371','#d5b158','#38b6b6'];
var roma_spacing_backgroundColor='#FFFFFF';
var roma_spacing_fontColor='#333333';
var roma_spacing_gaugeAxisLineColor=['E01F54','#b8d2c7','#001852'];//设置仪表盘的表盘颜色--必须是三个值
var roma_spacing_labelColor="#000000";
var roma_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var roma_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var roma_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var roma_spacing_GWBTfontColor="#333333";//控件组标题文字颜色
var roma_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var roma_spacing_BTfontColor="#333333";
var roma_spacing_BTbackgroundColor="#F0F5F6";
var roma_spacing_BTfontSize='22px';
var roma_spacing_BTfontFamily='微软雅黑';
var roma_spacing_BTborderColor="#FFFFFF";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var roma_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var roma_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var roma_spacing_CBfontSize="15px";
var roma_spacing_CBfontFamily="微软雅黑";
var roma_spacing_BTBNbackgroundColor="#FFFFFF";
var roma_spacing_BTBNfontColor="#333333";
var roma_spacing_BTBNborderColor="#FFFFFF";//边框同上
var roma_spacing_tabUnColor="#FAFAFA";//未选中页签颜色
var roma_spacing_tabColor="#F0F5F6";//选中页签颜色
var roma_spacing_tabUnFontColor="#7f7f7f";//未选中页签标题颜色
var roma_spacing_tabFontColor="#000000";//选中页签标题颜色
var roma_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var roma_spacing_tabPanelBackgroundColor="#E8ECED";//页签背景颜色
var roma_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var roma_spacing_GWfontSize="18px";
var roma_spacing_GWfontfamily="微软雅黑";
var roma_spacing_GWborderColor="#F0F5F6";//边框同上
var roma_spacing_GWborderWidth="7";//边框同上
var roma_spacing_GWborderStyle="solid";//边框同上
var roma_spacing_GWCBfontSize="15px";
var roma_spacing_GWCBfontFamily="微软雅黑";
var roma_spacing_GWBNbackgroundColor="#FFFFFF";
var roma_spacing_GWBNfontColor="#333333";
var roma_spacing_GWBNborderColor="#FFFFFF";//边框同上
var roma_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var roma_spacing_Header_backgroundColor='#38b6b6';//table-表头颜色
var roma_spacing_Header_fontColor='#f5e8c8';//table-表头字颜色
var roma_spacing_Header_fontSize='16px';//table-表头字号
var roma_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var roma_spacing_content_fontFamily='微软雅黑';//table-内容字体
var roma_spacing_content_fontSize='14px';//table-内容字大小
var roma_spacing_content_fontColor='#666666';//table-内容字颜色
var roma_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var roma_spacing_even_backgroundColor='#E01F54';//table-奇数行颜色
var roma_spacing_odd_backgroundColor='#001852';//table-偶数行颜色

var roma_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//shine	发光
var shine_spacing_colorPalette=['#c12e34','#e6b600','#0098d9','#2b821d','#005eaa','#339ca8','#cda819','#32a487'];
var shine_spacing_backgroundColor='#F7F7F7';
var shine_spacing_fontColor='#000000';
var shine_spacing_gaugeAxisLineColor=['2b821d','#005eaa','#c12e34'];//设置仪表盘的表盘颜色--必须是三个值
var shine_spacing_labelColor="#000000";
var shine_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var shine_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var shine_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var shine_spacing_GWBTfontColor="#d543ab";//控件组标题文字颜色
var shine_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var shine_spacing_BTfontColor="#345abd";
var shine_spacing_BTbackgroundColor="#F7F7F7";
var shine_spacing_BTfontSize='22px';
var shine_spacing_BTfontFamily='微软雅黑';
var shine_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var shine_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var shine_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var shine_spacing_CBfontSize="15px";
var shine_spacing_CBfontFamily="微软雅黑";
var shine_spacing_BTBNbackgroundColor="#ba345d";
var shine_spacing_BTBNfontColor="";
var shine_spacing_BTBNborderColor="#7A7A7A";//边框同上
var shine_spacing_tabUnColor="#FF4500";//未选中页签颜色
var shine_spacing_tabColor="#A1A1A1";//选中页签颜色
var shine_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var shine_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var shine_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var shine_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var shine_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var shine_spacing_GWfontSize="18px";
var shine_spacing_GWfontfamily="微软雅黑";
var shine_spacing_GWborderColor="#F0F5F6";//边框同上
var shine_spacing_GWborderWidth="7";//边框同上
var shine_spacing_GWborderStyle="solid";//边框同上
var shine_spacing_GWCBfontSize="15px";
var shine_spacing_GWCBfontFamily="微软雅黑";
var shine_spacing_GWBNbackgroundColor="#d543ab";
var shine_spacing_GWBNfontColor="";
var shine_spacing_GWBNborderColor="#7A7A7A";//边框同上
var shine_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var shine_spacing_Header_backgroundColor='#32a487';//table-表头颜色
var shine_spacing_Header_fontColor='#0098d9';//table-表头字颜色
var shine_spacing_Header_fontSize='16px';//table-表头字号
var shine_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var shine_spacing_content_fontFamily='微软雅黑';//table-内容字体
var shine_spacing_content_fontSize='14px';//table-内容字大小
var shine_spacing_content_fontColor='#666666';//table-内容字颜色
var shine_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var shine_spacing_even_backgroundColor='#c12e34';//table-奇数行颜色
var shine_spacing_odd_backgroundColor='#e6b600';//table-偶数行颜色

var shine_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//vintage	古董
var vintage_spacing_colorPalette=["#d87c7c","#919e8b","#d7ab82","#6e7074","#61a0a8","#efa18d","#787464","#cc7e63","#724e58","#4b565b"];
var vintage_spacing_backgroundColor='rgba(254,248,239,1)';
var vintage_spacing_fontColor='#333333';
var vintage_spacing_gaugeAxisLineColor=["#d87c7c","#919e8b","#d7ab82"];//设置仪表盘的表盘颜色--必须是三个值
var vintage_spacing_labelColor="#eeeeee";
var vintage_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var vintage_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var vintage_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var vintage_spacing_GWBTfontColor="#333333";//控件组标题文字颜色
var vintage_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var vintage_spacing_BTfontColor="#333333";
var vintage_spacing_BTbackgroundColor="#EDE7DF";
var vintage_spacing_BTfontSize='22px';
var vintage_spacing_BTfontFamily='微软雅黑';
var vintage_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var vintage_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var vintage_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var vintage_spacing_CBfontSize="14px";
var vintage_spacing_CBfontFamily="微软雅黑";
var vintage_spacing_BTBNbackgroundColor="#FEF8EF";
var vintage_spacing_BTBNfontColor="#333333";
var vintage_spacing_BTBNborderColor="#FEF8EF";//边框同上
var vintage_spacing_tabUnColor="#CFCAC2";//未选中页签颜色
var vintage_spacing_tabColor="#EDE7DF";//选中页签颜色
var vintage_spacing_tabUnFontColor="#7f7f7f";//未选中页签标题颜色
var vintage_spacing_tabFontColor="#000000";//选中页签标题颜色
var vintage_spacing_GWbackgroundColor="#EDE7DF";//控件组背景颜色
var vintage_spacing_tabPanelBackgroundColor="#E0DBD3";//页签背景颜色
var vintage_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var vintage_spacing_GWfontSize="18px";
var vintage_spacing_GWfontfamily="微软雅黑";
var vintage_spacing_GWborderColor="#EDE7DF";//边框同上
var vintage_spacing_GWborderWidth="7";//边框同上
var vintage_spacing_GWborderStyle="solid";//边框同上
var vintage_spacing_GWCBfontSize="14px";
var vintage_spacing_GWCBfontFamily="微软雅黑";
var vintage_spacing_GWBNbackgroundColor="#FEF8EF";
var vintage_spacing_GWBNfontColor="#333333";
var vintage_spacing_GWBNborderColor="#FEF8EF";//边框同上
var vintage_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var vintage_spacing_Header_backgroundColor='#919E8B';//table-表头颜色
var vintage_spacing_Header_fontColor='#262B2E';//table-表头字颜色
var vintage_spacing_Header_fontSize='16px';//table-表头字号
var vintage_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var vintage_spacing_content_fontFamily='微软雅黑';//table-内容字体
var vintage_spacing_content_fontSize='14px';//table-内容字大小
var vintage_spacing_content_fontColor='#4B565B';//table-内容字颜色
var vintage_spacing_content_lineColor='#FEF8EF';//table-间隔线颜色（宽度是1个像素）
var vintage_spacing_even_backgroundColor='#FEF8EF';//table-奇数行颜色
var vintage_spacing_odd_backgroundColor='#D6CCC3';//table-偶数行颜色

var vintage_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//walden	瓦尔登
var walden_spacing_colorPalette=["#3fb1e3","#6be6c1","#626c91","#a0a7e6","#c4ebad","#96dee8"];
var walden_spacing_backgroundColor='#f8ffff';
var walden_spacing_fontColor='#666666';
var walden_spacing_gaugeAxisLineColor=["#3fb1e3","#6be6c1","#626c91"];//设置仪表盘的表盘颜色--必须是三个值
var walden_spacing_labelColor="#000000";
var walden_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var walden_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var walden_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var walden_spacing_GWBTfontColor="#666666";//控件组标题文字颜色
var walden_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var walden_spacing_BTfontColor="#666666";
var walden_spacing_BTbackgroundColor="#F0F7F7";
var walden_spacing_BTfontSize='22px';
var walden_spacing_BTfontFamily='微软雅黑';
var walden_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var walden_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var walden_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var walden_spacing_CBfontSize="15px";
var walden_spacing_CBfontFamily="微软雅黑";
var walden_spacing_BTBNbackgroundColor="#f8ffff";
var walden_spacing_BTBNfontColor="#666666";
var walden_spacing_BTBNborderColor="#f8ffff";//边框同上
var walden_spacing_tabUnColor="#FAFAFA";//未选中页签颜色
var walden_spacing_tabColor="#F0F5F6";//选中页签颜色
var walden_spacing_tabUnFontColor="#7f7f7f";//未选中页签标题颜色
var walden_spacing_tabFontColor="#000000";//选中页签标题颜色
var walden_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var walden_spacing_tabPanelBackgroundColor="#E8ECED";//页签背景颜色
var walden_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var walden_spacing_GWfontSize="18px";
var walden_spacing_GWfontfamily="微软雅黑";
var walden_spacing_GWborderColor="#F0F7F7";//边框同上
var walden_spacing_GWborderWidth="7";//边框同上
var walden_spacing_GWborderStyle="solid";//边框同上
var walden_spacing_GWCBfontSize="15px";
var walden_spacing_GWCBfontFamily="微软雅黑";
var walden_spacing_GWBNbackgroundColor="#f8ffff";
var walden_spacing_GWBNfontColor="#666666";
var walden_spacing_GWBNborderColor="#f8ffff";//边框同上
var walden_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var walden_spacing_Header_backgroundColor='#96dee8';//table-表头颜色
var walden_spacing_Header_fontColor='#424242';//table-表头字颜色
var walden_spacing_Header_fontSize='16px';//table-表头字号
var walden_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var walden_spacing_content_fontFamily='微软雅黑';//table-内容字体
var walden_spacing_content_fontSize='14px';//table-内容字大小
var walden_spacing_content_fontColor='#666666';//table-内容字颜色
var walden_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var walden_spacing_even_backgroundColor='#F8FFFF';//table-奇数行颜色
var walden_spacing_odd_backgroundColor='#C3E4E8';//table-偶数行颜色

var walden_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//westeros	维斯特洛
var westeros_spacing_colorPalette=["#516b91","#59c4e6","#edafda","#93b7e3","#a5e7f0","#cbb0e3"];
var westeros_spacing_backgroundColor='#FFFFFF';
var westeros_spacing_fontColor='#1B2430';
var westeros_spacing_gaugeAxisLineColor=["#516b91","#59c4e6","#edafda"];//设置仪表盘的表盘颜色--必须是三个值
var westeros_spacing_labelColor="#000000";
var westeros_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var westeros_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var westeros_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var westeros_spacing_GWBTfontColor="#516B91";//控件组标题文字颜色
var westeros_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var westeros_spacing_BTfontColor="#516B91";
var westeros_spacing_BTbackgroundColor="#F0F5F6";
var westeros_spacing_BTfontSize='22px';
var westeros_spacing_BTfontFamily='微软雅黑';
var westeros_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var westeros_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var westeros_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var westeros_spacing_CBfontSize="15px";
var westeros_spacing_CBfontFamily="微软雅黑";
var westeros_spacing_BTBNbackgroundColor="#FFFFFF";
var westeros_spacing_BTBNfontColor="#516B91";
var westeros_spacing_BTBNborderColor="#FFFFFF";//边框同上
var westeros_spacing_tabUnColor="#FAFAFA";//未选中页签颜色
var westeros_spacing_tabColor="#F0F5F6";//选中页签颜色
var westeros_spacing_tabUnFontColor="#7f7f7f";//未选中页签标题颜色
var westeros_spacing_tabFontColor="#516B91";//选中页签标题颜色
var westeros_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var westeros_spacing_tabPanelBackgroundColor="#E8ECED";//页签背景颜色
var westeros_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var westeros_spacing_GWfontSize="18px";
var westeros_spacing_GWfontfamily="微软雅黑";
var westeros_spacing_GWborderColor="#F0F5F6";//边框同上
var westeros_spacing_GWborderWidth="7";//边框同上
var westeros_spacing_GWborderStyle="solid";//边框同上
var westeros_spacing_GWCBfontSize="15px";
var westeros_spacing_GWCBfontFamily="微软雅黑";
var westeros_spacing_GWBNbackgroundColor="#FFFFFF";
var westeros_spacing_GWBNfontColor="#516B91";
var westeros_spacing_GWBNborderColor="#FFFFFF";//边框同上
var westeros_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var westeros_spacing_Header_backgroundColor='#548CB1';//table-表头颜色
var westeros_spacing_Header_fontColor='#424242';//table-表头字颜色
var westeros_spacing_Header_fontSize='16px';//table-表头字号
var westeros_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var westeros_spacing_content_fontFamily='微软雅黑';//table-内容字体
var westeros_spacing_content_fontSize='14px';//table-内容字大小
var westeros_spacing_content_fontColor='#666666';//table-内容字颜色
var westeros_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var westeros_spacing_even_backgroundColor='#FFFFFF';//table-奇数行颜色
var westeros_spacing_odd_backgroundColor='#A0E5EF';//table-偶数行颜色

var westeros_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//wheat 小麦
var wheat_spacing_colorPalette=["#a8d5e2","#007dc8","#006895","#ed7e00","#f7af5c","#fae3d3","#e3682b"];
var wheat_spacing_backgroundColor='rgba(0,23,44,1)';
var wheat_spacing_fontColor='#FFFAF2';
var wheat_spacing_gaugeAxisLineColor=["#fae3d3","#f7af5c","#ed7e00"];//设置仪表盘的表盘颜色--必须是三个值
var wheat_spacing_labelColor="#000000";
var wheat_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var wheat_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var wheat_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var wheat_spacing_GWBTfontColor="#FFFAF2";//控件组标题文字颜色
var wheat_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var wheat_spacing_BTfontColor="#FFFAF2";
var wheat_spacing_BTbackgroundColor="#00172C";
var wheat_spacing_BTfontSize='22px';
var wheat_spacing_BTfontFamily='微软雅黑';
var wheat_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var wheat_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var wheat_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var wheat_spacing_CBfontSize="14px";
var wheat_spacing_CBfontFamily="微软雅黑";
var wheat_spacing_BTBNbackgroundColor="#00172C";
var wheat_spacing_BTBNfontColor="#FFFAF2";
var wheat_spacing_BTBNborderColor="#00172C";//边框同上
var wheat_spacing_tabUnColor="#FF4500";//未选中页签颜色
var wheat_spacing_tabColor="#A1A1A1";//选中页签颜色
var wheat_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var wheat_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var wheat_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var wheat_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var wheat_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var wheat_spacing_GWfontSize="18px";
var wheat_spacing_GWfontfamily="微软雅黑";
var wheat_spacing_GWborderColor="#F0F5F6";//边框同上
var wheat_spacing_GWborderWidth="7";//边框同上
var wheat_spacing_GWborderStyle="solid";//边框同上
var wheat_spacing_GWCBfontSize="14px";
var wheat_spacing_GWCBfontFamily="微软雅黑";
var wheat_spacing_GWBNbackgroundColor="#00172C";
var wheat_spacing_GWBNfontColor="#FFFAF2";
var wheat_spacing_GWBNborderColor="#00172C";//边框同上
var wheat_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var wheat_spacing_Header_backgroundColor='#e3682b';//table-表头颜色
var wheat_spacing_Header_fontColor='#ed7e00';//table-表头字颜色
var wheat_spacing_Header_fontSize='16px';//table-表头字号
var wheat_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var wheat_spacing_content_fontFamily='微软雅黑';//table-内容字体
var wheat_spacing_content_fontSize='14px';//table-内容字大小
var wheat_spacing_content_fontColor='#666666';//table-内容字颜色
var wheat_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var wheat_spacing_even_backgroundColor='#fae3d3';//table-奇数行颜色
var wheat_spacing_odd_backgroundColor='#f7af5c';//table-偶数行颜色

var wheat_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//wonderland 仙境
var wonderland_spacing_colorPalette=["#4ea397","#22c3aa","#7bd9a5","#d0648a","#f58db2","#f2b3c9"];
var wonderland_spacing_backgroundColor='#F7F7F7';
var wonderland_spacing_fontColor='#000000';
var wonderland_spacing_gaugeAxisLineColor=["#4ea397","#22c3aa","#7bd9a5"];//设置仪表盘的表盘颜色--必须是三个值
var wonderland_spacing_labelColor="#ffffff";
var wonderland_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var wonderland_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var wonderland_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var wonderland_spacing_GWBTfontColor="#d543ab";//控件组标题文字颜色
var wonderland_spacing_BTBNfontSize="15px";//控件组按钮字体大小
var wonderland_spacing_BTfontColor="#345abd";
var wonderland_spacing_BTbackgroundColor="#F7F7F7";
var wonderland_spacing_BTfontSize='22px';
var wonderland_spacing_BTfontFamily='微软雅黑';
var wonderland_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var wonderland_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var wonderland_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var wonderland_spacing_CBfontSize="15px";
var wonderland_spacing_CBfontFamily="微软雅黑";
var wonderland_spacing_BTBNbackgroundColor="#ba345d";
var wonderland_spacing_BTBNfontColor="";
var wonderland_spacing_BTBNborderColor="#7A7A7A";//边框同上
var wonderland_spacing_tabUnColor="#FF4500";//未选中页签颜色
var wonderland_spacing_tabColor="#A1A1A1";//选中页签颜色
var wonderland_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var wonderland_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var wonderland_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var wonderland_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var wonderland_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var wonderland_spacing_GWfontSize="18px";
var wonderland_spacing_GWfontfamily="微软雅黑";
var wonderland_spacing_GWborderColor="#F0F5F6";//边框同上
var wonderland_spacing_GWborderWidth="7";//边框同上
var wonderland_spacing_GWborderStyle="solid";//边框同上
var wonderland_spacing_GWCBfontSize="15px";
var wonderland_spacing_GWCBfontFamily="微软雅黑";
var wonderland_spacing_GWBNbackgroundColor="#d543ab";
var wonderland_spacing_GWBNfontColor="";
var wonderland_spacing_GWBNborderColor="#7A7A7A";//边框同上
var wonderland_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var wonderland_spacing_Header_backgroundColor='#f2b3c9';//table-表头颜色
var wonderland_spacing_Header_fontColor='#7bd9a5';//table-表头字颜色
var wonderland_spacing_Header_fontSize='16px';//table-表头字号
var wonderland_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var wonderland_spacing_content_fontFamily='微软雅黑';//table-内容字体
var wonderland_spacing_content_fontSize='14px';//table-内容字大小
var wonderland_spacing_content_fontColor='#666666';//table-内容字颜色
var wonderland_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var wonderland_spacing_even_backgroundColor='#4ea397';//table-奇数行颜色
var wonderland_spacing_odd_backgroundColor='#22c3aa';//table-偶数行颜色

var wonderland_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）

//colorful 七彩
var colorful_spacing_colorPalette=["#fbb735","#e98931","#eb403b","#b32e37","#6c2a6a","#5c4399","#274389","#1f5ea8","#227fb0","#2ab0c5","#39c0b3"];
var colorful_spacing_backgroundColor='#FFFFFF';
var colorful_spacing_fontColor='#008ACD';
var colorful_spacing_gaugeAxisLineColor=["#fbb735","#e98931","#eb403b"];//设置仪表盘的表盘颜色--必须是三个值
var colorful_spacing_labelColor="#eeeeee";
var colorful_spacing_oddLineColor="#aaaaaa";//强调曲线图线颜色
var colorful_spacing_evenLineColor="#ff0000";//强调曲线图强调线颜色
var colorful_spacing_sectionsColor="#AEE0F4";//强调曲线图强调区颜色
//控件组
var colorful_spacing_GWBTfontColor="#008ACD";
var colorful_spacing_BTBNfontSize="15px";
var colorful_spacing_BTfontColor="#008ACD";
var colorful_spacing_BTbackgroundColor="#FFFFFF";
var colorful_spacing_BTfontSize='22px';
var colorful_spacing_BTfontFamily='微软雅黑';
var colorful_spacing_BTborderColor="#7f7f7f";//多个用空格隔开，如果提供两个，第一个用于上－下，第二个用于左－右。如果提供三个，第一个用于上，第二个用于左－右，第三个用于下,如果是四个，上-右-下-左
var colorful_spacing_BTborderWidth="0";//边框宽度,设置宽度前需要设置边框样式，同上
var colorful_spacing_BTborderStyle="none";//边框样式，none（无边框），solid（单线），double（双线），dashed(虚线)，dotted（点线）， 同上
var colorful_spacing_CBfontSize="15px";
var colorful_spacing_CBfontFamily="黑体";
var colorful_spacing_BTBNbackgroundColor="#FFFFFF";
var colorful_spacing_BTBNfontColor="#008ACD";
var colorful_spacing_BTBNborderColor="#FFFFFF";//边框同上
var colorful_spacing_tabUnColor="#FF4500";//未选中页签颜色
var colorful_spacing_tabColor="#A1A1A1";//选中页签颜色
var colorful_spacing_tabUnFontColor="#AEEEEE";//未选中页签标题颜色
var colorful_spacing_tabFontColor="#BF3EFF";//选中页签标题颜色
var colorful_spacing_GWbackgroundColor="#F0F5F6";//控件组背景颜色
var colorful_spacing_tabPanelBackgroundColor="#76EE00";//页签背景颜色
var colorful_spacing_selectBackground="url(../img/selectimg/select_black.png) no-repeat scroll right center transparent;";//下拉框下拉图片

//组件
var colorful_spacing_GWfontSize="18px";
var colorful_spacing_GWfontfamily="微软雅黑";
var colorful_spacing_GWborderColor="#F0F5F6";//边框同上
var colorful_spacing_GWborderWidth="7";//边框同上
var colorful_spacing_GWborderStyle="solid";//边框同上
var colorful_spacing_GWCBfontSize="15px";
var colorful_spacing_GWCBfontFamily="微软雅黑"; 
var colorful_spacing_GWBNbackgroundColor="#FFFFFF";
var colorful_spacing_GWBNfontColor="#008ACD";//颜色
var colorful_spacing_GWBNborderColor="#FFFFFF";//边框同上
var colorful_spacing_GWmargin="0px";//组件间距同上

//多指标配置
var colorful_spacing_Header_backgroundColor='#39c0b3';//table-表头颜色
var colorful_spacing_Header_fontColor='#eb403b';//table-表头字颜色
var colorful_spacing_Header_fontSize='16px';//table-表头字号
var colorful_spacing_Header_fontFamily='微软雅黑';//table-表头字体
var colorful_spacing_content_fontFamily='微软雅黑';//table-内容字体
var colorful_spacing_content_fontSize='14px';//table-内容字大小
var colorful_spacing_content_fontColor='#666666';//table-内容字颜色
var colorful_spacing_content_lineColor='#ffffff';//table-间隔线颜色（宽度是1个像素）
var colorful_spacing_even_backgroundColor='#fbb735';//table-奇数行颜色
var colorful_spacing_odd_backgroundColor='#e98931';//table-偶数行颜色

var colorful_spacing_border_radius='10px';//圆角  上左、上右、下右、下左  可以1~4个值 （1用于全部的于四个角，2个[上左、下右]、[上右、下左]，3个 [上左]、[上右、下左]、[下右]）
