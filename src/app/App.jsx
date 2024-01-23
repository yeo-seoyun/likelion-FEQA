import './App.css';
import Widget from '../components/Widget/Widget';
import Button from '../components/Button/Button';

// const styles = {
//   app: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//   },
// };

function App() {
  return (
    <div className="app" /*  style={styles.app} */>
      <Widget
        type="partly cloudy"
        temperature={-0.9}
        summary="어제보다 1.3° 낮아요"
        location="서울"
      />
      <Button loading>저장</Button>
      <Widget
        type="rainy"
        temperature={-0.7}
        summary="어제보다 0.1° 높아요"
        location="도쿄"
      />
      <Button inactive>취소</Button>
    </div>
  );
}

export default App;
