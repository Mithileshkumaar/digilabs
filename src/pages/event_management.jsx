import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './css/eventmanagement.css';
import Sidebar from '../components/sidebar';
import { TiPencil } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "../components/modal";
import { IoMdClose } from "react-icons/io";
import { GrMenu } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";

function EventManagement() {
      const [EventName, setEventName] = useState('');
      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
      const [mode, setMode] = useState('');
      const [place, setPlace] = useState('');
      const [error, setError] = useState('');
      const [open, setOpen] = useState(false);
      // const [editMode, setEditMode] = useState(false);
      // const [editIndex, setEditIndex] = useState(null);
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
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
            },
            {
                  EventName: 'sample 2',
                  date: '12-5-24',
                  time: '4 - 5 am',
                  mode: 'online',
                  place: '',
                  btn: 'btn'
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

      const [isSidebarOpen, setIsSidebarOpen] = useState(true);

      const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
      };



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
                  setPlace('-')

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
      const handleDelete = (index) => {
            const updatedTableContents = [...tableContents];
            updatedTableContents.splice(index, 1);
            setTableContents(updatedTableContents);
      };
      // const handleEdit = (index) => {
      //       setEventName(tableContents[index].EventName);
      //       setDate(tableContents[index].date);
      //       setTime(tableContents[index].time);
      //       setMode(tableContents[index].mode);
      //       setPlace(tableContents[index].place);
      //       setEditMode(true);
      //       setEditIndex(index);
      //       handleOpen(); // Open the modal for editing
      // };
      // const handleSaveEdit = () => {
      //       const updatedTableContents = [...tableContents];
      //       updatedTableContents[editIndex] = {
      //             EventName,
      //             date,
      //             time,
      //             mode,
      //             place,
      //       };
      //       setTableContents(updatedTableContents);
      //       handleClose();
      //       setEventName('');
      //       setDate('');
      //       setTime('');
      //       setMode('');
      //       setPlace('');
      //       setEditMode(false);
      // };

      return (
            <div className="eventmanagement">
                  <Navbar />

                  <div className='content'>

                        {isSidebarOpen && (

                              <div className='sidebar' style={isSidebarOpen ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}>
                                    <Sidebar />
                              </div>
                        )}
                        <button
                              className="toggle-button"
                              onClick={toggleSidebar}
                              style={{
                                    textAlign: 'start',
                                    height: '40px',
                                    border: 'none',
                                    backgroundColor: '#E4EBFF',
                                    transition: 'transform 4s ease-in-out', // Apply transition inline
                              }}
                        >
                              {isSidebarOpen ? <IoCloseSharp /> : <GrMenu />}
                        </button>
                        <div className='eventmanagement-content' style={{ paddingTop: '0px' }}
                        >
                              <div className='table-container'>
                                    <table>
                                          <thead>
                                                <tr className='heading' style={{ position: 'sticky', top: '0' }}>
                                                      <th>Event Name</th>
                                                      <th>Date</th>
                                                      <th>Time</th>
                                                      <th>Mode</th>
                                                      <th>Place</th>
                                                      <th></th>
                                                      <th style={{ textAlign: 'end', padding: "0px 0px", display: 'flex', justifyContent: "flex-end" }}>
                                                            <button style={{ width: "120px" }} className='btn'>Send Bulk Mail</button>
                                                            <button type="button" className='btn' onClick={handleOpen} style={{ backgroundColor: '#4EC35D', color: 'white', border: 'none', width: "120px" }}>Add Event</button>
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
                                                            <tr style={{ borderBottom: " 0.1px solid gray", textAlign: 'start', }}>
                                                                  <td style={{ width: '70px' }}>{item.EventName}</td>
                                                                  <td style={{ width: '70px' }}>{item.date}</td>
                                                                  <td style={{ width: '70px' }}>{item.time}</td>
                                                                  <td style={{ width: '70px' }}>{item.mode}</td>
                                                                  <td style={{ width: '70px' }}>{item.place}</td>
                                                                  <td style={{ display: 'flex' }}>
                                                                        <button style={{ border: 'none' }}
                                                                        // onClick={() => handleEdit(index)}
                                                                        >
                                                                              <TiPencil style={{ fontSize: '20px' }} className='btn' />
                                                                        </button>
                                                                        <button style={{ border: 'none' }} onClick={() => handleDelete(index)}>
                                                                              <RiDeleteBinLine style={{ fontSize: '20px' }} className='btn' />
                                                                        </button>
                                                                  </td>
                                                                  <td style={{ textAlign: 'end', paddingRight: "20px", }}>
                                                                        <button style={{ border: 'none' }}><IoIosArrowForward className='btn' /></button>
                                                                  </td>
                                                            </tr>
                                                      </React.Fragment>
                                                ))}
                                          </tbody>
                                    </table>
                              </div>
                              <div className='pagination'>

                              </div>
                        </div>
                  </div>


            </div>
      );
}

export default EventManagement;
