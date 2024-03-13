import React from "react";
import { useOperationsContext } from "../context/OperationsContext";
import { toast } from "react-toastify";

function ButtonAdd({idProduct}) {
    const { AddProducts } = useOperationsContext();

    return (
        <button className="btn btn-secondary " onClick={() => {
            AddProducts(idProduct);
            toast.success("Agregaste el producto al carro");
        }}>Añadir 🛒</button>
    );
}

export default ButtonAdd;