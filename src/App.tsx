import React, { useState } from 'react';
// import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('A name was submitted: ' + inputValue);
    console.log(inputValue);
    setInputValue("");
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input type="text"
            // value={this.state.value}
            value={inputValue}
            onChange={(e) => handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
