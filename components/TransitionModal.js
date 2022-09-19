import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createTransition } from '../store/actions/transitionActions'
import { connect } from 'react-redux'

function TransitionModal({ show, handleClose, createTransition }) {

    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('')
    const [note, setNote] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        createTransition({
            amount: +amount,
            type,
            note
        })
        setAmount(0)
        setType('')
        setNote('')
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
                                controlId="amount"
                                required
                                onChange={e => setAmount(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="type">
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                controlId="amount"
                                required
                                onChange={e => setType(e.target.value)}
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

export default connect(null, { createTransition })(TransitionModal);