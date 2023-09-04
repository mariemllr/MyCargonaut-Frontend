import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from '@paypal/react-paypal-js';
import rest from '../../utility/rest';

// Renders errors or successful transactions on the screen.
function Message({ content }: { content: string }) {
  return <p>{content}</p>;
}

function PayPal() {
  const initialOptions = {
    'client-id':
      'Afd9v7pG-ip7BGWfNIIZiIhxccqwFwpHd-XUH4hKpSp6d4kOK-Faw96uFsQDZsbEEfjApHGGp7LLm2Rg',
    'enable-funding': FUNDING.PAYPAL,
    'data-sdk-integration-source': 'integrationbuilder_sc',
  };

  const [message, setMessage] = useState<string>('');

  return (
    <div className='PayPal'>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: 'rect',
            color: FUNDING.PAYLATER === FUNDING.PAYPAL ? 'gold' : undefined,
            layout: 'vertical', // default value. Can be changed to horizontal
          }}
          createOrder={async () => {
            try {
              const response = await rest.put('offer/4/accept');
              setMessage('geklappt');
              return 'Success';
            } catch (error) {
              console.error(error);
              setMessage(`Could not initiate PayPal Checkout...${error}`);
              return 'Error';
            }
          }}
          onApprove={async (data, actions) => {
            setMessage(`Transaction successful.`);
          }}
        />
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}

export default PayPal;
