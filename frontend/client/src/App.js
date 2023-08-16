import './App.css';
import ClientList from './clientlist';
import Reservation from './Reservation';
import React, { useState, useEffect } from 'react';
import axios from "axios"

const App = () => {
  

  const [data, setData] = useState([])
  const [view, setView] = useState("reservation")
const [trigger,setTrigger]=useState(false)


  useEffect(() => {
    axios.get("http://localhost:3001/server/clients")
      .then((respond) => {
        setData(respond.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [trigger])

  const changeView = () => {
    if (view === "clientlist") {
      return <ClientList clients={data} />
    } else if (view === "reservation") {
      
      return <Reservation />

    }
  }
  const serchclient=(input)=>{
    if(!input){
      setTrigger(!trigger)
    }else {
      data.filter((e)=>
      e.name.toLowerCase().includes(input.toLowerCase())
      )
    }

  }

  return (
    <div className="App">
      <nav className="navbar">
        <a className="brand" >RestoReservation</a>
        <ul className="navbar-list">
          <li><a className="navbar-item" role="button" onClick={() => setView("clientlist")}>Client List</a></li>
          <li><a className="navbar-reservation" role="button" onClick={() => setView("reservation")}>Reservation</a></li>
          <li className="navbar-item dropdown">
            <a className="dropdown-toggle" role="button">Category</a>
            <div className="dropdown-content">
              <a role="button">Birthday</a>
              <a role="button">Date</a>
              <a role="button">Family</a>
            </div>
          </li>
        </ul>
        <div className="navbar-search">
          <input type="text"   placeholder="Search..." />
        </div>
      </nav>
      {changeView()}
    </div>
  );
}

export default App;


