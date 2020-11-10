/* 설치한 express 모듈 불러오기 */
var express = require("express");
var router = express.Router();

const fs = require("fs"); // 파일과 관련된 처리를 할 수 있는 모듈
// 정적파일을 제공하기 위해 미들웨어를 사용하는 코드
// app.use()를 사용하여 원하는 미들웨어를 추가하여 조합할 수 있다
router.use("/css", express.static("../view/css"));
router.use("/js", express.static("../view/js"));

// router.get("/", function (req, res) {
//   res.send({ greeting: "Hello React, Node.js" });
// });

/* get(경로, 함수) : GET 방식으로 / 경로에 접속하면 실행 됨 */
// 서버의 경로를 GET 방식으로 접속하면 호출됨
// 함수를 request와 response 객체를 받는다
// request : 클라이언트에서 전달된 데이터와 정보들이 담겨있다
// response : 클라이언트에게 응답을 위한 정보가 들어있다
router.get("/", function (request, response) {
  console.log("유저가 / 으로 접속했습니다");
  response.send("Hello, Express Server"); // response.send(전달 데이터)
  // fs.readFile("../view/ChatView.html", function (err, data) {
  //   // readFile() 함수는 지정된 파일을 읽어서 데이터를 가져온다
  //   if (err) {
  //     response.send("에러");
  //   } else {
  //     // 클라이언트에게 보낼 내용은 index.html의 내용이다
  //     response.writeHead(200, { "Content-Type": "text/html" }); // html 파일이라는 것을 알리기 위해
  //     response.write(data); // html 데이터를 보내준다
  //     response.end(); // 모두 보냈으면 완료되었음을 알린다
  //   }
  // });
});

module.exports = router;
