// import React from 'https://esm.sh.jsx' // 불러올 수 없음

// React, ReactDom

// @ts-ignore
const { createRoot } = ReactDOM;

const createApp = () => {
    return (
        <div id="app">
            <h1>안녕!<br />리액트</h1>
            <p>리액트는 오픈 소스 자바스크립트 라이브러리입니다.</p>
        </div>
    );
};

const rootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElement);
root.render(createApp());