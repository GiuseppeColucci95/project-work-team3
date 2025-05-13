//import function
import { Link } from "react-router-dom"

export default function OrderConfirmation() {



  return (
    <>
      <div className="checkout-container">
        <div className="confirmation-img-container d-flex justify-content-center">
          <img src="/img/happy.svg" className="confirmation-img" alt="" />
        </div>
        <div className="container text-center py-4 confirmation-text">
          <h4 className="fw-bold">
            Your order is <span className="text-success">placed</span>!
          </h4>
          <p>Check your mail for confirmation</p>
        </div>
        <div className="container d-flex justify-content-center">
          <Link to="/" >
            <button type="button" className="btn-homepage">Go back to homepage</button>
          </Link>
        </div>
      </div>
    </>
  );
}