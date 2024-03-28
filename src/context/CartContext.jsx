import { createContext, useContext, useState } from "react"
import { useUserContext } from "./ItemListContext"



//OPERACIONES

export const OperationsContext = createContext()

export default function OperationsContextProvider({ children }) {

    const { products } = useUserContext()
    const [carro, setCarro] = useState([])

 
    //FORMATEADOR VALOR A CLP
    const FormatCoin = (number) => 
        ( new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(number))
    
    //CALCULO TOTAL
    let total = 0
    carro.map((i) => (
        total += Number(i.precio) * Number(i.cantidad)
    ))
    


    //SUMAR Productos
    const AddProducts = (idProduct) => {
        const productSeleccionado = products.find(item => item.id === idProduct)       
        if (carro.find(item => item.id === idProduct)) {                          
            setCarro(carro.                                                       
                map((i) => {
                    if (i.id === idProduct) {                                     
                        return { ...i, cantidad: Number(i.cantidad) + 1 }
                    } else {                                                   
                        return i
                    }
                }))
        } else {                                               
            const objetoCarro = {
                "id": productSeleccionado.id,
                "cantidad": "1",
                "precio": productSeleccionado.price,
            }
            setCarro([...carro, objetoCarro])                  
        } 
    }


    //RESTAR PLATO
    const SubtractProduct = (idProduct) => {
        let productActual = carro.find(item => item.id === idProduct)        
        if (Number(productActual.cantidad) === 1) {
            setCarro(carro.filter(item => item.id !== idProduct))         
        } else {
            setCarro(carro.
                map((i) => {
                    if (i.id === idProduct) {
                        return { ...i, cantidad: Number(i.cantidad) - 1 }                                         
                    }
                }))
        }
    }

    return (
        <OperationsContext.Provider value={{ carro, setCarro,  FormatCoin, total, AddProducts, SubtractProduct }}>
            {children}
        </OperationsContext.Provider>
    )
}

export const useOperationsContext = () => useContext(OperationsContext);