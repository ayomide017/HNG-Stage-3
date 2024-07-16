import React, { useState } from "react";
import { InputField } from "../../components/Input/InputField";
import "./Payment.css";

import LocationIcon from "../../assets/location-icon.svg";
import DeliveryIcon from "../../assets/delivery.svg";
import TimeIcon from "../../assets/time-icon.svg";
import { Button } from "../../components/Button";

export const Payment = () => {
  const [formData, setFormData] = useState({
    country: "",
    address: "",
    state: "",
    phone: "",
    credit: "",
    inter: "",
  });
  // (id,name,type,placeholder, label e.t.c.)
  const inputs = [
    {
      id: 1,
      name: "country",
      label: "Country",
      type: "text",
      placeholder: "Country",
      errorMessage:
        "should be 3-16 characters and should not include special character ",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "address",
      label: "Address",
      type: "text",
      placeholder: "Address",
      errorMessage: "It should be a valid Address address!",
      pattern: "johndoe@gmail.com",
      required: true,
    },
    {
      id: 3,
      name: "state",
      label: "State",
      type: "text",
      placeholder: "State",
    },
    {
      id: 4,
      name: "phone",
      label: "Phone",
      type: "text",
      placeholder: "Phone",
      errorMessage:
        "Phone should 8-20 character and should include at least 1 letter, 1 number and a special character",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "credit",
      label: "Credit card/Debit card",
      type: "radio",
      // placeholder: "John Doe",
    },
    {
      id: 5,
      name: "inter",
      label: "Internet banking ",
      type: "radio",
      // placeholder: "John Doe",
    },
    {
      id: 6,
      name: "card",
      label: "Name on Card",
      type: "text",
      placeholder: "John Doe",
    },
    {
      id: 7,
      name: "phone",
      label: "Card Number",
      type: "text",
      placeholder: "1234- 4678- 9321-4851",
    },
    {
      id: 8,
      name: "cvv",
      label: "CVV",
      type: "text",
      placeholder: "*****",
    },
    {
      id: 9,
      name: "date",
      label: "Expiry date",
      type: "date",
      placeholder: "State",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      country: "",
      address: "",
      state: "",
      phone: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((initialData) => {
      return {
        ...initialData,
        [name]: value,
      };
    });
  };
  return (
    <section>
      <div className="container">
        <h2 className="shopping-cart__title">My shopping cart</h2>

        <div className="payment">
          <form onSubmit={handleSubmit}>
            <div className="grid-2-cols">
              {inputs.map((input) => (
                <InputField
                  key={input.id}
                  {...input}
                  value={formData[input.name]}
                  handleChange={handleChange}
                />
              ))}
            </div>
          </form>

          <div className="payment__summary stack">
            <h3 className="payment__text">Order Summary</h3>
            <ul className="payment__list">
              <li className="payment__item">
                <img src={LocationIcon} alt="location" />{" "}
                <p>Sent from New York,USA.</p>
              </li>
              <li className="payment__item">
                <img src={DeliveryIcon} alt="delivery" />
                <p>Estimated shipping time between 3 to 5 working days.</p>
              </li>
              <li className="payment__item">
                <img src={TimeIcon} alt="time" />
                <p>Shipping fee $5.99 shipping details.</p>
              </li>
            </ul>
            <div>
              <h4 className="payment__subtitle">Payment details </h4>
              <ul className="payment__bill">
                <li>
                 <div> <p>Subtotal</p></div>
                  <div><p>$105.99</p></div>
                </li>

                <li>
                  <div><p>Discount</p></div>
                  <div><p>$5.000</p></div>
                </li>

                <li>
                  <div><p>Delivery</p></div>
                  <div><p>$4.99</p></div>
                </li>

                <li>
                  <div><p>Grand Total</p></div>
                  <div><p>$90.99</p></div>
                </li>
              </ul>
              

              <Button className="btn-bg-2" text="Purchase" />

              <p className="payment__secure">
                Payment are secured and encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
