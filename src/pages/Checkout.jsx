import React, { Component } from 'react';

export default class Checkout extends Component {
  render() {
    return (
      <form action="">
        <p>Form</p>
        <input
          data-testid="checkout-fullname"
          placeholder="Nome Completo"
          type="text"
          name=""
          id=""
        />
        <input
          data-testid="checkout-email"
          placeholder="Email"
          type="email"
          name=""
          id=""
        />
        <input data-testid="checkout-cpf" type="text" name="" id="" />
        <input data-testid="checkout-phone" type="tel" name="" id="" />
        <input data-testid="checkout-cep" type="text" name="" id="" />
        <input data-testid="checkout-address" type="text" name="" id="" />
      </form>
    );
  }
}
