import React from 'react';
import classes from './CountUp.module.css';

function CountUp({ count: initialCount = 0 }) {
  // 아래 방식은 리액트에서 변화를 알 수 없다.
  // let count = initialCount;

  // 리액트의 방식(API)을 사용해야 리액트가 변화를 알 수 있다.
  // React.useState(초깃값: 초기 상태 값)
  // const stateValue = React.useState(initialCount); // [value, updater]
  // console.log(stateValue);

  // 리액트의 작동 흐름 = 단방향 데이터 흐름(one-way data flow)
  // const countValue = stateValue[0]; // 리액트의 상태 값
  // const updateCount = stateValue[1]; // 리액트의 상태 값을 업데이트 하는 함수

  const [count, setCount] = React.useState(initialCount); // [value, updater]

  const handleCountUp = () => {
    // console.log('clicked button');
    // 변이(mutation) : 변경(update) 시도
    // 과연?????????????
    // count = count + 1;
    // console.log(count);

    setCount(count + 1);
  };

  return (
    <div className={classes.CountUp}>
      {/* 읽기(read) → 출력(print) */}
      <output>{count}</output>
      <button
        type="button"
        className={classes.button}
        aria-label="카운트 1업"
        // 쓰기(write) → 요청(request)
        onClick={handleCountUp}
      >
        +1
      </button>
    </div>
  );
}

export default CountUp;
