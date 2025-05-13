//import context
import { useOrderContext } from "../contexts/OrdersContex"


export default function OrderConfirmation() {

  const { order, orderResponse } = useOrderContext()


  return (
    <>
      <h1>Order confirmetion</h1>
    </>
  );
}