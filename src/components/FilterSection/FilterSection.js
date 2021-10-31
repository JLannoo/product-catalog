import React from "react"
import Form from "react-bootstrap/Form";
import {Row, Col, Button} from "react-bootstrap";


export default function FilterSection({setMinPriceFilter, setMaxPriceFilter, setNameFilter}) {
    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === "minPrice") {
            setMinPriceFilter(value);
        } else if (name === "maxPrice") {
            setMaxPriceFilter(value);
        } else if (name === "name") {
            setNameFilter(value);
        }
    };

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter search term" onChange={(e)=>handleChange(e)}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Min</Form.Label>
                        <Form.Control type="number" min={0} name="minPrice" placeholder="Minimum price" onChange={(e)=>handleChange(e)}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Max</Form.Label>
                        <Form.Control type="number" min={0} name="maxPrice" placeholder="Maximum price" onChange={(e)=>handleChange(e)}/>
                    </Form.Group>
                </Col>
            </Row>
        </Form>   
    )
}