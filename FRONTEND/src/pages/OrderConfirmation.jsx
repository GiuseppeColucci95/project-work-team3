//import function
import { useEffect } from "react"
import { Link } from "react-router-dom"
//funzionalità extra
import confetti from "canvas-confetti"

import { useOrderContext } from "../contexts/OrdersContex"

export default function OrderConfirmation() {

  const { flagConfetti, setFlagConfetti } = useOrderContext()

  useEffect(() => {
    if (flagConfetti) {
      confetti({
        particleCount: 200,
        spread: 50,
        origin: { y: 0.9 }
      })
      setFlagConfetti(false)
    }
  }, [])

  return (
    <>
      <div className="container text-center py-4">
        <img src="img/logo.png" alt="qualcosa di strano" />

        <p className="fw-bold">
          Your order is placed
        </p>
        <p>
          Check your mail for confirmation
        </p>

        <Link to="/" >
          <button type="button" className="btn btn-warning">Go back to homepage</button>
        </Link>
      </div>
    </>
  )
}