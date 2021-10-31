import Product from "../Product/Product.js";
import {Row, Col} from "react-bootstrap";


export default function ProdudctContainer({products, filterFn}){
    
    return (
        <div className="product-container">
            <Row style={{justifyContent: 'space-evenly'}}>
                {products.length === 0 ? 
                    <h3>No products have been found :(</h3> : 
                    products.filter((a) => filterFn(a)).map(product => (
                        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}