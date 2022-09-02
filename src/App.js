import { Fragment, useState } from 'react';

import Juices from './Components/Juices/Juices';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = function () {
    setCartIsShown(true)
  }

  const hideCartHandler = function () {
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Juices />
      </main>
    </Fragment>
  );
}

export default App;
