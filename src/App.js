import './App.css';
import { Mobile, Pc } from './hooks/responsive';
import { Route, Routes } from 'react-router-dom';
import M_HOME from './mobile_pages/M_HOME';
import P_HOME from './pc_pages/P_HOME';
import M_INFO from './mobile_pages/M_INFO';

function App() {
  return (
    <div className="App">
      <Mobile>
        <Routes>
          <Route path='/' element={<M_HOME />} />
          <Route path='/info' element={<M_INFO />} />
        </Routes>
      </Mobile>

      <Pc>
        <Routes>
          <Route path='/' element={<P_HOME />} />
        </Routes>
      </Pc>
    </div>
  );
}

export default App;
