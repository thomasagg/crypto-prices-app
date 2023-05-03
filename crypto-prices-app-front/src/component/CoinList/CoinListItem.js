import React from 'react';
import { Link } from 'react-router-dom';

const CoinListItem = ({ coins, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul className="list-group mb-4">
            {coins.map(coin => (
                <li key={coin.name.toLowerCase()} className="list-group-item">
                    <Link to={`/coin/${coin.name.toLowerCase()}`}>
                        {coin.name} ({coin.symbol})
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default CoinListItem;