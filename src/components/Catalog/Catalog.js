import React from "react";
import Loading from "../Loading/Loading.js";
import ProdudctContainer from "../ProductContainer/ProductContainer.js";
import {Async} from "react-async";
import "../Catalog/Catalog.css";

const URL = "http://localhost:3001";

async function fetchData() {
    const response = await fetch(`${URL}/products/`)

    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}

export function Catalog(props){
    return ( 
    <div className="catalog-container">
        <div className="catalog-title">
            <h1>Our Products</h1>
        </div>

        
        <Async promiseFn={fetchData}>
            <Async.Pending> 
                <Loading/> 
            </Async.Pending>

            <Async.Fulfilled>
                {products => <ProdudctContainer products={products}/>}
            </Async.Fulfilled>

            <Async.Rejected>
                {"There seems to have been an issue, please try again later!"}
            </Async.Rejected>
        </Async>
    </div>
    );
};

// products.map(product => (
//     <div className="catalog-item" key={product.id}>
//         <img src={product.image} alt={product.name} />
//         <div className="catalog-item-info">
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>${product.price_dollar}.{product.price_cents}</p>
//         </div>
//     </div>
// ))