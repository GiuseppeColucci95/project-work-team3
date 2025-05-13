//import function
import { Link } from "react-router-dom"

export default function OrderConfirmation() {



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
  );
}