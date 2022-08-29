import { Fragment } from 'react';

import Juices from './Components/Juices/Juices';
import Header from './Components/Layout/Header';

function App() {
  return (
    <Fragment>
       <Header />
   <main>
    <Juices />
   </main>
    </Fragment>
  );
}

export default App;
