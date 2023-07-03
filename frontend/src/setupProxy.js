const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api', '/uploads'],
    createProxyMiddleware({
      target: 'http://127.0.0.1:5010',
      changeOrigin: true,
    })
  );
};