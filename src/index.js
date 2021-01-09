import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
   document.getElementById('root')
);

//element를 생성하고 ReactDom에 rendering 시키기
// const element = <h1>Hello, world!</h1>;
// ReactDom.render(
//   element,
//   document.getElementById('root') 
// );

// function tick(){
//   const element=(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000); 
//1초마다 함수 호출되면서 element가 생성되고 새로 rendering
//state change->Compute Diff->Re-render
//시간이 바뀌고->다시 계산을 하고->다시 rendering

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
