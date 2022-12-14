
import React from 'react';
import './App.css';

// text field demo

function App() {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
  }
  
  return (
    <div className="App">
      <h2>テキストフィールド</h2>
      <div className="container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
        <p>入力値: {inputValue}</p>
      </div>
    </div >
  );
}

export default App;
