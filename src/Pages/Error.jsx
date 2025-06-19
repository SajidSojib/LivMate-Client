import React from 'react';
import { Link } from 'react-router';
const Error = () => {
    return (
        <div>
            <button className='btn btn-primary'><Link to={'/'}>Go Back</Link></button>
        </div>
    );
};

export default Error;