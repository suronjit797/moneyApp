import React, { useEffect } from 'react';
import { getTransition } from '../store/actions/transitionActions'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';
import style from '../styles/TransitionList.module.css'



const TransitionList = ({ getTransition, transitions }) => {
    const { transition } = transitions

    console.log(transition)
    useEffect(() => {
        getTransition()
    }, [])

    const handleDelete = id => {
        console.log('delete', id)
    }
    const handleEdit = id => {
        console.log('update', id)
    }


    return (
        <div style={{ maxWidth: '500px' }} className='mx-auto my-4'>
            <Table striped hover responsive={true} variant='info' className={`text-center ${style.table}`}>
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
                                <td className={trans.type === 'expense' ? 'text-danger' : 'text-success'}> {trans.note} </td>
                                <td className={style.action}>
                                    <span onClick={() => handleEdit(trans._id)} className='mx-2 text-primary'> <BiEditAlt /> </span>
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
    transitions: state.transition
})

export default connect(getStateToProps, { getTransition })(TransitionList);