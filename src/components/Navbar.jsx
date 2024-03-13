import { NavLink } from "react-router-dom";
import { useOperationsContext } from "../context/OperationsContext";
import "../assets/css/navFooter.css";


export default function Navbar() {

  const { FormatCoin, total } = useOperationsContext()
  return (

    <div className="">

      <div className="d-flex  mb-3  fs-4 " id="navbar">
        <NavLink to="/" className="m-3 p-2 text-light text-decoration-none mx-5">Tatoo Night</NavLink>

        <NavLink to="/product" className="m-3 p-2 text-light text-decoration-none mx-5"> 🖌️ Producto</NavLink>
        <NavLink to="/contact" className="m-3 p-2 text-light text-decoration-none mx-5">✉️ Contact</NavLink>
        <NavLink to="/car" className="m-3 ms-auto p-2 text-light text-decoration-none mx-5">🛒{FormatCoin(total)}</NavLink>
      </div>
    </div>

  );
}
