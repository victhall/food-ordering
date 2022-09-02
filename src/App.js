import { useState } from 'react';

import Juices from './Components/Juices/Juices';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = function () {
    setCartIsShown(true)
  }

  const hideCartHandler = function () {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Juices />
      </main>
    </CartProvider>
  );
}

export default App;
