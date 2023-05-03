import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinListItem from './CoinListItem';
import './CoinList.css';
import Pagination from '../Pagination/Pagination';

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            const response = await axios.get(`http://localhost:4000/coins/markets?page=${currentPage}&limit=10`);
            setCoins(response.data);
            setLoading(false);
        };

        fetchCoins();
    }, [currentPage]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Cryptocurrency Market</h1>
            <CoinListItem coins={coins} loading={loading} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default CoinList;