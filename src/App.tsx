import React from 'react';
import './App.css';
const { useState } = React;

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(inputs)
  }
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div >
  );
}

export default App;
