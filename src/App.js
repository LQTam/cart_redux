import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import ProductsContainer from './container/ProductsContainer';
import CartContainer from './container/CartContainer'
import MessageContainer from './container/MessageContainer';
function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <ProductsContainer />
        <MessageContainer />
        <CartContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
