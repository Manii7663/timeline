import React from 'react'
import Button from './Button';

function Bottom() {

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'flex-end', // Align items to the end of the flex container (right)
        marginBottom: '20px',// Optional: Adds some space below the button container
        marginRight:'10px'
    };

    
    return (
        <div style={buttonContainerStyle} className='Bottom'>
            <div >
                <Button content="Save" bg="#19105B"/>
                <Button content="Submit" bg="#B237C2"></Button>
            </div>
        </div>
    )

}

export default Bottom;

