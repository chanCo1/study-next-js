import { useState, useCallback, useEffect } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const onClickPlus = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const onClickMinus = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  return (
    <div>
      <Seo title={"Home"} />

      <h1 className="active">hello {counter}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}
