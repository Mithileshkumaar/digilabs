import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './css/college.css';
import Sidebar from '../components/sidebar';
import { TiPencil } from "react-icons/ti";
import { RiDeleteBinLine, RiExpandUpDownFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { GrMenu } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import '../components/css/pagination.css'


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

      const updatedTablecontent = (index) => {
            const updatedTablecontent = [...tableContents]
            updatedTablecontent.splice(index, 1);
            setTableContents(updatedTablecontent)
      }

      const [open, setOpen] = useState(false);
      const [tableContents, setTableContents] = useState([
            {
                  College: 'Sample Students name 1',


            },
            {
                  College: 'Sample Students name 2',

            },
            {
                  College: 'Sample Students name 3',

            },
            {
                  College: 'Sample Students name 4',

            },
            {
                  College: 'Sample Students name 5',

            },
            {
                  College: 'Sample Students name 6',

            },
            {
                  College: 'Sample Students name 7',

            },
            {
                  College: 'Sample Students name 8',

            },
            {
                  College: 'Sample Students name 9',

            },
            {
                  College: 'Sample Students name 10',

            },
            {
                  College: 'Sample Students name 11',

            },
            {
                  College: 'Sample Students name 12',

            },
            {
                  College: 'Sample Students name 13',

            },
            {
                  College: 'Sample Students name 2',

            },
            {
                  College: 'Sample Students name 2',

            },
            {
                  College: 'Sample Students name 2',

            },
            {
                  College: 'Sample Students name 2',

            },
            {
                  College: 'Sample Students name 2',

            },
            {
                  College: 'Sample Students name 2',

            },
            {
                  College: 'Sample Students name 2',

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
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);

      const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
      };

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
                        <div className='college-content'>
                              <h2>REC</h2>
                              <div className="table-container">
                                    <table>
                                          <thead>
                                                <tr className='heading' style={{ position: 'sticky', top: '0' }}>

                                                      <th style={{ display: 'flex', paddingTop: "20px", gap: "5px" }}> <span> <RiExpandUpDownFill style={{ paddingTop: "4px" }} /></span>Student</th>

                                                      <th></th>
                                                      <th></th>


                                                </tr>
                                          </thead>
                                          <tbody>
                                                {tableContents.map((item, index) => (
                                                      <React.Fragment key={index}>
                                                            <tr style={{ borderBottom: " 0.1px solid gray" }}>
                                                                  <td>{item.College}</td>

                                                                  <td>
                                                                        <button style={{ border: 'none' }}>
                                                                              <TiPencil style={{ fontSize: '20px' }} className='btn' />
                                                                        </button>
                                                                        <button style={{ border: 'none' }}>
                                                                              <RiDeleteBinLine style={{ fontSize: '20px' }} onClick={updatedTablecontent} className='btn' />
                                                                        </button>
                                                                  </td>

                                                                  <td style={{ textAlign: 'end', paddingRight: "20px" }}>
                                                                        <button style={{ border: 'none' }}>
                                                                              <IoIosArrowForward className='btn' />
                                                                        </button>
                                                                  </td>

                                                            </tr>
                                                      </React.Fragment>
                                                ))}
                                          </tbody>
                                    </table>
                              </div>
                              {/* <div className="pagination">
                                    <div>Total Records: {tableContents.length}</div>
                                    <div style={{ display: 'flex', padding: '0px 20px' }}>
                                          <div style={{ display: 'flex', }}>
                                                rows to display:
                                                <div className="custom-select" style={{ width: "20px", paddingLeft: '20px' }}>
                                                      <select>
                                                            <option value="0">Select:</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>

                                                      </select>
                                                </div>
                                          </div>
                                          <div>
                                                paging
                                          </div>
                                    </div>

                              </div> */}
                        </div>

                  </div>
            </div>
      );
}

export default DataUpload;
