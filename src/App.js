import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/css/tailwind.css';
import './assets/css/materialdesignicons.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/loader';
import HomePage from './pages/index';
import BlogPage from './pages/blogPage';
import NotFoundPage from './pages/404';

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
                  <Route path='/' exact={true} element={<HomePage />} />
                  <Route path='/blog/:id' element={<BlogPage />} />
                  <Route path='*' element={<NotFoundPage />} />
                  {/* <Route component={NotFoundPage} /> */}
              </Routes>
          )}
          <ToastContainer></ToastContainer>
      </>
  );
}
export default App;
