import React, { useState } from "react";
import './css/navbar.css';
import dlogo from '../assets/digilogo.png';
import bell from '../assets/bell.png';
import { MdFileDownload } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";


function Navbar() {



      return (
            <div className="navbar">
                  <div className='flex-content' style={{ display: 'flex', gap: '30px' }}>
                        <img src={dlogo} alt="" style={{ margin: '', height: '45px', }} />
                        <a href="../assets/logo.png" download>
                              <button style={{ display: 'flex', paddingTop: "15px" }}>
                                    <span> <MdFileDownload style={{ fontSize: '20px' }} /></span>Download Import Template
                              </button>
                        </a>
                  </div>

                  <div className='flex-content' style={{ display: 'flex', }}>
                        <div>
                              <img src={bell} alt="" style={{ marginTop: '10px', }} />
                        </div>
                        <div>
                              <button style={{ border: 'none', }} >
                                    <PiDotsNineBold style={{ fontSize: '30px' }} ></PiDotsNineBold>
                              </button>
                        </div>
                  </div>



            </div>
      );
}

export default Navbar;
