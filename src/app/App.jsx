import { app as appClassName } from './App.module.css';
import Exercise from '@/lecture/38-stack-layout-component.jsx';

console.log(appClassName);

function App() {
  return (
    <div className={appClassName}>
      <Exercise />
    </div>
  );
}

export default App;
