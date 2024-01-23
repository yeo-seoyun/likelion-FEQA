import './Button.css';

// props: { loading, inactive, disabled, moden type, state, ... }

function Button(props) {
  let buttonLable = props.children;

  if (props.loading) {
    buttonLable = '로딩 중...';
  }
  return (
    <button
      type={props.type ?? 'button'}
      className="Button"
      disabled={props.disable}
    >
      {buttonLable}
    </button>
  );
}

export default Button;
