import { Route, Routes } from 'react-router-dom';
import VerifyPathById from './VerifyPathById';
import seedColors from './seedColors';
import PaletteList from './PaletteList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors} />} />
        <Route path='palette/:id' element={<VerifyPathById palettes={seedColors} />} />
      </Routes>
    </div>
  );
}

export default App;
