import React, { useState } from "react";

function App() {

  const [HeadingText, setHeadingText] = useState("Hello")

  const [isMousedOver, setMouseOver] = useState(false)

  function handleClick() {
    setHeadingText("Welcome")
  }

  function handleMouseOver() {
    setMouseOver(true)
    console.log(MouseOver)
  }

  function handleMouseOut () {
    setMouseOver(false)
  }

  return (
    <div className="container">
      <h1>{HeadingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
      style={{ backgroundColor: isMousedOver ? "black" : "white" }}

      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >Submit</button>
    </div>
  );
}

export default App;
