import React from 'react';

const Spineer = () => {
    return (
        <div className='d-flex justify-content-center align-items-center ' style={{width:'100%' ,height:'700px'}}>
            <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spineer;