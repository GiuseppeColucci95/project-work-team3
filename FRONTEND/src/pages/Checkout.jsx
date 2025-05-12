import { useState } from "react";


export default function Checkout() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [street, setStreet] = useState("")
  const [streetNumber, setStreetNumber] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [postalCode, setPostalCode] = useState("")


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
                    placeholder="Marco"
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
                    placeholder="Rossi"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid Last name
                  </div>
                </div>

                <div className="col-md-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                  />
                  <small id="emailHelpId" className="form-text text-muted">
                    example@email.com
                  </small>
                </div>

                <div className="col-md-9">
                  <label htmlFor="street" className="form-label">Street</label>
                  <input type="text" className="form-control" id="street"
                    placeholder="Via Roma"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid Street
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="streetNumber" className="form-label">Street Number</label>
                  <input type="text" className="form-control" id="streetNumber"
                    placeholder="123"
                    value={streetNumber}
                    onChange={e => setStreetNumber(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid Street Number
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="city" className="form-label">City</label>
                  <input type="text" className="form-control" id="city"
                    placeholder="Roma"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid City
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="province" className="form-label">Province</label>
                  <input type="text" className="form-control" id="province"
                    placeholder="RO"
                    value={province}
                    onChange={e => setProvince(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid Province
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="postalCode" className="form-label">Postal Code</label>
                  <input type="text" className="form-control" id="postalCode"
                    placeholder="00100"
                    value={postalCode}
                    onChange={e => setPostalCode(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid Postal Code
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