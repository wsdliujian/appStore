module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "appId": "AppStore",
                "productName":"AppStore",//项目名，也是生成的安装文件名，即aDemo.exe
                "copyright":"Copyright © 2021",//版权信息
                "directories":{
                    "output":"./dist"//输出文件路径
                },
                "win":{//win相关配置
                    "icon":"./src/assets/img/app.ico",//图标，当前图标在根目录下，注意这里有两个坑
                    "target": [
                        {
                            "target": "nsis",//利用nsis制作安装程序
                            "arch": [
                                "x64"//64位
                            ]
                        }
                    ]
                },
                "nsis": {
                    "oneClick": false, // 是否一键安装
                        "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                        "allowToChangeInstallationDirectory": true, // 允许修改安装目录
                        "installerIcon": "../src/assets/img/app.ico",// 安装图标
                        "uninstallerIcon": "./src/assets/img/app.ico",//卸载图标
                        "installerHeaderIcon": "./src/assets/img/app.ico", // 安装时头部图标
                        "createDesktopShortcut": true, // 创建桌面图标
                        "createStartMenuShortcut": true,// 创建开始菜单图标
                        "shortcutName": "AppStore" // 图标名称
                }
            },
            nodeIntegration: true
        }

    },
    //vue-cli3.0 里面的 vue.config.js做配置
    devServer: {
        proxy: {
            '/': {     //这里最好有一个 /
                target: 'http://192.168.0.171:30891',  // 后台接口域名
                changeOrigin: true,  //是否跨域
            }
        }
    }
}