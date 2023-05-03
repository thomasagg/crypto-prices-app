const axios = require('axios');

const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

exports.list = async (req, res) => {
    const {page = 1, limit = 10} = req.query;
    try {
        // execute the request
        const response = await axios.get(`${COINGECKO_API_BASE_URL}/coins/markets?vs_currency=usd`);

        // parse the response
        const coins = response.data.map((coin) => ({
            name: coin.name,
            symbol: coin.symbol,
            current_price: coin.current_price,
            high_24h: coin.high_24h,
            low_24h: coin.low_24h,
            price_change_percentage_24h: coin.price_change_percentage_24h
        }));

        // pagination
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedCoins = coins.slice(startIndex, endIndex);

        res.json(paginatedCoins);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

exports.get = async (req, res) => {
    console.log(req)
    try {
        // execute the request
        const response = await axios.get(`${COINGECKO_API_BASE_URL}/coins/${req.params.id}`);

        const coin = response.data;

        // extract the required information
        const result = {
            name: coin.name,
            description: coin.description.en,
            current_price: coin.market_data.current_price.usd,
            price_change_24h: coin.market_data.price_change_percentage_24h,
            price_change_7d: coin.market_data.price_change_percentage_7d,
            price_change_14d: coin.market_data.price_change_percentage_14d,
            price_change_30d: coin.market_data.price_change_percentage_30d,
            price_change_60d: coin.market_data.price_change_percentage_60d,
            price_change_200d: coin.market_data.price_change_percentage_200d,
            price_change_1y: coin.market_data.price_change_percentage_1y,
            highest_price_24h: coin.market_data.high_24h.usd,
            lowest_price_24h: coin.market_data.low_24h.usd,
        };

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};