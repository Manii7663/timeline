import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";

function Table({ settime }) {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      Project_Type: "Row 1, Column 1",
      Project_Name: "",
      Task: "",
      comment: " ",
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thur: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    },
  ]);

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end", // Align items to the end of the flex container (right)
    marginBottom: "20px", // Optional: Adds some space below the button container
    marginRight: "10px",
  };
  
  const [Sum, setSum] = useState([
    { id: 0, Mon: 0, Tue: 0, Wed: 0, Thur: 0, Fri: 0, Sat: 0, Sun: 0 },
  ]);

  const [daysdata, setDaysdata] = useState([
    { id: 0, Mon: 0, Tue: 0, Wed: 0, Thur: 0, Fri: 0, Sat: 0, Sun: 0 },
  ]);

  const [data, setData] = useState([{ id: 0 }]);
  const [total, setTotal] = useState(0);

  const [data1, setData1] = useState([{ id: "a0" }]);

  useEffect(() => {
    const newDayValue = {};
    daysdata.forEach((item) => {
      for (const day in item) {
        if (day !== "id") {
          newDayValue[day] =
            (newDayValue[day] || 0) + (parseInt(item[day]) || 0);
        }
      }
    });
    console.log(newDayValue);
    setSum(newDayValue);
  }, [daysdata]);

  function Sumit(id, day, value) {
    setDaysdata((prevdata) => {
      const updatedDays = [...prevdata];
      console.log(daysdata);
      const existingItem = updatedDays.find((item) => item.id === id);

      if (existingItem) {
        existingItem[day] = parseInt(value) || 0;
      } else {
        const new_item = { id: id, [day]: parseInt(value) || 0 };
        updatedDays.push(new_item);
        console.log("new data", daysdata);
      }

      return updatedDays;
    });
  }

  useEffect(() => {
    let tt = 0;
    const valuesArray = Object.values(Sum);

    valuesArray.forEach((element) => {
      tt += parseInt(element);
    });
    setTotal(tt);
    settime(tt);
  }, [Sum]);

  function Handleadd() {
    setData((prevdata) => [...prevdata, { id: data.length + 1 }]);
  }
  function Handleadd1() {
    setData1((prevdata) => [...prevdata, { id: "a" + data1.length + 1 }]);
  }
  function Handleminus(id) {
    const prevstate = data.filter((items) => items.id !== id);
    setData(prevstate);
  }
  function Handleminus1(id) {
    const prevstate = data1.filter((items) => items.id !== id);
    setData1(prevstate);
  }

  const onClickHandler = () => {
    console.log(data);
  };
  return (
    <>
      <div className="Table">
        <table class="table">
          <thead>
            <tr>
              <td scope="col">Project Type</td>
              <td scope="col">Project Name</td>
              <td scope="col">Task</td>
              <td scope="col">Comment</td>
              <td>
                <p style={{ margin: 0 }}>Mon</p>
                <p style={{ fontWeight: "500" }}>05</p>
              </td>
              <td>
                <p style={{ margin: 0 }}>Tues</p>
                <p style={{ fontWeight: "500" }}>06</p>
              </td>
              <td>
                <p style={{ margin: 0 }}>Wed</p>
                <p style={{ fontWeight: "500" }}>07</p>
              </td>
              <td>
                <p style={{ margin: 0 }}>Thurs</p>
                <p style={{ fontWeight: "500" }}>08</p>
              </td>
              <td>
                <p style={{ margin: 0 }}>Fri
        </p>
                <p style={{ fontWeight: "500" }}>09</p>
              </td>
              <td>
                <p style={{ margin: 0 }}>Sat</p>
                <p style={{ fontWeight: "500" }}>10</p>
              </td>
              <td>
                <p style={{ margin: 0 }}>Sun</p>
                <p style={{ fontWeight: "500" }}>11</p>
              </td>

              <td>Total</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {data.map((items, index) => (
              <tr key={index}>
                <th scope="row" class="datatable-column-style">
                  BAU Activity
                </th>
                <td>
                  <Dropdown flag="true" />
                </td>
                <td>
                  <input placeholder="Task" style={{ width: "50px" }}></input>
                </td>
                <td>
                  <input style={{ width: "50px", border: "none" }}></input>
                </td>
                {["Mon", "Tue", "Wed", "Thur", "Fri",
        "Sat", "Sun"].map(
                  (days) => (
                    <td>
                      <input
                        type="text"
                        onChange={(e) => {
                          Sumit(items.id, days, e.target.value);
                        }}
                        key={days}
                        style={{
                          width: "40px",
                          height: "20px",
                          border: "none",
                        }}
                      ></input>
                    </td>
                  )
                )}
                <td style={{ display: "flex" }}>
                  <button style={{ border: "none" }} onClick={Handleadd}>
                    +
                  </button>
                  &nbsp;
                  {data.length > 1 ? (
                    <button
                      style={{ border: "none" }}
                      onClick={() => {
                        Handleminus(items.id);
                      }}
                    >
                      -
                    </button>
                  ) : (
                    <div></div>
                  )}
                </td>
              </tr>
            ))}

            {data1.map((items, index) => (
              <tr key={index}>
                <th scope="row">Sales Activity</th>
                <td>
                  <div>
                    <Dropdown flag="false" />
                  </div>
                </td>

                <td>
                  <input placeholder="Task" style={{ width: "50px" }}></input>
                </td>
                <td>
                  <input style={{ width: "50px", border: "none" }}></input>
                </td>
                {["Mon", "Tue", "Wed", "Thur", "Fri","Sat", "Sun"].map(
                  (days) => (
                    <td>
                      <input
                        type="text"
                        onChange={(e) => {
                          Sumit(items.id, days, e.target.value);
                        }}
                        key={days}
                        style={{
                          width: "40px",
                          height: "20px",
                          border: "none",
                        }}
                      ></input>
                    </td>
                  )
                )}
                <td style={{ display: "flex" }}>
                  <button style={{ border: "none" }} onClick={Handleadd1}>
                    +
                  </button>
                  &nbsp;
                  {data1.length > 1 ? (
                    <button
                      style={{ border: "none" }}
                      onClick={() => {
                        Handleminus1(items.id);
                      }}
                    >
                      -
                    </button>
                  ) : (
                    <div></div>
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row">Total Hours</th>
              <td></td>
              <td></td>
              <td></td>
              <td>{Sum.Mon}</td>
              <td>{Sum.Tue}</td>
              <td>{Sum.Wed}</td>
              <td>{Sum.Thur}</td>
              <td>{Sum.Fri
      }</td>
              <td>{Sum.Sat}</td>
              <td>{Sum.Sun}</td>
              <td>{total}</td>
            </tr>
            <tr>
              <th scope="row">Machine Hours</th>
            </tr>
            <tr>
              <th scope="row">Break Hours</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={buttonContainerStyle} className="Bottom">
        <div>
          <Button
            content="Save"
            bg="#19105B"
            daysdata={daysdata}
          />
          <Button content="Submit" bg="#B237C2"></Button>
        </div>
      </div>
    </>
  );
}

export default Table;
