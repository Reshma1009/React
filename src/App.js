import { useState,useEffect } from "react";

function App () {
/*   let [ number, setNumber ] = useState( 10 );
  let counter = () => {
    number++
    setNumber(number)
  }
  useEffect(() => {
   console.log("this is use effect");
  }, []) */
  
  let [ show, setShow ] = useState( false );
  let showHide = () => {
    setShow(!show)
  }

  return (
    <>
      {/* <h1>{ number}</h1> */ }
    {show?<div style={box}></div>:""}
      
    <button onClick={showHide}>click me</button>
    
    </>
  );
}

let box =
{
  background: "green",
  width: "300px",
  height:"300px"
}

export default App;
