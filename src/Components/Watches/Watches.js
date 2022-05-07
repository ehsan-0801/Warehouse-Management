import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './Watches.css'
const Watches = () => {

    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/items")
            .then(res => res.json())
            .then(data => setWatches(data));
    }, [])

    return (
        <div id="watches" className="container-fluid watchsection my-5">
            <div className='container'>
                <div className="row">
                    <h1 className='text-center my-5 text-color'>Inventory Items</h1>
                    <div className="watches-container">
                        {
                            watches.map(watch => <Watch
                                key={ watch._id }
                                watch={ watch }
                            >
                            </Watch>).slice(0, 6)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watches;