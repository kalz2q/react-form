import React from 'react';
import './App.css';
const { useState } = React;
// input の処理
// 05-react-form-multiple-input

function App() {
  // const [inputValue, setInputValue] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<{ isGoing: boolean, numberOfGuests: number }>({ isGoing: true, numberOfGuests: 2 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    let currentValue = inputValue;
    // { currentValue } [name] = value;
    //   // setInputValue(currentValue.name = value);
  };


  return (
    <div className="App">
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={inputValue.isGoing}
            onChange={(e) => handleInputChange(e)} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={inputValue.numberOfGuests}
            onChange={(e) => handleInputChange(e)} />
        </label>
      </form>
    </div >
  );
}

export default App;
