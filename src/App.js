import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/css/tailwind.css';
import './assets/css/materialdesignicons.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/loader';
import IndexThree from './pages/index-three';
import BlogPage from './pages/blogPage';
import Indfive from './pages/index-five';

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
                  <Route path='/' exact={true} element={<IndexThree />} />
                  <Route path='/blog/:id' element={<BlogPage />} />
                  <Route path='/blogs/:id' element={<Indfive />} />
              </Routes>
          )}
          <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
