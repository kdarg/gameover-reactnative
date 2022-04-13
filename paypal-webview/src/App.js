import './App.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  })
  const price = params.price

  const onPayPalCreateOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: price,
                },
            },
        ],
    });
  }

  const onPayPalApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
        // const name = details.payer.name.given_name;
        // alert(`Transaction completed by ${name}`);
        window.ReactNativeWebView.postMessage(JSON.stringify({success: true, name: details.payer.name.given_name}))
    });
  }

  return (
    <div className="paypal-content">
      <PayPalScriptProvider options={{ "client-id": "AVwC9go19k3v-1HU5T8wUDa-qS6TmP6_nH7RAesdYWv4_KURqO9gD7j9vX7Bp-BzLdSZnYhd8Qv-tOZT", currency: "USD" }}>
          <h3>Click the PayPal button below to proceed with checkout.</h3>
          <PayPalButtons style={{ layout: "horizontal", tagline: false }} createOrder={onPayPalCreateOrder} onApprove={onPayPalApprove} />
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
