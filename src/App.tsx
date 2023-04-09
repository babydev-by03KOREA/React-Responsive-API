import React from 'react';
import {Mobile, Pc} from './Responsive';

function App() {
  return (
      <React.Fragment>
        <Mobile>iOS</Mobile>
        <Pc>macOS</Pc>
      </React.Fragment>
  );
}

export default App;
