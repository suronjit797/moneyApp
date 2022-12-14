import React, { useEffect, useState } from 'react';
import { getTransition, deleteTransition } from '../store/actions/transitionActions'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import style from '../styles/TransitionList.module.css'


const TransitionList = ({ filter, getTransition, transitions, deleteTransition }) => {
    const { transition } = transitions
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTransition(filter)
        setLoading(false)
    }, [filter, loading])

    const handleDelete = id => {
        deleteTransition(id)
        getTransition(filter)
        setLoading(true)
    }

    const monthNames = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
    }

    if (!transition.length) {
        return (
            <p className="text-danger text-center my-5"> <b> No transition found in {monthNames[filter.month]}. Create a New transition </b> </p>
        )
    }

    return (
        <div style={{ width: '100%' }} className='px-3 my-4'>
            <Table striped hover responsive={true} className={`text-center ${style.table}`}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Note</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transition.map((trans, ind) => (
                            <tr key={trans._id}>
                                <td className={trans.type === 'expense' ? 'text-danger' : 'text-success'}> {ind + 1} </td>
                                <td className={trans.type === 'expense' ? 'text-danger' : 'text-success'}>{trans.amount}</td>
                                <td className={trans.type === 'expense' ? 'text-danger' : 'text-success'}>{trans.type}</td>
                                <td className={trans.type === 'expense' ? 'text-danger' : 'text-success'}>
                                    {trans.note.length < 50 ? trans.note : `${trans.note.slice(0, 50)}...`}
                                </td>
                                <td className={style.action}>
                                    <span onClick={() => handleDelete(trans._id)} className='mx-2 text-danger'> <RiDeleteBin7Fill /> </span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

const getStateToProps = (state) => ({
    transitions: state.transition,
    filter: state.filter
})

export default connect(getStateToProps, { getTransition, deleteTransition })(TransitionList);