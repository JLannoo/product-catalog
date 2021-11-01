import React from "react";
import Loading from "../Loading/Loading.js";
import FilterSection from "../FilterSection/FilterSection.js";
import ProdudctContainer from "../ProductContainer/ProductContainer.js";
import "../Catalog/Catalog.css";

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "3000";

const URL = `http:${HOST}//:${PORT}`;

async function fetchData() {
    const response = await fetch(`${URL}/products/`)

    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}

export function Catalog(props){
    const [loading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState([]);
    const [minPriceFilter, setMinPriceFilter] = React.useState("");
    const [maxPriceFilter, setMaxPriceFilter] = React.useState("");
    const [nameFilter, setNameFilter] = React.useState("");

    React.useEffect(
        () => {
            fetchData().then(data => {
                setProducts(data.filter(product => filterFn(product, minPriceFilter, maxPriceFilter, nameFilter)));
                setLoading(false);
            });
        },[minPriceFilter, maxPriceFilter, nameFilter]
    );

    return (
        <div className="catalog-container">
            <div className="catalog-title">
             <h1>Our Products</h1>
         </div>
            <FilterSection
                setMaxPriceFilter={setMaxPriceFilter}
                setMinPriceFilter={setMinPriceFilter}
                setNameFilter={setNameFilter}
            />

            {loading ? <Loading /> : <ProdudctContainer products={products} />}
        </div>
    )
}

function filterFn(product, minPrice, maxPrice, name){
    let ret = true;

    ret = minPrice ? (ret && (minPrice <= product.price_dollar+product.price_cents/100)) : ret;
    ret = maxPrice ? (ret && (maxPrice >= product.price_dollar+product.price_cents/100)) : ret;
    ret = name ? (ret && (product.name.toLowerCase().includes(name.toLowerCase()))) : ret;

    return ret;
}