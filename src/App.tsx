import React, { useState } from 'react';
// const {useState} = React;
import './App.css';
// select タグの処理

function App() {
  const [inputValue, setInputValue] = useState("Please write an essay about your favorite DOM element.");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert("An essay was submitted: " + inputValue);
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Essay:
          <textarea className="textarea"
            value={inputValue}
            onChange={(e) => handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
