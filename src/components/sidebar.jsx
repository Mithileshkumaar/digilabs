import './css/sidebar.css';
import { MdDashboard } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
import { MdOutlineEventAvailable } from "react-icons/md";
import { Link } from "react-router-dom";


function Sidebar() {
      return (
            <div className="sidebar">
                  <li className='items' style={{ display: 'flex' }}>
                        <Link to=''>
                              <MdDashboard style={{ fontSize: '20px', padding: '0px 10px' }} />

                        </Link>
                        Dashboard
                  </li>
                  <li className='items' >
                        <Link to='/dataupload' style={{ display: 'flex' }}>
                              <div>
                                    <IoMdCloudUpload style={{ fontSize: '20px', padding: '0px 10px' }} />

                              </div>
                              <div>
                                    Data Upload
                              </div>

                        </Link>



                  </li>
                  <li className='items' >
                        <Link to='/eventmanagement' style={{ display: 'flex' }}>
                              <div>
                                    <MdOutlineEventAvailable style={{ fontSize: '20px', padding: '0px 10px' }} />

                              </div>
                              <div>
                                    Event Management

                              </div>
                        </Link>

                  </li>
            </div>
      );
}

export default Sidebar;
