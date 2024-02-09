import React from 'react';

function Banner(props)
{
    const banner_style= {
        color: props.color,
        background: props.bg
    }
    return (
        <div className='Banner' style={banner_style}>
            <div id='left'>{props.left_content}</div>
            <div id="right">{props.right_content}</div>
        </div>
    )
}

export default Banner;
