import axios from 'axios';
import { useState, useEffect } from 'react';

export const useProductsApi = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=100');
                setLoading(false);
                setProducts(response.data.products);
                console.log(response.data.products);
            } catch (error) {
                setLoading(false);
                setError(true);
                return error;
            }
        };
        fetchData();
    }, []);

    console.log(products);
    return { products, loading, error };
};

export default useProductsApi;
