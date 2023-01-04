import { useState, useCallback, useEffect } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const onClick = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      <h1 className="active">hello {counter}</h1>
      <button onClick={onClick}>+</button>
    </div>
  );
}
