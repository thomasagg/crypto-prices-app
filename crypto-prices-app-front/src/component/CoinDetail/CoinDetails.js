import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CoinDetail = () => {
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchCoinDetail = async () => {
            setLoading(true);
            const response = await axios.get(`http://localhost:4000/coins/${id}`);
            setCoin(response.data);
            setLoading(false);
        };

        fetchCoinDetail();
    }, [id]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">
                {coin.name} ({coin.symbol})
            </h1>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h2>Current price: ${coin.price_change_24h}</h2>
                    <h2>Price change (24h): {coin.price_change_24h}%</h2>
                    <h2>Price change (7d): {coin.price_change_7d}%</h2>
                    <h2>Price change (14d): {coin.price_change_14d}%</h2>
                    <h2>Price change (1m): {coin.price_change_30d}%</h2>
                    <h2>Price change (2m): {coin.price_change_60d}%</h2>
                    <h2>Price change (200d): {coin.price_change_200d}%</h2>
                    <h2>Price change (1y): {coin.price_change_1y}%</h2>
                </div>
                <div className="col-12 col-md-6">
                    <h2>Highest price (24h): ${coin.highest_price_24h}</h2>
                    <h2>Lowest price (24h): ${coin.lowest_price_24h}</h2>
                </div>
            </div>
            <h2>Description:</h2>
            <p>{coin.description}</p>
        </div>
    );
};

export default CoinDetail;