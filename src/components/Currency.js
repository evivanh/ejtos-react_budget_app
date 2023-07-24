import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'

const Currency = () => {

    return (
        <div className='alert alert-primary'>
            <span>Currency: </span>
            <select className="custom-select" id="inputGroupSelect01">
                <option value="dollar" name="dollar">$ Dollar</option>
                <option value="pound" name="pound">£ Pound</option>
                <option value="euro" name="euro">€ Euro</option>
                <option value="ruppee" name="ruppee">₹ Ruppee</option>
              </select>
        </div>
    );
};

export default Currency;
