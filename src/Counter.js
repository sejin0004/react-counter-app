import React, { useState } from "react";

export default () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
};
