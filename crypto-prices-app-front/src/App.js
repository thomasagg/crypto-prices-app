import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CoinList from './component/CoinList/CoinList';
import CoinDetail from './component/CoinDetail/CoinDetails';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<CoinList/>}/>
                <Route path="/coin/:id" element={<CoinDetail/>}/>
            </Routes>

        </div>
    );
}

export default App;