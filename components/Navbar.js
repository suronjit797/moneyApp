import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connect } from 'react-redux'
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import { useRouter } from 'next/router';


function NavComponents({ user }) {

    const router = useRouter()
    const logout = () => {
        localStorage.removeItem('token')
        router.push('/login')
    }



    console.log(user)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"> <h4> Money App </h4> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title={<BiUserCircle />} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"> {user.name} </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> {user.email} </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='text-danger fw-bold' onClick={logout}>
                                <AiOutlineLogout />  Logout </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const getStateFromProps = (props) => ({
    user: props.auth.user
})



export default connect(getStateFromProps)(NavComponents);



/* 
    logo
    user name
    user email
    logout button


    balance
    new transition



*/