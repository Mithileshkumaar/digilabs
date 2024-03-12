import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './css/college.css';
import Sidebar from '../components/sidebar';
import { TiPencil } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { RiExpandUpDownFill } from "react-icons/ri";
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
                  students: 11,
                  import: 'Import File',
            },
            {
                  College: 'Sample Students name 2',
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
                              <table>
                                    <thead>
                                          <tr className='heading'>

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
                                                                        <TiPencil style={{ fontSize: '20px' }} />
                                                                  </button>
                                                                  <button style={{ border: 'none' }}>
                                                                        <RiDeleteBinLine style={{ fontSize: '20px' }} onClick={updatedTablecontent} />
                                                                  </button>
                                                            </td>
                                                            <td style={{ textAlign: 'end', paddingRight: "20px" }}>
                                                                  <button style={{ border: 'none' }}>
                                                                        <IoIosArrowForward />
                                                                  </button>
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
