import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51KcJJ1BrZ6y62w5LuGrrjtiEZBTRYB7sR2v6Q2slvNYl6BuCqcDDd3rQeakY5X8pkpJmfngRfRBH99BCkYMzpbeu009of1fyUU";

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };
    return (
        <StripeCheckout
            label="Pay Now"
            name="Game Byte Ltd."
            billingAddress
            shippingAddress
            image="../../assets/game.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;
