import { createRoot } from 'react-dom/client';
import FormControl from '@/components/FormControl';

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

createRoot(document.getElementById('root')).render(<App />);
