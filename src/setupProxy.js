//프록시 서버 설정
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {

  //Authentication Service
  app.use(
    "/api/auth",
    createProxyMiddleware({
      // target: "http://localhost:9000",
      target: "http://ec2-3-35-119-242.ap-northeast-2.compute.amazonaws.com:9000",
      changeOrigin: true,
    })
  );

  // Account Service
  app.use(
    "/api/accounts",
    createProxyMiddleware({
      // target: "http://localhost:9005",
      target: "http://ec2-3-35-119-242.ap-northeast-2.compute.amazonaws.com:9010",
      changeOrigin: true,
    })
  );

  // Todo Service
  app.use(
    "/api/todos",
    createProxyMiddleware({
      // target: "http://localhost:9002",
      target: "http://ec2-3-35-119-242.ap-northeast-2.compute.amazonaws.com:9002",
      changeOrigin: true,
    })
  );

  // Group Service
  app.use(
    "/api/groups",
    createProxyMiddleware({
      // target: "http://localhost:9003",
      target: "http://ec2-3-35-119-242.ap-northeast-2.compute.amazonaws.com:9003",
      changeOrigin: true,
    })
  );

  // Point Service
  app.use(
    "/api/points",
    createProxyMiddleware({
      // target: "http://localhost:9004",
      target: "http://ec2-3-35-119-242.ap-northeast-2.compute.amazonaws.com:9004",
      changeOrigin: true,
    })
  );

};
