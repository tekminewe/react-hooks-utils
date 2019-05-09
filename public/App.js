import React, { useState } from 'react';

import useDebounce from '../hooks/useDebounce';

function App() {
  const [value, setValue] = useState('');
  const debouceValue = useDebounce(value, 5000);
  return (
    <div>
      <p>{debouceValue}</p>
      <button onClick={e => setValue('good')} />
    </div>
  );
}

export default App;
