import { useState } from 'react';

function ExampleButton() {
  const [count, setCount] = useState(1);
  
  function handleClick_1() {
    setCount(count + 1);
  }

  function handleClick() {
    alert('You clicked me!');
  }
  

    return (
      <button onClick={handleClick_1}>Clicked {count} times</button>
    );
  }

export default ExampleButton;