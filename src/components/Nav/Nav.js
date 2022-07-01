import React from 'react'
import './nav.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Nav = () => {

    function dropDown(){
      let drop = document.querySelector('.drop')
      let dam = document.querySelector('.damax')
      setTimeout(() => {
          dam.style.display = 'inline' 
      }, 1000);
      drop.style.height='100vh'

      setTimeout(() => {
          document.body.style.overflow='hidden'
          drop.style.top='100%'
      }, 3000);

      setTimeout(() => {
          drop.style.height='0vh'
          dam.style.display = 'none' 
          setTimeout(() => {
          drop.style.top='0'
          document.body.style.overflow='scroll'
        }, 1400);

      }, 4000);
    }
  return (
      <>
      <div className='drop'>
          <p className='damax'>Damax</p>
      </div>
        {/* <nav className='navcontainer'>
            <ul>
                <li onClick={dropDown}>Home</li>
                <li onClick={dropDown}>Artist</li>
                <li onClick={dropDown}>Gallery</li>
                <li onClick={dropDown}>About</li>
            </ul>
            <h1>Artme</h1>
            <p>follow us @Damax_hub</p>

        </nav> */}
        <Navbar>
  <Container>
  <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        <hr className='hrnav'></hr>

      </>
    
  )
}

export default Nav