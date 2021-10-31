import React from "react"
import Forms from 'react-bootstrap/Form'

export default function Add(props){
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [image, setImage] = React.useState('');

    return (
        <div className="add">
            <Forms onSubmit={props.handleSubmit}>
                <Forms.Group controlId="formBasicName">
                    <Forms.Label>Name</Forms.Label>
                    <Forms.Control type="text" placeholder="Enter name" name="name" value={props.name} onChange={(e)=>setName(e.target.value)}/>
                </Forms.Group>

                <Forms.Group controlId="formBasicDescription">
                    <Forms.Label>Description</Forms.Label>
                    <Forms.Control type="text" placeholder="Enter description" name="description" value={props.description} onChange={(e)=>setDescription(e.target.value)}/>
                </Forms.Group>

                <Forms.Group controlId="formBasicPrice">
                    <Forms.Label>Price</Forms.Label>
                    <Forms.Control type="text" placeholder="Enter price" name="price" value={props.price} onChange={(e)=>setPrice(e.target.value)}/>
                </Forms.Group>

                <Forms.Group controlId="formBasicImage">
                    <Forms.Label>Image URL</Forms.Label>
                    <Forms.Control type="text" placeholder="Enter image URL" name="image" value={props.image} onChange={(e)=>setImage(e.target.value)}/>
                </Forms.Group>
            </Forms>
        </div>
    )
}