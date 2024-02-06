import { useId, forwardRef } from 'react';
import { A11yHidden } from '..';

function FormInput(
  {
    as: ComponentName = 'div',
    name,
    type = 'text',
    label,
    placeholder,
    value,
    onChange,
    gap = 4,
    style: customStyle,
    hiddenLabel = false,
    inputProps = {},
    ...restProps
  },
  ref
) {
  const id = useId();

  let labelElement = <label htmlFor={id}>{label}</label>;

  if (hiddenLabel) {
    labelElement = (
      <A11yHidden as="label" htmlFor={id}>
        {label}
      </A11yHidden>
    );
  }

  return (
    <ComponentName
      style={{
        display: 'flex',
        gap,
        ...customStyle,
      }}
      {...restProps}
    >
      {labelElement}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
        ref={ref}
      />
    </ComponentName>
  );
}

// 고차 컴포넌트 내보내기
// 상위 컴포넌트가 ref 속성을 전달해서 DOM객체에 접근할 수 있음
export default forwardRef(FormInput);
