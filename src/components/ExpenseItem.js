import React from 'react';
import { Link } from 'react-router-dom'

const ExpenseItem = ({ description, amount, createdAt, id, dispatch}) => (
    <div>
        <h3><Link to={`edit/${id}`}>{description}</Link></h3>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseItem