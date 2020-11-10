/* 설치한 express 모듈 불러오기 */
const express = require("express");

/* express 객체 생성 */
const app = express();

const api = require("./routes/route");

app.use("/api/chat", api);
// app.use("/css", express.static("./view/css"));
// app.use("/js", express.static("./view/js"));

/* listen(포트, 리스너) : 서버를 포트로 listen */
// 지정한 포트로 서버를 실행하고, 실행이 되면 리스너가 호출됨
const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
