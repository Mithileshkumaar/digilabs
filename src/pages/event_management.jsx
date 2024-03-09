import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './css/eventmanagement.css';
import Sidebar from '../components/sidebar';
import { TiPencil } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "../components/modal";
import { IoMdClose } from "react-icons/io";

function EventManagement() {
      const [EventName, setEventName] = useState('');
      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
      const [mode, setMode] = useState('');
      const [place, setPlace] = useState('');
      const [error, setError] = useState('');
      const [open, setOpen] = useState(false);
      const [tableContents, setTableContents] = useState([
            {
                  EventName: 'sample 1',
                  date: '12-5-24',
                  time: '4 - 5 pm',
                  mode: 'online',
                  place: 'Chennai',
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
            }
      ]);

      const handleClose = () => {
            setOpen(false);
      };

      const handleOpen = () => {
            setOpen(true);
      };

      function validateEvent() {
            if (!EventName.trim()) {
                  setError("Please enter the event name");
                  return false;
            }
            if (!date.trim()) {
                  setError("Please enter the date");
                  return false;
            }
            if (!time.trim()) {
                  setError("Please enter the time");
                  return false;
            }
            if (!mode.trim()) {
                  setError("Please enter the mode");
                  return false;
            }
            if (!place.trim()) {
                  setError("Please enter the place");
                  return false;
            }
            return true;
      }

      function handleSubmit() {
            if (validateEvent()) {
                  const newItem = {
                        EventName: EventName,
                        date: date,
                        time: time,
                        mode: mode,
                        place: place,
                  };
                  setTableContents([...tableContents, newItem]);
                  handleClose();
                  setEventName('');
                  setDate('');
                  setTime('');
                  setMode('');
                  setPlace('');
            }
      }

      return (
            <div className="eventmanagement">
                  <Navbar />
                  <div className='content'>
                        <div className='sidebar'>
                              <Sidebar />
                        </div>
                        <div className='eventmanagement-content'>
                              <table>
                                    <thead>
                                          <tr className='heading'>
                                                <th>Event Name</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Mode</th>
                                                <th>Place</th>
                                                <th></th>
                                                <th style={{ textAlign: 'end', padding: "0px 10px" }}>
                                                      <button style={{ width: "120px" }}>Send Bulk Mail</button>
                                                      <button type="button" onClick={handleOpen} style={{ backgroundColor: '#4EC35D', color: 'white', border: 'none', width: "120px" }}>Add Event</button>
                                                      <Modal isOpen={open} >
                                                            <>
                                                                  <div className='modal'>
                                                                        <div style={{ backgroundColor: '#A3D9E8', width: '100%', textAlign: "start", display: 'flex', justifyContent: 'space-between' }}><h4 style={{ padding: '0px 30px', }}>Add Event</h4><button onClick={handleClose} style={{ border: 'none', backgroundColor: '#A3D9E8' }}><IoMdClose fontSize={'20px'} /></button></div>
                                                                        <div style={{ padding: '0px 10px', display: 'flex', flexDirection: 'column' }}>

                                                                              <h5 style={{ width: '100%', textAlign: "start", padding: '0px 30px' }}>Event Name</h5>
                                                                              <input type="text"
                                                                                    name="" id="eventName"
                                                                                    placeholder='Enter Event Name'
                                                                                    style={{ border: 'solid gray', width: '400px', margin: '10px 30px' }}
                                                                                    value={EventName}
                                                                                    onChange={(e) => setEventName(e.target.value)}
                                                                              />

                                                                              <input type="date"
                                                                                    name=""
                                                                                    id="date" placeholder=''
                                                                                    style={{ border: 'solid gray', width: '400px', margin: '10px 30px' }}
                                                                                    value={date}
                                                                                    onChange={(e) => setDate(e.target.value)}
                                                                              />

                                                                              <input type="time"
                                                                                    name=""
                                                                                    id="time" placeholder=''
                                                                                    style={{ border: 'solid gray', width: '400px', margin: '10px 30px' }}
                                                                                    value={time}
                                                                                    onChange={(e) => setTime(e.target.value)}
                                                                              />

                                                                              <input type="text"
                                                                                    name="" id="mode"
                                                                                    placeholder='Enter Mode'
                                                                                    style={{ border: 'solid gray', width: '400px', margin: '20px 30px' }}
                                                                                    value={mode}
                                                                                    onChange={(e) => setMode(e.target.value)}
                                                                              />

                                                                              <input type="text"
                                                                                    name="" id="place"
                                                                                    placeholder='Enter Place'
                                                                                    style={{ border: 'solid gray', width: '400px', margin: '10px 30px' }}
                                                                                    value={place}
                                                                                    onChange={(e) => setPlace(e.target.value)}
                                                                              />

                                                                              <div style={{ textAlign: 'center', padding: '15px 10px 0px 10px' }}>
                                                                                    {error && <p style={{ color: 'black' }}>{error}</p>}
                                                                                    <button style={{ border: 'solid gray', width: "80px" }} onClick={handleClose} >cancel</button>
                                                                                    <button style={{ backgroundColor: '#374260', color: 'white', border: 'none', width: "80px" }} onClick={handleSubmit}>Save</button>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </>
                                                      </Modal>
                                                </th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {tableContents.map((item, index) => (
                                                <React.Fragment key={index}>
                                                      <tr style={{ borderBottom: " 0.1px solid gray", textAlign: 'start' }}>
                                                            <td>{item.EventName}</td>
                                                            <td>{item.date}</td>
                                                            <td>{item.time}</td>
                                                            <td>{item.mode}</td>
                                                            <td>{item.place}</td>
                                                            <td><button style={{ border: 'none' }}>  <TiPencil style={{ fontSize: '20px' }} /></button>
                                                                  <button style={{ border: 'none' }}><RiDeleteBinLine style={{ fontSize: '20px' }} /></button>
                                                            </td>
                                                            <td style={{ textAlign: 'end', paddingRight: "20px", }}><button style={{ border: 'none' }}><IoIosArrowForward /></button></td>
                                                      </tr>
                                                </React.Fragment>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      );
}

export default EventManagement;
