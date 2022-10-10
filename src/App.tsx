import React from 'react';
import './App.css';
const { useState } = React;

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
    alert(`The name you entered was: ${name}`)
  }
  return (
    <div className="App">
      <form>
        <label>
          Enter your name:
          <p></p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </div >
  );
}

export default App;
