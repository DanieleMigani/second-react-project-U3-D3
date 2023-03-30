import { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import data from "../components/data/book.json"
import Button from 'react-bootstrap/Button';

class AllTheBooks extends Component {
    render() {
        return (
            <Container>
                <Row className="align-items-stretch">
                    {data.map((book) => {
                        return (
                            <Col  xs={12} sm={6} md={4} lg={3} className=" mb-3">
                                <Card className="h-100 d-flex justify-content-between " key={book.asin}>
                                    <Card.Img variant="top" src={book.img} width="300px" height="300px" />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            {book.price}€
                                        </Card.Text>
                                        <Button className="button" variant="primary">Scopri di più</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default AllTheBooks;