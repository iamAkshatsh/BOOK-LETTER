import React, { useState } from 'react';

const LockScreen = ({ onUnlock }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUnlock(input);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #1c1c1c, #2e003e)',
        color: '#ffb6c1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'cursive',
      }}
    >
      <h2 style={{ fontSize: '26px', marginBottom: '30px' }}>
        Enter the magic word to open the love book
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter keyword"
          style={{
            padding: '12px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            width: '200px',
            background: '#2c003e',
            color: '#fff',
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          style={{
            padding: '10px 25px',
            backgroundColor: '#800080',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Open Book
        </button>
      </form>
    </div>
  );
};

export default LockScreen;
