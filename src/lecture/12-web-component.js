// 웹 컴포넌트 API (웹 표준)
// 슬롯(Slot)

// 컴포넌트
class Stack extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
          <div class="euid-stack">
              <h2>
                  <slot name="headline"></slot>
              </h2>
              <p>
                  <slot name="description"></slot>
              </p>
          </div>
      `;
  }
}

if ('customElements' in globalThis) {
  customElements.define('euid-stack', Stack);
}

// -------------------------------------------------------------------------

// // 웹 컴포넌트 API (웹 표준)
// // globalThis.customElements.define('custom-element', CustomComponent)
// // <custom-element></custom-element>

// // new jsx tranform
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import SearchBar from '../exercises/01-searchbar/component/SearchBar';

// // h('div', { className: 'app' }, [h('span', {}, 'hi'), ' ', h('span', {}, 'react')])

// // 함수 컴포넌트는 인스턴스를 사용할 때, 속성(props)을 전달 받는다.
// // 자식들(children) 속성(prop)
// // <div class="app">
// //  <span>hi</span> <span>react</span>
// // </div>

// function App() {
//   return (
//     <div id="app">
//       {/* 인스턴스, 엘리먼트, 객체 */}
//       <SearchBar />
//     </div>
//   );
// }

// // React.createElement(React.StrictMode)

// // src/main.jsx
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
