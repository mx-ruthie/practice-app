import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (

    <>
      <div> Count = {count} </div>

      <button onClick={() => setCount(count + 1)}> Plus 1 </button>
      <button onClick={() => setCount(count - 1)}> Minus 1 </button>
      <button onClick={() => setCount(0)}> Reset Count </button>
      
    </>
  );
};

export default Counter;