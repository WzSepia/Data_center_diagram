
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('dark3purple', {
        "color": themeDataDTO.getThemeData("dark3purple_colorPalette"),
        "backgroundColor": themeDataDTO.getThemeData("dark3purple_backgroundColor"),
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": themeDataDTO.getThemeData("dark3purple_fontColor")
            },
            "subtextStyle": {
                "color": "#cccccc"
            }
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "7",
            "symbol": "circle",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "7",
            "symbol": "circle",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "normal": {
                    "barBorderWidth": 0,
                    "barBorderColor": "#cccccc"
                },
                "emphasis": {
                    "barBorderWidth": 0,
                    "barBorderColor": "#cccccc"
                }
            }
        },
        "pie": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "gauge": {
        	"axisLine": {
                "lineStyle": {
                    "color": [[0.2, themeDataDTO.getThemeData("dark3purple_gaugeAxisLineColor")[0]],[0.8,themeDataDTO.getThemeData("dark3purple_gaugeAxisLineColor")[1]],[1, themeDataDTO.getThemeData("dark3purple_gaugeAxisLineColor")[2]]]
                }
            },
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#e098c7",
                    "color0": "transparent",
                    "borderColor": "#e098c7",
                    "borderColor0": "#8fd3e8",
                    "borderWidth": "2"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "color": "#aaaaaa"
                }
            },
            "symbolSize": "7",
            "symbol": "circle",
            "smooth": true,
            "color": themeDataDTO.getThemeData("dark3purple_colorPalette"),
            "label": {
                "normal": {
                    "textStyle": {
                        "color": themeDataDTO.getThemeData("dark3purple_labelColor")
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#444444",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(224,152,199,1)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(255,255,255)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#444444",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(224,152,199,1)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(255,255,255)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#cccccc"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eeeeee",
                        "#333333"
                    ]
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#cccccc"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eeeeee",
                        "#333333"
                    ]
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#cccccc"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eeeeee",
                        "#333333"
                    ]
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#cccccc"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eeeeee",
                        "#333333"
                    ]
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#999999"
                },
                "emphasis": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#cccccc"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#8fd3e8",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#8fd3e8",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#8fd3e8"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#8fd3e8",
                    "borderColor": "#8fd3e8",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#8fd3e8",
                    "borderColor": "#8fd3e8",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#8fd3e8",
                "borderColor": "rgba(138,124,168,0.37)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#8fd3e8"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#8fd3e8"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#8a7ca8",
                "#e098c7",
                "#cceffa"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(0,0,0,0)",
            "dataBackgroundColor": "rgba(255,255,255,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        }
    });
}));
