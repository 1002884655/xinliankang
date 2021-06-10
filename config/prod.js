module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    HOST: '"https://zcloud.njyunzhi.com"', //正式
    WSS_HOST: '"wss://zcloud.njyunzhi.com"',
    OSS_PATH: '"https://zhiyun-image.oss-accelerate.aliyuncs.com/"',
    OSS_FAST_PATH: '"https://zhiyun-image.oss-accelerate.aliyuncs.com/"',
    Version: '"V3.5.29-20201112"'
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
