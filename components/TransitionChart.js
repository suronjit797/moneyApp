import React, { useEffect, useState } from 'react';
import { getTransition } from '../store/actions/transitionActions'
import { connect } from 'react-redux'

import { LineChart, Line, XAxis, YAxis,  Tooltip, ResponsiveContainer } from 'recharts';



const TransitionList = ({ filter, getTransition, transitions }) => {
    const { transition } = transitions
    useEffect(() => {
        getTransition(filter)
    }, [filter])


    if (!transition.length) {
        return (
            <p className="text-danger m-3"> No transition found </p>
        )
    }
    const reverseTransition = transition.reverse()

    return (
        <div style={{ maxWidth: '500px' }} className='mx-auto my-4'>

            <ResponsiveContainer width="100%" aspect={2}>
                <LineChart width={300} height={100} data={reverseTransition}>
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={3} />
                    <YAxis />
                    <XAxis style={{color: 'red'}} dataKey='type' />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

const getStateToProps = (state) => ({
    transitions: state.transition,
    filter: state.filter
})

export default connect(getStateToProps, { getTransition })(TransitionList);