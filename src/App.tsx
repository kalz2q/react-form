import React from 'react';
import './App.css';

const { useState } = React;
// select タグの処理

function App() {
  const [value, setValue] = useState(["coconut", "mango"]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setValue([e.target.value]);
    setValue(["mango", "lime"]);
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert("Your favorite flavor is: " + value);
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Pick your favorite flavor:<p></p>
          <select multiple={true} value={value} onChange={(e) => handleChange}>
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
