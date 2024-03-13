import React from "react";
import { useUserContext } from "../context/UserContext";
import ButtonAdd from "../components/ButtonAdd";
import { useNavigate } from "react-router-dom";

import "../assets/css/product.css";

export default function Menu() {
    const { products } = useUserContext();
    const navigate = useNavigate()

    return (
        <div>
            <div className="product ">
                {products.map(item => (
                    <div className="row-cols-1 row-cols-md-1" key={item.id}>
                        <div className="col">
                            <div className="card h-100">
                                <img src={item.img} className="card-img-top " alt={item.name} />
                                <hr />
                                <div>
                                    <h3 className="fs-4 text-center">{item.name}</h3>
                                </div>
                                <div className="card-footer">

                                    <h5 className="text-muted">$ {item.price}</h5>
                                    <h5 className="text-muted">👨🏼‍💼 {item.cantidad}</h5>
                                    <div className="buttonProduct">
                                        <button className="btn btn-secondary" onClick={() => {
                                            navigate(`/DetalleProduct/${item.id}`);
                                        }}>Ver más 👀</button>
                                        <ButtonAdd idProduct={item.id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
