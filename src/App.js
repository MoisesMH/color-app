import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <div className="App">
      {/* You can change from the objects list from seedColors */}
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
