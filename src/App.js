import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/css/tailwind.css';
import './assets/css/materialdesignicons.min.css';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/loader';
import HomePage from './pages/index';
import NotFoundPage from './pages/404';
import WhoWeAre from './pages/whoWeAre';
import ServicePage from './pages/services';
import Industries from './pages/industries';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
  }, []);

  return (
      <>
          {loading ? (
              <Loader />
          ) : (
              <Routes>
                  <Route path='/' exact element={<HomePage />} />
                  <Route path='/about-us' element={<WhoWeAre />} />
                  <Route path='/service' element={<ServicePage />} />
                  <Route path='/industries' element={<Industries />} />
                  <Route path='*' element={<NotFoundPage />} />
              </Routes>
          )}
          <ToastContainer />
      </>
  );
}

export default App;
