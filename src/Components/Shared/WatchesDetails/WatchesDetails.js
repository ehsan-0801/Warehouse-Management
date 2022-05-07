import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useWatchDetails from '../../../Hooks/useWatchDetails';
import './WatchDetails.css'
const WatchesDetails = () => {
    const watches = useParams();
    console.log(watches);
    const [watch] = useWatchDetails(watches.id);
    const [quantity, setQuantity] = useState();

    return (
        <div className="p-3 bgCustom">
            <Table striped bordered hover variant="secondary" className="container">
                <thead>
                    <tr>
                        <th>Details About Watch</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img className="tableimg" src={ watch.img } alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><span className="text-dark fw-bold">PRODUCT ID: </span>{ watch._id }</td>
                    </tr>
                    <tr>
                        <td><span className="text-dark fw-bold">NAME: </span>{ watch.name }</td>
                    </tr>
                    <tr>
                        <td>{ watch.description }</td>
                    </tr>
                    <tr>
                        <td><span className="text-dark fw-bold">PRICE: </span>{ watch.price }</td>
                    </tr>
                    <tr>
                        <td><span className="text-dark fw-bold">SUPPLIER: </span>{ watch.SupplierName }</td>
                    </tr>

                    <tr>
                        <td><span className="text-dark fw-bold">QUANTITY: </span>{ watch.quantity }</td>
                    </tr>
                    <tr>
                        <td>
                            <button className="btn btn-primary">Delivered</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default WatchesDetails;