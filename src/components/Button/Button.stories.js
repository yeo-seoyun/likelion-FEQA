// 컴포넌트 불러오기
import Button from './Button';

// 기본 내보내기
// 컴포넌트 스토리 메타 정보(객체)
const storyMeta = {
  title: 'components/Button',
  component: Button,
  // props 객체
  args: {
    children: '최강! 8기를 응원해주세요! 😉',
  },
};

export default storyMeta;

// 컴포넌트 스토리 1+
export const Primary = {};
