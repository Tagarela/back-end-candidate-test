import React from 'react';
import './App.css';
import AppUsers from './components/AppUsers/AppUsers'
import AppPrograms from "./components/AppPrograms/AppPrograms";
import AppProducts from "./components/AppProducts/AppProducts";
import AppTransactions from "./components/AppTransactions/AppTransactions";

function App() {
  return (
    <div>
        <AppUsers />
        <AppPrograms />
        <AppProducts />
        <AppTransactions />
    </div>
  );
}

export default App;
