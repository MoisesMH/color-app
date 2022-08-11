import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      {/* You can change from the objects list from seedColors */}
      <Palette {...seedColors[5]} />
    </div>
  );
}

export default App;
