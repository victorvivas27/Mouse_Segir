
import { useState } from "react";

import { Bolita } from "./components/Bolita";

export function App() {
  const [activar, setActivar] =useState(false);
  const[posicion, setPosicion] = useState({x:0, y:0})
  
  return (
    <>
      <Bolita 
      setActivar={setActivar}
       activar={activar}
       posicion={posicion}
       setPosicion={setPosicion} />
    </>
  );
}
