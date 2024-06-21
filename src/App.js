import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/css/tailwind.css';
import './assets/css/materialdesignicons.min.css';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/loader';
import IndexThree from './pages/index-three';

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
                  <Route path='/' element={<IndexThree />} />
                  {/* <Route path='/index-one' element={<Index/>}/>
                  <Route path='/index-two' element={<IndexTwo/>}/>
                  <Route path='/index-four' element={<IndexFour/>}/>
                  <Route path='/index-five' element={<IndexFive/>}/>
                  <Route path='/index-six' element={<IndexSix/>}/>
                  <Route path='/index-seven' element={<IndexSeven/>}/> */}
              </Routes>
          )}
      </>
  );
}

export default App;
