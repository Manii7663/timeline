import React from 'react'
function Button({content,daysdata}) {
    
    const buttonStyle = {
        marginLeft: '10px', // Adds space between the buttons
        // backgroundColor: props.bg,
        height:'30px',
        width:'100px',
        color:'white'
    };
 
  const handleSaveData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(daysdata),
      });
 
      if (response.ok) {
        console.log(response)
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };
 
  return (
   
    <button style={buttonStyle} onClick={handleSaveData}>{content}</button>
   
  )
}
 
export default Button