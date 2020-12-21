// vue.config.js
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // 配置 @ 符号为项目根目录（src）
    }
}