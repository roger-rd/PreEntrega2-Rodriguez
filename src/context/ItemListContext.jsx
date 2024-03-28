import { createContext, useContext, useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";

import { db } from "../services/firabase/firabaseConfig";

export const UserContext = createContext()

export default function ContextProvider({ children }) {
    
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)


        
useEffect(() => {    

    const productsCollection = collection(db, 'products')

    getDocs(productsCollection)
    .then (querySnapshot => {
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