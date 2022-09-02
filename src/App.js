import { Fragment, useState } from 'react';

import Juices from './Components/Juices/Juices';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';

function App() {
 const [cartIsShown, setCartIsShown] useState(false)

  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Juices />
      </main>
    </Fragment>
  );
}

export default App;
