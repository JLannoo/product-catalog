import React from 'react';
import Async from 'react-async';
import Forms from 'react-bootstrap/Form';
import {Row, Col, Button} from 'react-bootstrap';
import ProdudctContainer from "../ProductContainer/ProductContainer.js";
import Loading from '../Loading/Loading.js';
import { fetchData, editProduct } from '../../apiAccess';

export default function Edit(){
    const [editingView, setEditingView] = React.useState(false);
    const [product, setProduct] = React.useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value})
    }
       
    return (
        <div className="edit-container"> 
            {!editingView ? (
                <>
                    <h3>Which product would you like to edit?</h3>
                    <Async promiseFn={fetchData}>
                        <Async.Pending> 
                            <Loading/> 
                        </Async.Pending>

                        <Async.Fulfilled>
                            {products => 
                                <>
                                    <ProdudctContainer 
                                        products={products} 
                                        type="edit" 
                                        editFn={(product)=>{
                                            setEditingView(true);
                                            setProduct(product);
                                        }}/>
                                </>
                            }  
                        </Async.Fulfilled>

                        <Async.Rejected>
                            {"There seems to have been an issue, please try again later!"}
                        </Async.Rejected>
                    </Async>
                </>
            ) : (
                <>
                <Forms>
                    <Forms.Group controlId="formBasicName">
                            <Forms.Label>Name</Forms.Label>
                            <Forms.Control type="text" placeholder="Enter name" name="name" value={product.name} onChange={(e) => handleChange(e)}/>
                        </Forms.Group>

                        <Forms.Group controlId="formBasicDescription">
                            <Forms.Label>Description</Forms.Label>
                            <Forms.Control type="text" placeholder="Enter description" name="description" value={product.description} onChange={(e) => handleChange(e)}/>
                        </Forms.Group>

                        <Forms.Group controlId="formBasicPrice">
                            <Row>
                                <Col>
                                <Forms.Label>Dollars</Forms.Label>
                                <Forms.Control type="text" placeholder="Enter dollars" name="price_dollar" value={product.price_dollar} onChange={(e) => handleChange(e)}/>
                                </Col>
                                <Col>
                                <Forms.Label>Cents</Forms.Label>
                                <Forms.Control type="text" placeholder="Enter cents" name="price_cents" value={product.price_cents} onChange={(e) => handleChange(e)}/>
                                </Col>
                            </Row>
                        </Forms.Group>

                        <Forms.Group controlId="formBasicImage">
                            <Forms.Label>Image URL</Forms.Label>
                            <Forms.Control type="text" placeholder="Enter image URL" name="image" value={product.image} onChange={(e) => handleChange(e)}/>
                        </Forms.Group>
                    </Forms>

                    <Button variant="warning" type="button" onClick={(e) => setEditingView(false)}>
                            Back
                    </Button>
                    <Button variant="primary" type="button" onClick={(e) => editProduct(product)}>
                            Submit
                    </Button>
                    
                </>
            )
            } 
        </div>
    )
}