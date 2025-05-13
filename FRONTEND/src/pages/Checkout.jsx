import { useState } from "react"
import { useProductContext } from "../contexts/ProductContext"


export default function Checkout() {


  /*
"promotion_id"
"total_not_discounted"
"total_discounted"
"shipping":
"final_price":
"status":
*/

  const { cart, totalPrice } = useProductContext()

  //varibili momentanee
  const [promotion, setPromotion] = useState({
    promotion_id: 0,
    discount_percentage: 0
  })
  const [totalDiscounted, setTotalDiscounted] = useState(totalPrice)
  const [shipping, setShipping] = useState(9.99)
  const [finalPrice, setFinalPrice] = useState(totalDiscounted + shipping)
  const [status, setSatus] = useState("shipping")
  const [productList, setProductList] = useState(cart.map(product => {
    return {
      id: product.id,
      quntity: product.cartQuantity
    }

  }))

  console.log("cart checkuot", cart)
  console.log("checkuot", productList)



  //variabili del form utente
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [street, setStreet] = useState("")
  const [streetNumber, setStreetNumber] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [postalCode, setPostalCode] = useState("")

  //variabili del form payment
  const [cardHolder, setCardHolder] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [cvv, setCvv] = useState("")


  //function on submit form
  function formSubmit(e) {
    e.preventDefault()

    const errorList = Validate(
      firstName,
      lastName,
      userEmail,
      street,
      streetNumber,
      country,
      city,
      province,
      postalCode
    )

    //se errorList non è vuota mando un allert
    if (Object.keys(errorList).length > 0) {
      alert(Object.values(errorList).join('\n'));
      return // interrompe la funzione se ci sono errori
    }


    const formData = {
      "promotion_id": 2,
      "total_not_discounted": 45.90,
      "total_discounted": 39.90,
      "shipping": 4.99,
      "final_price": 44.89,
      "status": "shipped",
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
      mail: userEmail,
      adress: `${street}, ${streetNumber}, ${postalCode} ${city} ${country}`
    }


    console.log(formData)

  }

  function Validate(firstName, lastName, userEmail, street, streetNumber, country, city, province, postalCode) {
    //variabile d'appoggio
    const error = {}

    // verifico che tutti i campi obligatori siano popolati
    if (!firstName) error.firstName = "first Name is require"
    if (!lastName) error.lastName = "last Name is require"
    if (!userEmail) error.userEmail = "Email is require"
    if (!street) error.street = "street is require"
    if (!streetNumber) error.streetNumber = "street Number is require"
    if (!country) error.country = "country is require"
    if (!city) error.city = "city is require"
    if (!province) error.province = "province is require"
    if (!postalCode) error.postalCode = "postal code is require"

    //se manca un campo esci dalla funzione restituendo l'oggetto error
    if (Object.keys(error).length > 0) return error

    //verifico le grandezze
    if (firstName.length < 3) error.firstName = "first name must be at least 3 characters long"
    if (firstName.length > 20) error.firstName = "first name must be at most 20 characters long"
    if (lastName.length < 3) error.lastName = "last name must be at least 3 characters long"
    if (lastName.length > 20) error.lastName = "last name must be at most 20 characters long"
    if (userEmail.length < 10) error.userEmail = "Email must be at least 10 characters long"
    if (userEmail.length > 50) error.userEmail = "Email must be at most 50 characters long"
    if (street.length < 5) error.street = "street must be at least 5 characters long"
    if (street.length > 10) error.street = "street must be at most 10 characters long"
    if (streetNumber.length < 1) error.streetNumber = "streetNumber must be at least 1 characters long"
    if (streetNumber.length > 3) error.streetNumber = "streetNumber must be at most 3 characters long"
    if (country.length < 4) error.country = "country must be at least 4 characters long"
    if (country.length > 10) error.country = "country must be at most 10 characters long"
    if (city.length < 1) error.city = "city must be at least 1 characters long"
    if (city.length > 10) error.city = "city must be at most 10 characters long"
    if (province.length !== 2) error.province = "province must be a 2 characters long"
    if (postalCode.length !== 5) error.postalCode = "postal Code must be a 5 characters long"

    //se almeno un campo ha la lunghezza sbagliata esce dalla funzione
    if (Object.keys(error).length > 0) return error

    //controllo che le variabili sodisfino i requisiti di formato
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-z]{2,}$/.test(userEmail)) error.userEmail = "email is invalid"
    if (!street.toLowerCase().includes('via') && !street.toLowerCase().includes('piazza')) error.street = "street must contain via or piazza"

    //faccio un return di error
    return error
  }

  return (
    <>
      <div className="container">
        <section className="checkout">
          <h3 className="text-center">Checkout</h3>
          <div className="row">
            <div className="col col-8 p-3">

              <form className="row g-3 noValidate" onSubmit={formSubmit} >

                <h3>Your info</h3>

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

                <div className="col-md-8">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="text"
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

                <div className="col-md-4">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="phoneNumber"
                    placeholder="3496587652"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                  />
                  <div className="valid-feedback">
                    Valid Last name
                  </div>
                </div>

                <div className="col-md-6">
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

                <div className="col-md-3">
                  <label htmlFor="country" className="form-label">Country</label>
                  <input type="text" className="form-control" id="country"
                    placeholder="Italy"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid Country
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

                <h3>Payment</h3>

                <div className="col-md-12">
                  <label htmlFor="cardHolder" className="form-label">Card Holder</label>
                  <input type="text" className="form-control" id="cardHolder"
                    placeholder="MasterCard"
                    value={cardHolder}
                    onChange={e => setCardHolder(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid card Holder
                  </div>
                </div>

                <div className="col-md-12">
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input type="text" className="form-control" id="cardNumber"
                    placeholder="1234-3216-7856-4545"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid card Number
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="expirationDate" className="form-label">Expiration Date</label>
                  <input type="text" className="form-control" id="expirationDate"
                    placeholder="12/06"
                    value={expirationDate}
                    onChange={e => setExpirationDate(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid Expiration Date
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cvv"
                    placeholder="360"
                    value={cvv}
                    onChange={e => setCvv(e.target.value)}
                    required />
                  <div className="valid-feedback">
                    Valid CVV
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary" type="submit">PAY NOW</button>
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