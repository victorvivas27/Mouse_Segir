/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Bolita.css";

export const Bolita = ({setActivar,activar,posicion,setPosicion}) => {
  useEffect(() => {
    const manejarMovimiento =(evento)=>{
      const {clientX,clientY} = evento;
      console.log("manejar movimiento",{clientX,clientY});
      setPosicion({x:clientX,y:clientY})
    }
    if(activar){
      window.addEventListener("pointermove",manejarMovimiento);
    }
      // Limpiar el evento cuando el componente se desmonta
      return () => {
        window.removeEventListener("pointermove", manejarMovimiento);
      };
      
  }, [activar,setPosicion]);
  useEffect(() => {
    document.body.classList.toggle("no-cursor",activar)
    return () => {
      document.body.classList.remove("no-cursor")
    }
  },[activar])
  
  return (
    <>
    <main className="main-bolita">
      <div style={{
        position: "absolute",
        pointerEvents:"none",
        backgroundColor: "red",
        borderRadius: "50%",
        opacity:0.4,
        border: "1px solid black",
        left:-20,
        top:-20,
        width: 40,
        height: 40,
        transform: `translate(${posicion.x}px, ${posicion.y}px)`, 
      
      }}/>
       <button className="boton-bolita-activar" onClick={()=>setActivar(!activar)} >{activar ? "Desactivar":"Activar"} </button>
      </main>
    </>
  )
}
