import React, { useState } from 'react';

function Dropdown({ flag }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    

    // const options= props.option;
    const options1 = ['Project', 'BAU 001 Training & project', 'BAU 002 People', 'BAU 003 Sales', 'BAU 004 Delivery'];
    const options2 = ['Project'];


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };



    return (
        <div className="custom-dropdown"  >
            <div className={`dropdown-header ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                <select>
                    if({flag}==true)
                    {
                            options1.map((option, index) => (
                                <option key={index} onClick={() => handleOptionClick(option)}>   {option}</option>
                            ))

                    }
                    else
                    {
                            options2.map((option, index) => (
                                <option key={index} onClick={() => handleOptionClick(option)}>   {option}</option>
                            ))
                        

                        
                    }






                </select>
            </div>

        </div>
    );
};

export default Dropdown;
