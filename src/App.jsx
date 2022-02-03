import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';

import Layout from './Layout';
import Nest from './pages/nest/Nest';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Nest />} />

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes> 
  );
}

export default App;
