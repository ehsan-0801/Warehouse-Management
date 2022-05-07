import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Watch.css'
const Watch = ({ watch }) => {
    const { _id, name, img, description, price, quantity, SupplierName } = watch;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='watch'>
            <img className='w-100' src={ img } alt="" />
            <h2>{ name }</h2>
            <p>Price: { price }</p>
            <p>Quantity: { quantity }</p>
            <p>Supplier: { SupplierName }</p>
            <p><small>{ description }</small></p>
            <button className='btn btn-outline-secondary'>Update</button>
        </div>
    );
};

export default Watch;