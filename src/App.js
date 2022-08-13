import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  (function () {
    console.log(generatePalette(seedColors[4]));
  }())
  return (
    <div className="App">
      {/* You can change from the objects list from seedColors */}
      <Palette {...seedColors[5]} />
    </div>
  );
}

export default App;
