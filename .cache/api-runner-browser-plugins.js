module.exports = [{
      plugin: require('../../node_modules/gatsby-plugin-scroll-reveal/gatsby-browser.js'),
      options: {"plugins":[],"threshold":0.15,"once":true,"disable":false,"selector":"[data-sal]","animateClassName":"sal-animate","disabledClassName":"sal-disabled","rootMargin":"0% 50%","enterEventName":"sal:in","exitEventName":"sal:out"},
    },{
      plugin: require('../../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Spectral: 300,400,600,700","Source Sans Pro: 200,300,400,600,700,900","Source Code Pro"]}},
    },{
      plugin: require('../../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
