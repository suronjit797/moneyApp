import React, { useState } from 'react';
import { getTransition } from '../store/actions/transitionActions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createTransition } from '../store/actions/transitionActions'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

function TransitionModal({ show, handleClose, createTransition, getTransition, user, filter }) {

    const [amount, setAmount] = useState('')
    const [type, setType] = useState('')
    const [note, setNote] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (user.balance < amount && type ==='expense') {
            return Swal.fire({
                icon: 'error',
                title: 'Opps...',
                text: "You haven't enough money to expense ",
            })
        }
        await createTransition({
            amount: +amount,
            type,
            note
        })
        setAmount('')
        setType('')
        setNote('')
        getTransition(filter)
        handleClose()
    }



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Create a new transition </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="Place you amount"
                                autoFocus
                                required
                                onChange={e => setAmount(e.target.value)}
                                value={amount}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="type">
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                required
                                onChange={e => setType(e.target.value)}
                                value={type}
                            >
                                <option disabled selected value=''>Select your transition type</option>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="note">
                            <Form.Label>Note</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                required
                                onChange={e => setNote(e.target.value)}
                                value={note}
                                placeholder='Make a note for this transition'
                            />
                        </Form.Group>

                        <Modal.Footer>
                            <Button type='reset' variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type='submit' variant="success" >
                                Create a transition
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

const getStateToProps = state => ({
    user: state.auth.user,
    filter: state.filter
})


export default connect(getStateToProps, { createTransition, getTransition })(TransitionModal);