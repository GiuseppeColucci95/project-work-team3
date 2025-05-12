import { useState } from "react";


export default function Checkout() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")


  return (
    <>
      <div className="container">
        <section className="checkout">
          <h3 className="text-center">Checkout</h3>
          <div className="row">
            <div className="col col-8 p-3">

              <form className="row g-3 needs-validation" >

                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid First name
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid First name
                  </div>
                </div>


                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
              </form>
            </div>
            <div className="col col-4">
              Summary
            </div>
          </div>
        </section>
      </div>
    </>
  );
}