import React from "react";
import Card from "../components/Cards";
import '../styles/products.css';
import '../styles/products.css';
import "../styles/filter.css";
import ArrayCard from "../components/ArrayCard";

function Products() {

    return (
        <div>
            <div className="banner" >
                <img src="./images/stem.jpg" alt="perfume bottle" />
            </div>
            <h2 className="prod_header" > Shop Now </h2>
            <div className="wrapper">

                {/* <Card /> */}

                <ArrayCard />
            </div>
        </div>

    )
}

export default Products;

