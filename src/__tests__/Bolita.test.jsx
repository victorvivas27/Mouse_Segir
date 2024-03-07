import { mockFunction } from "vitest";
import { Bolita } from "../components/Bolita";
import {  render } from "@testing-library/react";

describe("Bolita", () => {
  test("activa y desactiva la función al hacer clic en el botón", () => {
    // Creamos una función simulada para pasar como prop al componente
    const setActivar = mockFunction;

    // Renderizamos el componente con la función simulada
    const {} = render(<Bolita setActivar={setActivar} activar={true} />);
  });
});
