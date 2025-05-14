import { createContext, useContext, useEffect, useState } from "react";

//context creation
const OrderContext = createContext();

//connection variables
const api_url_orders = "http://localhost:3000/api/v1/orders"

//context provider
function OrderProvider({ children }) {

    const [order, setOrder] = useState({})
    const [orderResponse, setOrderResponse] = useState({})
    const [flagConfetti, setFlagConfetti] = useState(false)

    function subtimOrder(formData) {

        setOrder(formData)

        const api_header = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formData)
        }

        fetch(api_url_orders, api_header)
            .then(res => res.json())
            .then(data => {
                console.log('orderResponse', data)
                setOrderResponse(data)
            })
            .catch(err => setOrderResponse(err))
    }

    return (
        <OrderContext.Provider value={{
            order, setOrder, subtimOrder, orderResponse, flagConfetti, setFlagConfetti
        }}>
            {children}
        </OrderContext.Provider>
    )

}

//use custom context hook
function useOrderContext() {
    return useContext(OrderContext);
}

//export custom context
export { OrderProvider, useOrderContext }