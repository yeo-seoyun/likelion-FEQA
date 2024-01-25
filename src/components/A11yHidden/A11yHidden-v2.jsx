// 내보낸 모듈이 없다.
// import './A11yHidden.css';

// 내보낸 모듈이 있다면?
import classes from './A11yHidden.module.css';

console.log(classes);

function A11yHidden({ as: ComponentName = 'span', ...restProps }) {
  return (
    <ComponentName
      className={classes.group}
      // style={styles}
      {...restProps}
    />
  );
}

export default A11yHidden;
