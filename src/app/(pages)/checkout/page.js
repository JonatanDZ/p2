import CheckoutPage from './checkoutform';
import BasketOverview from './basketoverview';

export default function checkout() {
    return (
      <main className="checkout-container">
        <div className="checkout-container1">
          <CheckoutPage/>
        </div>
        <div className="checkout-container2">
          <BasketOverview/>
        </div>
      </main>
    );
}
