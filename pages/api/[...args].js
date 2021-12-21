const { createProxyMiddleware } = require('http-proxy-middleware');

export default createProxyMiddleware({ target: 'http://yuanjin.tech:5100/', changeOrigin: true });
