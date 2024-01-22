import React from "react";
import { createRoot } from "react-dom/client";

// 컴포넌트 재사용 방법

// div (.formControl)> label + input
function FormControl() {
  return (
    <div className="formControl">
      <label htmlFor="username">이름</label>
      <input type="text" name="username" id="username" />
    </div>
  );
}

// 컴포넌트 변형 (Variants)

function App() {
  return (
    <div id="app">
      {/** 컴포넌트 추출 */}
      <FormControl />
      <FormControl />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
