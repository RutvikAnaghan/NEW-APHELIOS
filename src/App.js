import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/css/tailwind.css';
import './assets/css/materialdesignicons.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/loader';
import IndexThree from './pages/index-three';
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
                  <Route path='*' element={<Navigate to='/' replace />} />

                  {/* <Route path='/index-one' element={<Index/>}/>
                  <Route path='/index-two' element={<IndexTwo/>}/>
                  <Route path='/index-four' element={<IndexFour/>}/>
                  <Route path='/index-five' element={<IndexFive/>}/>
                  <Route path='/index-six' element={<IndexSix/>}/>
                  <Route path='/index-seven' element={<IndexSeven/>}/> */}
              </Routes>
          )}
          <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
