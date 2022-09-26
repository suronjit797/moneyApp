import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connect } from 'react-redux'
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdAddCircleOutline } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/Link';
import { Button } from 'react-bootstrap';
import TransitionModal from './TransitionModal'


function NavComponents({ user }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const router = useRouter()
    const logout = () => {
        localStorage.removeItem('token')
        router.push('/login')
    }

    return (
        <>
            <div className="bg-primary text-white">
                <div className="container-fluid py-2 d-flex">
                    <div>Welcome <b>{user.name}</b></div>
                    <div className='ms-auto'> {user.email} </div>
                </div>
            </div>
            <Navbar bg="light" style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}} expand="lg">
                <Container fluid>
                    <Navbar.Brand> <h4 className='fw-bold'> <Link href='/'><span className="text-dark">Money App</span></Link> </h4> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link>
                                <Button
                                    onClick={handleShow}
                                    style={{ borderRadius: '30px' }}>
                                    <MdAddCircleOutline />  New Transition
                                </Button>
                            </Nav.Link>
                            <Nav.Link
                                className={`rounded-pill px-4 ${user.balance < 100 ? 'bg-danger text-white' : user.balance < 200 ? 'bg-warning' : ''}`}
                                style={{ background: '#5555553b', }}
                            >
                                <b> Balance: </b>
                                <span> {user.balance} </span>
                            </Nav.Link>
                            <NavDropdown title={<BiUserCircle />} id="basic-nav-dropdown">
                                <NavDropdown.Item>  {user.name} </NavDropdown.Item>
                                <NavDropdown.Item>  {user.email} </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>  <Link href='/transitions'><span className="text-dark">My Transitions</span></Link>  </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='text-danger fw-bold' onClick={logout}>
                                    <AiOutlineLogout />  Logout </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <TransitionModal show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
        </>
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