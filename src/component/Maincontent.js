import React from 'react';
import Navbar from './Navbar';
import Timesheetevent from './Timesheetevent';
import Dropdown from './Dropdown';

function Maincontent()
{
    return (
        <div className="Maincontent">
            <Navbar/>
            <Timesheetevent/>
        </div>

    );
}

export default Maincontent;