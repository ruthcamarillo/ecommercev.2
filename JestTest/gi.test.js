const Search = require('./Search');

describe('Search component', () => {
    test('should filter products by search query and price range', () => {
        const mockProducts = [
            { id: 1, title: 'Product 1', description: 'Description 1', price: 10 },
            { id: 2, title: 'Product 2', description: 'Description 2', price: 20 },
            { id: 3, title: 'Product 3', description: 'Description 3', price: 30 },
        ];

        const { filteredProducts } = Search.applyFilters(mockProducts, 'duct 2', 15, 25);

        expect(filteredProducts).toEqual([
            { id: 2, title: 'Product 2', description: 'Description 2', price: 20 },
        ]);
    });
});

import React from "react";
import { render } from "react-dom";
import App from "./App";

test("renders App component", () => {
    const div = document.createElement("div");
    render(<App />, div);
});