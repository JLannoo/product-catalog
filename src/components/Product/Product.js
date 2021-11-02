import Card from 'react-bootstrap/Card'

export default function Product({ product , onClick=()=>{}}) {
    const { name, price_dollar, price_cents, image, description } = product

    return (
        <Card style={{ width: '18rem', margin: '1rem'}} onClick={onClick}>
            <Card.Img variant="top" src={image} style={{ objectFit: "cover", height: "18rem"}}/>
            <Card.Body>
                <Card.Title className="product-title">{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price_dollar}.{price_cents.toString().padStart(2,0)}</Card.Text>
            </Card.Body>
        </Card>
    )
}