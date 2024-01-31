// 바닐라 스크립트 방식
// jQuery 라이브러리 방식
// = 명령형 프로그래밍

// 리엑트의 방식 = 선언형 프로그래밍
// ?
// => 상태를 선언하여야 한다!

import { useState } from 'react';
import { A11yHidden, FormInput } from '../components';

function Exercise() {
  return (
    <div>
      <h2>폼 컨트롤</h2>
      <FormExample />
    </div>
  );
}

const INITIAL_FEEL_MESSAGE = '공부하기 좋은 날이네~';

// 컴포넌트 추출
function FormExample() {
  const [feelMessage, setFeelMessage] = useState(INITIAL_FEEL_MESSAGE);

  const handleUpdateFeelMessage = (nextMessage) => {
    setFeelMessage(nextMessage);
  };

  const handleChange = (e) => {
    setFeelMessage(e.target.value);
  };

  return (
    <>
      <form>
        <FormInput
          label="오늘 기분"
          placeholder={INITIAL_FEEL_MESSAGE}
          value={feelMessage}
          onChange={handleChange}
        />
        <ButtonGroup
          onUpdate={handleUpdateFeelMessage}
          resetMessage={INITIAL_FEEL_MESSAGE}
        />
        <FormOutput outputValue={feelMessage} />
        <FormTextarea value={feelMessage} onChange={handleChange} />
      </form>
    </>
  );
}

function FormTextarea({ value, onChange }) {
  return (
    <div
      style={{
        border: '1px solid',
        marginBlock: 12,
        borderRadius: 6,
        padding: 20,
        backgroundColor: '#fff',
      }}
    >
      <A11yHidden as="label" htmlFor="feel-today-textarea">
        오늘 기분
      </A11yHidden>
      <textarea id="feel-today-textarea" value={value} onChange={onChange} />
    </div>
  );
}

function ButtonGroup({
  onUpdate,
  displayMessage = '맑음',
  resetMessage = '날씨 모름',
}) {
  return (
    <div style={{ marginBlockStart: 12, display: 'flex', gap: 4 }}>
      <button
        type="button"
        onClick={() => {
          onUpdate?.(displayMessage);
        }}
      >
        표시
      </button>
      <button
        type="button"
        onClick={() => {
          onUpdate?.(resetMessage);
        }}
      >
        초기화
      </button>
    </div>
  );
}

function FormOutput({ outputValue }) {
  return (
    <div
      style={{
        border: '1px solid',
        marginBlock: 12,
        borderRadius: 6,
        padding: 20,
        backgroundColor: '#fff',
      }}
    >
      <output>{outputValue}</output>
    </div>
  );
}

export default Exercise;
