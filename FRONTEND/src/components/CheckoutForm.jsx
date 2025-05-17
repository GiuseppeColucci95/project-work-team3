//stripe import
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

//component export
export default function CheckoutForm({ finalPrice, firstName, lastName }) {
  const stripe = useStripe();
  const elements = useElements();

  //function to get send datas to backend and get response
  async function handleSubmit(e) {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    //get clientSecret from backend
    const response = await fetch('per-salvo-impostare-url-chiamata-api-qui', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: finalPrice, currency: 'eur' }),
    });

    const { clientSecret } = await response.json();

    //confirm the payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${firstName} ${lastName}`,
        },
      },
    });

    if (result.error) {
      console.error('Error in payment:', result.error.message);
      alert('Error in payment: ' + result.error.message); //da togliere e inserire come alert a comparsa classico
    } else {
      if (result.paymentIntent.status === 'succeeded') {

        //PER SALVO QUI COLLEGAMENTO ALLA PAGINA CONFERMA ORDINE
      }
    }
  };

  //template
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        PAY NOW
      </button>
    </form>
  );
}