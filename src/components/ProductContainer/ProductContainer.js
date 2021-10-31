import Product from "../Product/Product.js";
import "./productContainer.css";
import {Row, Col} from "react-bootstrap";


export default function ProdudctContainer({products}){
    return (
        <div className="product-container">
            <Row style={{justifyContent: 'space-evenly'}}>
                {products.map(product => (
                    <Col xs={12} sm={6} md={3} key={product.id}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}