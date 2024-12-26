import React, { useState } from 'react';

const SubTable = ({ details }) => {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <table
      border="1"
      style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}
    >
      <thead>
        <tr>
          <th>Select</th>
          <th>Number</th>
          <th>Order Type</th>
          <th>Line Status</th>
        </tr>
      </thead>
      <tbody>
        {details.map((item, index) => (
          <React.Fragment key={item.id}>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td
                style={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => toggleRow(item.id)}
              >
                {index + 1}
              </td>
              <td>{item.orderType}</td>
              <td>{item.lineStatus}</td>
            </tr>
            {expandedRows[item.id] && (
              <tr>
                <td
                  colSpan="4"
                  style={{ paddingLeft: '20px', background: '#f9f9f9' }}
                >
                  <strong>
                    Expanded Status Details for Order {index + 1}:
                  </strong>
                  <ul>
                    <li>Status 1: {item.lineStatus}</li>
                    <li>Status 2: Additional Details...</li>
                    <li>Status 3: Example Status</li>
                  </ul>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default SubTable;
