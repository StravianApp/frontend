import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';
import { useEffect, useState } from 'react';

import Layout from './Layout';
import DownloadPage from './pages/download-page/DownloadPage';
import Nest from './pages/nest/Nest';
import Offline from './pages/offline/Offline';

const isOnline = () => (
  typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
  ? navigator.onLine
  : true
);

function App() {
  const [onlineStatus, setOnlineStatus] = useState(isOnline());

  const setOnline = () => setOnlineStatus(true);
  const setOffline = () => setOnlineStatus(false);
 
  useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);
    
    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    }
  }, []);

  if (!onlineStatus) return <Offline />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DownloadPage />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Nest />} />
          <Route path="offline" element={<Offline />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
