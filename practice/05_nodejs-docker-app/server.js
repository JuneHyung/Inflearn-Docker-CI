const express = require('express');

const PORT = 8080; // Express 서버를 위한 포트 설정
// const HOST = '0.0.0.0'; // 호스트 지정

// App
const app = express(); // 새로운 Express 어플 생성
app.get('/', (req, res)=>{ // '/' 경로로 요청이 오면 Hello World를 결과값으로 전달.
  res.send('Hello World!');
});

// app.listen(PORT, HOST); // 해당 포트와 호스트에서 HTTP 서버를 시작
app.listen(PORT); // 해당 포트와 호스트에서 HTTP 서버를 시작
// console.log(`Running on http://${HOST}: ${PORT}`);