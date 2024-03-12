import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './css/dataupload.css';
import { Link } from "react-router-dom";
import Sidebar from '../components/sidebar';
import { TiPencil } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { RiExpandUpDownFill } from "react-icons/ri";
import Modal from "../components/modal";
import { IoMdClose } from "react-icons/io";
import { GrMenu } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";

function DataUpload() {
      const [CollegeName, setCollegeName] = useState('');
      const [Students, setStudents] = useState('');
      const [Error, setError] = useState('');

      function validate() {
            setError('');
            if (!CollegeName.trim()) {
                  setError("Please enter the college name");
                  return false;
            }
            if (!Students.trim()) {
                  setError("Please enter number of students");
                  return false;
            }
            return true;
      }
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);

      const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
      };

      function handleSaveCollege() {
            if (validate()) {
                  const newItem = {
                        College: CollegeName,
                        students: Students,
                        import: 'Import File',
                  };
                  setTableContents([...tableContents, newItem]);
                  handleClose();
            }
      }

      const [open, setOpen] = useState(false);
      const [tableContents, setTableContents] = useState([
            {
                  College: 'College 1',
                  students: 11,
                  import: 'Import File',
            },
            {
                  College: 'College 2',
                  students: 121,
                  import: 'Import File',
            }
      ]);

      const handleClose = () => {
            setOpen(false);
      };

      const handleOpen = () => {
            setOpen(true);

            setCollegeName('');
            setStudents('');
      };
      const handleDelete = (index) => {
            const updatedTablecontent = [...tableContents]
            updatedTablecontent.splice(index, 1);
            setTableContents(updatedTablecontent)


      }
      return (
            <div className="Dataupload">
                  <Navbar />
                  <div className='content'>
                        {isSidebarOpen && (
                              <div className='sidebar'>
                                    <Sidebar />
                              </div>

                        )}
                        <button className="toggle-button" onClick={toggleSidebar} style={{ textAlign: 'start', height: '40px', border: 'none', backgroundColor: '#E4EBFF' }} >
                              {isSidebarOpen ? <IoCloseSharp /> : <GrMenu />}
                        </button>
                        <div className='dataupload-content' style={{ paddingTop: '0px' }}>


                              <table>
                                    <thead>
                                          <tr className='heading'>
                                                <th style={{ display: 'flex', paddingTop: "20px", gap: "5px" }}> <span> <RiExpandUpDownFill style={{ paddingTop: "4px" }} /></span>College Name</th>
                                                <th>Students</th>
                                                <th></th>
                                                <th></th>
                                                <th style={{ textAlign: 'end', padding: "0px", display: 'flex', justifyContent: "flex-end" }}>
                                                      <button style={{ width: "120px" }}>Send Bulk Mail</button>
                                                      <button type="button" onClick={handleOpen} style={{ backgroundColor: '#4EC35D', color: 'white', border: 'none', width: "120px" }}>
                                                            Add College
                                                      </button>
                                                      <Modal isOpen={open}>
                                                            <>
                                                                  <div className='modal'>
                                                                        <div style={{ backgroundColor: '#A3D9E8', width: '100%', textAlign: "start", display: 'flex', justifyContent: 'space-between' }}>
                                                                              <h4 style={{ padding: '0px 30px' }}>Add College</h4>
                                                                              <button onClick={handleClose} style={{ border: 'none', backgroundColor: '#A3D9E8' }}><IoMdClose fontSize={'20px'} /></button>
                                                                        </div>
                                                                        <div style={{ padding: '0px 10px', display: 'flex', flexDirection: 'column' }}>
                                                                              <h5 style={{ width: '100%', textAlign: "start", padding: '0px 30px' }}>College name</h5>
                                                                              <input type="text" name="" id="collegeName" placeholder='Enter' style={{ border: 'solid gray', width: '400px', margin: '10px 30px' }} value={CollegeName} onChange={(e) => setCollegeName(e.target.value)} />
                                                                              <input type="number" name="" id="students" placeholder='Enter' style={{ border: 'solid gray', width: '400px', margin: '10px 30px' }} value={Students} onChange={(e) => setStudents(e.target.value)} />
                                                                              {Error && <p style={{ color: 'black', textAlign: 'center' }}>{Error}</p>}
                                                                              <div style={{ textAlign: 'center', padding: '15px 10px 0px 10px' }}>
                                                                                    <button style={{ border: 'solid gray', width: "80px" }} onClick={handleClose}>Cancel</button>
                                                                                    <button style={{ backgroundColor: '#374260', color: 'white', border: 'none', width: "80px" }} onClick={handleSaveCollege}> Save</button>
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
                                                      <tr style={{ borderBottom: " 0.1px solid gray" }}>
                                                            <td>{item.College}</td>
                                                            <td><span style={{ border: '0.1px solid gray', borderRadius: "50%", width: ' 30px', padding: '5px 10px ', color: '#66A1EC' }}>{item.students}</span></td>
                                                            <td><button style={{ padding: '7px 15px' }}>{item.import}</button></td>
                                                            <td>
                                                                  <button style={{ border: 'none' }}>
                                                                        <TiPencil style={{ fontSize: '20px' }} />
                                                                  </button>
                                                                  <button style={{ border: 'none' }} onClick={handleDelete}>
                                                                        <RiDeleteBinLine style={{ fontSize: '20px' }} />
                                                                  </button>
                                                            </td>
                                                            <td style={{ textAlign: 'end', paddingRight: "20px" }}>
                                                                  <Link to="/college">  <button style={{ border: 'none' }}>
                                                                        <IoIosArrowForward />
                                                                  </button>
                                                                  </Link>
                                                            </td>
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

export default DataUpload;
