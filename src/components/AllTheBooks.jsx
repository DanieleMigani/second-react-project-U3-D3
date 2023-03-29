import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import books from '../data/book.json'

class AllTheBooks extends Component {
    state = { selectedBooks: null,
    }

    render() {
        return (
          <Container>
            <Row>
              <Col xs={12} md={8} lg={6}>
              <Card>
              {books.map((book) => {
                return (
                  <Card.Item key={book.asin}>
                
                    
        
                    <Card.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.category}</p>
                    </Card.Caption>
                  </Card.Item>
                )
              })}
            </Card>
          </Col>
        </Row>
        </Container>
        )
            }



export default AllTheBooks;