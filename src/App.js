import React, { Suspense } from 'react';
import './App.css';
import {Blocks} from 'react-loader-spinner';
import "react-loader-spinner";
const AboutUs = React.lazy(() => import ('./components/AboutUs'));
const Packages = React.lazy(() => import('./components/Packages'));

function App() {
  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      
      <div className="contents">
        <Suspense fallback={<Blocks
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
/>}>
          <AboutUs />
          <Packages />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
