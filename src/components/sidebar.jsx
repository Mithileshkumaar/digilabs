import './css/sidebar.css';
import { MdDashboard } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
import { MdOutlineEventAvailable } from "react-icons/md";

function Sidebar() {
      return (
            <div className="sidebar">
                  <li className='items'>
                        <a>
                              <MdDashboard style={{ fontSize: '20px', padding: '0px 10px' }} />
                              Dashboard
                        </a>
                  </li>
                  <li className='items'>
                        <a href='/dataupload'>
                              <span>
                                    <IoMdCloudUpload style={{ fontSize: '20px', padding: '0px 10px' }} />
                              </span>
                              Data Upload
                        </a>
                  </li>
                  <li className='items'>
                        <MdOutlineEventAvailable style={{ fontSize: '20px', padding: '0px 10px' }} />
                        <a href='/eventmanagement'>Event Management</a>
                  </li>
            </div>
      );
}

export default Sidebar;
