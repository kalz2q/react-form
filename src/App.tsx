import React from 'react';
import './App.css';
const { useState } = React;
// select タグの処理

function App() {
  const [inputValue, setInputValue] = useState(["coconut"]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentValue: string[] = inputValue;
    currentValue.push(e.target.value);
    setInputValue(currentValue);
    // setInputValue(["mango", "lime"]);
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // alert("Your favorite flavor is: " + inputValue.value);
    // console.log(e.target.value);
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Pick your favorite flavor:<p></p>
          <select multiple={true} value={inputValue} onChange={(e) => handleChange(e)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div >
  );
}

export default App;
