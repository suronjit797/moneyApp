import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from '../styles/RightNav.module.css'
import moment from 'moment'
import Types from '../store/types/Type'


const monthList = [
    { January: '01' },
    { February: '02' },
    { March: '03' },
    { April: '04' },
    { May: '05' },
    { June: '06' },
    { July: '07' },
    { August: '08' },
    { September: '09' },
    { October: '10' },
    { November: '11' },
    { December: '12' }
]


const RightNav = ({ user, changeDate }) => {




    const [month, setMonth] = useState(moment().format('MM'))
    const [year, setYear] = useState(moment().format('YYYY'))

    const handleSubmit = event => {
        event.preventDefault()
        changeDate({ month, year })
    }


    return (
        <div className={styles.RightNav}>
            <form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center g-3">
                    <Form.Select
                        style={{ width: '60%' }}
                        value={month}
                        onChange={e => setMonth(e.target.value)}
                        required
                    >
                        <option value=''> Month </option>
                        {
                            monthList.map(m => (
                                <option key={Object.keys(m)} value={Object.values(m)}>{Object.keys(m)}</option>
                            ))
                        }
                    </Form.Select>
                    <Form.Group className='ms-2' style={{ width: '40%' }} controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="Number"
                            placeholder="Year"
                            min={2000}
                            max={3000}
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            required
                        />
                    </Form.Group>
                </div>
                <Button type='submit' className='mt-3 w-100'> Filter </Button>
            </form>
            <hr />

            <p> Balance: {user?.balance} tk </p>
            <hr />
            <p> Income: {user?.income} tk </p>
            <hr />
            <p> Expense: {user?.expense} tk </p>
            <hr />
            <p> Total Transition: {user?.transitions?.length} </p>
        </div>
    );
};

const getStateToProps = state => ({
    user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    changeDate: date => dispatch({ type: Types.SET_DATE, payload: date })
})

export default connect(getStateToProps, mapDispatchToProps)(RightNav);