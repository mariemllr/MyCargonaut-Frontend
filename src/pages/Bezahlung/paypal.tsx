import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from '@paypal/react-paypal-js';
import rest from '../../utility/rest';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  catchError,
  firstValueFrom,
  lastValueFrom,
  map,
  throwError,
} from 'rxjs';

class PayPal extends Component {
  async createOrder(data: any): Promise<any> {
    // Order is created on the server and the order id is returned
    const response = await rest.put('/offer/6/accept');
    return response;
  }

  async onApprove(data: any): Promise<any> {
    // Order is captured on the server
    const response = await rest.put('/offer/5/accept');
    return response;
  }

  render() {
    return (
      <PayPalScriptProvider
        options={{
          'client-id':
            'Afd9v7pG-ip7BGWfNIIZiIhxccqwFwpHd-XUH4hKpSp6d4kOK-Faw96uFsQDZsbEEfjApHGGp7LLm2Rg',
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => this.createOrder(data)}
          onApprove={(data, actions) => this.onApprove(data)}
        />
      </PayPalScriptProvider>
    );
  }
}

export default PayPal;
