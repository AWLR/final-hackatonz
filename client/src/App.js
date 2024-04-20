// App.js
import React from 'react';
import ProductList from './components/AlexProductList';
import Header from './components/Header';
import './App.css'
import CustomItemContext from './context/ItemContext';
import Background from './components/Background';

const App = () => {
  return (
    <CustomItemContext>
      <Background />
      <Header />
      <ProductList />
    </CustomItemContext>
  );
};

export default App;