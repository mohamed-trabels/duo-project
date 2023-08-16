import React from 'react';

function ClientList(props) {
    console.log(props)
  return (
    <div className="client-list">
      <h2>Client List</h2>
      <ul>
        {props.clients.map((e, i) => (
          <li key={i}>
            <strong>Name: {e.name}</strong> <br />
            <strong>Number of Places: {e.numbrplaces}</strong> <br />
            <strong>Date: {e.date}</strong> <br />
            <strong>Time: {e.time}</strong> <br />
            <strong>Event: {e.event}</strong>
            <div className="action-buttons">
              <button>Delete</button>
              <button>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;


