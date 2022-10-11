import React from 'react';
import './App.css';
const { useState } = React;
// input の処理
// 05-react-form-multiple-input

function App() {
  const [inputValue, setInputValue] = useState<{ isGoing: boolean, numberOfGuests: number }>({ isGoing: true, numberOfGuests: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setInputValue(values => ({ ...values, [name]: value }))

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue)
  }
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Is going:
          <input
            type="checkbox"
            name="isGoing"
            checked={inputValue.isGoing}
            // value={inputs.username || ""}
            onChange={(e) => handleInputChange(e)}
          />
        </label>          <p></p>
        <label>Enter your age:          <p></p>
          <input
            type="number"
            name="numberOfGuests"
            value={inputValue.numberOfGuests || 0}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <p></p>
        <input type="submit" />
      </form>
    </div >
  );
}

export default App;
