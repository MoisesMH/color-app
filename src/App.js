import { Route, Routes } from 'react-router-dom';
import VerifyPathById from './VerifyPathById';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>Hi!</h1>} />
        <Route path='palette/:id' element={<VerifyPathById />} />
      </Routes>
    </div>
  );
}

export default App;
