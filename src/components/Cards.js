import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Filter } from "./Filter";

import Search from "./Search";
import axios from "axios";
import '../styles/card.css'

const Cards = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/products");
                setProducts(res.data);
                setFilteredProducts(res.data); // Initialize filtered products to all products
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllProducts();
    }, []);

    const handleFilter = (filtered) => {
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <Filter products={products} onFilter={handleFilter} />

        </div>
    );
};

export default Cards;



