import { useState, useCallback, useEffect } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const onClick = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      <NavBar />
      <h1>hello {counter}</h1>
      <button onClick={onClick}>+</button>

      {/* <style jsx>{`
        nav {
          color: #fff;
        }
      `}</style> */}
    </div>
  );
}
