import React, { useState } from 'react';
import FontList from './Font';

const App = () => {
  const [text, setText] = useState("Ravi");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Enter text</h2>
        <input type="text" name="text" placeholder='enter text' value={text} onChange={handleTextChange} />
        <br />
        <br />
        <input type="submit" value="Enter" />
      </form>

      <h2>Here is your value with different fonts</h2>
      <br />
      <FontList text={text} />
    </>
  )
}

export default App;