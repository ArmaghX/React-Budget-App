import React from 'react';
import './App.css';

import Header from './components/Header';
import Balance from './components/Balance';

const App = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <Header />
                <Balance />
            </div>
        </div>
    )
}

export default App

