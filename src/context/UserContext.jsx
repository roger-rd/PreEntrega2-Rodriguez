import { createContext, useContext, useEffect, useState } from "react"

export const UserContext = createContext()

export default function ContextProvider({ children }) {
    
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    const getData = async () => {
        try {
            const response = await fetch("/products.json")
            if (!response.ok) throw "NO SE PUEDE  DESPLEGAR LA INFORMACIÓN"
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            setError(error)
        }
    }
    

    useEffect(() => {                 
        getData();
    }, [])

    return (
        <UserContext.Provider value={{products, setProducts, error, setError }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);