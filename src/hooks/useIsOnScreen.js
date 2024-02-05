const { useRef, useLayoutEffect } = require('react');

function useIsOnScreen() {
  const elementRef = useRef(null);

  // useEffect vs. useLayoutEffect
  // 실행시점이 다름 (DOM Commit 이후 즉시 실행되는 것이 useLayoutEffect)
  // painting 이후에 실행되는 것은 useEffect
  useLayoutEffect(() => {});
}
