import React, { useEffect, useState } from "react";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
//import axios from "./axios";
const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const Navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent= payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        Navigate.replaceState("/orders");
      });
    //const payload = await
  };
  const handleChange = (event) => {
    //listen for changes in the cardElement
    //and display any errors as the customer tpes their card detailes

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  {
    /*useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);*/
  }
  return (
    <div>
      <Header />
      <div className="payment">
        <h1 className="payment__checkout">
          Checkout (<Link to="/checkout">{basket?.length} items)</Link>
        </h1>
        <div className="payment__container">
          {/* payment Section - delivery address*/}

          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>kukatpally</p>
              <p>Hyderabad,Telangana</p>
            </div>
          </div>

          <div className="payment__section">
            {/* payment Section - review Items */}
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  key={item.id}
                />
              ))}
            </div>
          </div>
          {/* payment Section - Payment-section*/}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>

            <div className="payment__details">
              {/*stripe magic will go*/}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>Order Total : {value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {/*errors*/}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
