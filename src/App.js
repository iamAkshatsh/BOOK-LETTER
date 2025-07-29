import React, { useState } from 'react';
import LoveBook from './LoveBook';
import LockScreen from './LockScreen';

function App() {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (keyword) => {
    if (keyword.toLowerCase() === 'srs') {
      setUnlocked(true);
    } else {
      alert('Wrong keyword! Try again.');
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#c2185b', fontFamily: 'cursive', marginTop: '20px' }}>
        When Pagal Meets Idiot no.2
      </h1>
      {unlocked ? <LoveBook /> : <LockScreen onUnlock={handleUnlock} />}
    </div>
  );
}

export default App;
