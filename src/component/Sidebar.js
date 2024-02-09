import React from "react";

function Sidebar() {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <ul class="list-unstyled ">
          <p>logo</p>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Timesheet</a>
          </li>
          <li>
            <a href="#">Leave</a>
          </li>
          <li>
            <a href="#">Work From Home</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">Survey</a>
          </li>
          <li>
            <a href="#">Service Disk</a>
          </li>
          <li>
            <a href="#">Forms</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Expenses</a>
          </li>
          <li>
            <a href="#">Resourcing</a>
          </li>
        </ul>

        <div class="bottom-content">
          <hr class="line" />
          <div style={{display:"flex",flexDirection:"column"}}>
            <div>Manisha  <i class="bi bi-box-arrow-right"></i></div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
