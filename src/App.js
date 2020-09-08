import React, { useState } from 'react';

import State from './examples/State'
import Effect from './examples/Effect';


function App() {
  const [hidden, setHidden] = useState(false);

  setTimeout(() => {
    setHidden(true);
  }, 3000);

  return (
    <>
      <h1>useState</h1>
      <State />
      <h1>useEffect</h1>
      {!hidden && <Effect />}
    </>
  );
}

export default App;
