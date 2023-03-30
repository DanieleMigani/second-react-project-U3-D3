import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkiX0kx_ZTVp3MUiaMiK91dwt4bM5Wji_Uh9as0DR&s" height="80px" alt="logo" />DendiBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
            <Nav.Link href="#about" className='text-dark'>About</Nav.Link>
            <Nav.Link href="#browse" className='text-dark'>Browse</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;