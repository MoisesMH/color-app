import { Route, Routes, Navigate } from 'react-router-dom';
import VerifyPathById from './VerifyPathById';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import VerifyPathByColorId from './VerifyPathByColorId';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors} />} />
        <Route path='palette/:id' element={<VerifyPathById palettes={seedColors} />} />
        <Route path='palette/:paletteId/:colorId' element={<VerifyPathByColorId palettes={seedColors} />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
