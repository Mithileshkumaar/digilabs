import React, { useState } from "react";
import './css/navbar.css';
import dlogo from '../assets/digilogo.png';
import bell from '../assets/bell.png';
import { MdFileDownload } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { TfiPowerOff } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";



function Navbar() {
      const [isMenuOPen, setIsMenuOpen] = useState(false);
      const togglemenu = () => {
            setIsMenuOpen(!isMenuOPen);
      }


      return (
            <div className="navbar">
                  <div className='flex-content' style={{ display: 'flex', gap: '30px' }}>
                        <Link to='/'>
                              <img src={dlogo} alt="" style={{ margin: '', height: '45px', paddingTop: '10px', paddingLeft: '30px' }} />
                        </Link>
                        <a href="../assets/logo.png" download >
                              <button style={{ display: 'flex', paddingTop: "15px", }} className="btn">
                                    <span> <MdFileDownload style={{ fontSize: '20px', }} /></span>Download Import Template
                              </button>
                        </a>
                  </div>

                  <div className='flex-content' style={{ display: 'flex', paddingRight: '30px' }}>
                        <div>
                              <img src={bell} alt="" style={{ marginTop: '10px', }} className="btn" />
                        </div>
                        <div>
                              <button style={{ border: 'none', }} onClick={togglemenu}>
                                    <PiDotsNineBold style={{ fontSize: '30px' }} className="btn" ></PiDotsNineBold>

                              </button>
                              {isMenuOPen && (

                                    <div className='menu' style={isMenuOPen ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}>

                                          <li>
                                                <Link to='/' style={{ color: 'black' }}><span style={{ display: 'flex', paddingTop: '3px' }}> <div><CgProfile style={{ padding: '3px 10px 0px 10px' }} /> </div> <div>Profile</div></span>
                                                </Link>
                                          </li>
                                          <hr />
                                          <li>
                                                <Link to='/' style={{ color: 'black' }}><span style={{ display: 'flex' }}> <div><TfiPowerOff style={{ padding: '3px 10px 0px 10px' }} /> </div> <div>Logout</div></span>
                                                </Link>
                                          </li>

                                    </div>
                              )}
                        </div>
                  </div>



            </div>
      );
}

export default Navbar;
