import React from "react"
import Forms from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "3000";

const URL = `http:${HOST}//:${PORT}`;

export default function Add(props){
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [priceDollar, setPriceDollar] = React.useState('');
    const [priceCents, setPriceCents] = React.useState('');
    const [image, setImage] = React.useState('');

    return (
        <div className="add">
            <Forms>
                <Forms.Group controlId="formBasicName">
                    <Forms.Label>Name</Forms.Label>
                    <Forms.Control type="text" placeholder="Enter name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Forms.Group>

                <Forms.Group controlId="formBasicDescription">
                    <Forms.Label>Description</Forms.Label>
                    <Forms.Control type="text" placeholder="Enter description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </Forms.Group>

                <Forms.Group controlId="formBasicPrice">
                    <Row>
                        <Col>
                        <Forms.Label>Dollars</Forms.Label>
                        <Forms.Control type="text" placeholder="Enter dollars" name="price" value={priceDollar} onChange={(e)=>setPriceDollar(e.target.value)}/>
                        </Col>
                        <Col>
                        <Forms.Label>Cents</Forms.Label>
                        <Forms.Control type="text" placeholder="Enter cents" name="price" value={priceCents} onChange={(e)=>setPriceCents(e.target.value)}/>
                        </Col>
                    </Row>
                </Forms.Group>

                <Forms.Group controlId="formBasicImage">
                    <Forms.Label>Image URL</Forms.Label>
                    <Forms.Control type="text" placeholder="Enter image URL" name="image" value={props.image} onChange={(e)=>setImage(e.target.value)}/>
                </Forms.Group>
            </Forms>

            <Button variant="primary" type="button" onClick={(e) => AddProduct(name, description, priceDollar, priceCents, image)}>
                    Submit
            </Button>
        </div>
    )
}

async function AddProduct(name, description, priceDollar, priceCents, image){
    if(name !== "" && description !== "" && priceDollar !== "" && priceCents !== "" && image !== ""){
        while(priceCents > 99){
            priceCents -= 100;
            priceDollar++;  
        }
    
        const response = await fetch(`${URL}/products/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                description: description,
                price_dollar: priceDollar,
                price_cents: priceCents,
                image: image
            })
        });

        console.log(response);
    
        if(response.ok){
            alert("Product added!");
        } else {
            alert("There seems to have been an issue. Please try again later!");
        }
    } else {
        alert("Error adding product!\n Please check all field are completed");
    }
    window.location.reload();
}