import React from "react";
import { createRoot } from "react-dom/client";

// 함수 컴포넌트 (important syntax!!!)
// declare function
function App() {
  return (
    <div id="app" lang="en">
      {/* JSX 주석 : JavaScript 식 사용 (값!) */}
      <h1>
        {`hello react!`.toUpperCase()} <span style={{ fontSize: 80 }}>⚛</span>
      </h1>
    </div>
  );
}

// arrow function
// 화살표 함수
// const App = () => {
//   <div id="app" lang="en">
//     <h1>
//       Hello React
//       {' '}
//       <span style={{ fontSize: 80 }}>⚛</span>
//     </h1>
//   </div>
// };

createRoot(document.getElementById("root"))
  // React에서 사용할 수 없는 코드
  // .render(App());
  // React API 구문
  // .render(React.createElement(App));
  // JSX 구문
  .render(<App />);

const element1 = React.createElement("div");
const element2 = <div />;
// const element1 = React.createElement(App);
// const element2 = <App />;

// console.log(element1);
// console.log(element2);
