import Product from "../Product/Product.js";
import {Row, Col} from "react-bootstrap";


export default function ProdudctContainer({type="catalog", products, deleteFn = ()=>{}, editFn = ()=>{}}) {
    switch(type){
        case "catalog":
            return (
                <div className="product-container">
                    <Row style={{justifyContent: 'space-evenly'}}>
                        {products.length === 0 ? 
                            <h3>No products have been found :(</h3> 
                                : 
                            products.map(product => (
                                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product product={product}/>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            );
        case "delete":
            return (
                <Row style={{justifyContent: 'space-evenly'}}>
                        {products.length === 0 ? 
                            <h3>No products have been found :(</h3> : 
                            products.map(product => (
                                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product product={product} onClick={()=>{deleteFn(product.id, product.name)}}/>
                                </Col>
                            ))
                        }
                    </Row>
            );
        case "edit":
            return (
                <Row style={{justifyContent: 'space-evenly'}}>
                        {products.length === 0 ? 
                            <h3>No products have been found :(</h3> : 
                            products.map(product => (
                                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product product={product} onClick={() => {editFn(product)}}/>
                                </Col>
                            ))
                        }
                    </Row>
            );
        default:
            return null;
    }
}

