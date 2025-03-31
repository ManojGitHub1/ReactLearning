import { useState } from 'react';
function Counter() {

  // useState is a hook that allows you to add state to your functional components.
  // It returns an array with two elements: the current state value and a function to update it.
  let [counter, setCount] = useState(5);

  // let counter = 5;
  const addValue = () => {
    counter++;
    setCount(counter);
    console.log(counter);
  };

  const subtractValue = () => {
    counter--;
    setCount(counter);
    console.log(counter);
  };

  const resetValue = () => {
    counter = 0; 
    setCount(counter);
    console.log(counter);
  };


  return (
    <>
      <h1>My Vite App</h1>
      <p>This is a counter component.</p>
      <p>Counter value: {counter}</p>

      {/* it's not updating because UI updation is handled by react and is hooks */}
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subtractValue}>Subtract value</button>
      <br />
      <button onClick={resetValue}>Reset value</button>
    </>
  );
}

export default Counter;