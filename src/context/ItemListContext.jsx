import { createContext, useContext, useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";

import { db } from "../services/firabase/firabaseConfig";

export const UserContext = createContext()

export default function ContextProvider({ children }) {
    
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    // const getData = async () => {
    //     try {
    //         const response = await fetch("/products.json")
    //         if (!response.ok) throw "NO SE PUEDE  DESPLEGAR LA INFORMACIÓN"
    //         const data = await response.json()
    //         setProducts(data)
    //     } catch (error) {
    //         setError(error)
    //     }
    // }

   

        
useEffect(() => {    

    const productsCollection = collection(db, 'products')

    getDocs(productsCollection)
    .then (querySnapshot => {
        console.log(querySnapshot)
        const productsAdapted = querySnapshot.docs.map(doc=>{
            const data = doc.data()
            return { id: doc.id, ...data}
        })
        setProducts(productsAdapted)
    })
    .catch ()             
   
}, [])









    return (
        <UserContext.Provider value={{products, setProducts, error, setError }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);