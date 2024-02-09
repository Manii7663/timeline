import React, { useState } from 'react'
import Banner from './Banner'
import Table from './Table'
import Bottom from './Bottom'
import Dropdowncontent from './Dropdown'

function Timesheetevent() {
    const [time,settime]=useState(0)
    const comp1 =
        <div class="date-range d-flex">
            <p class="fs-13 text-blue m-0 pt-2">Total Hours:{time}.0</p>
        </div>

    const comp2 = <div class="d-flex">
        <div>&lt;&nbsp;</div>
        <div class="date-range">05 Feb 2024 - 11 Feb 2024</div>
        <div>&nbsp;&gt;</div>
    </div>



    const btn=
    <a class=" btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    
            </a>
    const[check,setCheck]=useState(false);

    return (
        <div className='Timesheetevent' onClick={(e)=>setCheck(!check)}>
            <Banner left_content={comp1} right_content={comp2} color="#19105B" bg="white" />
            <Banner left_content="Allocation Extension" right_content={btn} color="white" bg="#19105B" />
            
            <Banner left_content="Timesheet" right_content="" color="white" bg="#19105B" />
            <Table settime={settime}/>



        </div>

    )

}

export default Timesheetevent;