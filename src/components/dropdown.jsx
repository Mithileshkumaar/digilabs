import React, { useState } from 'react';

function DropdownButton({ options }) {
      const [isOpen, setIsOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState(null);

      const toggleDropdown = () => {
            setIsOpen(!isOpen);
      };

      const handleOptionClick = (option) => {
            setSelectedOption(option);
            setIsOpen(false);
      };

      return (
            <div className="dropdown">
                  <button onClick={toggleDropdown} className="dropdown-toggle">
                        {selectedOption ? selectedOption : 'Select an option'}
                  </button>
                  {isOpen && (
                        <div className="dropdown-menu">
                              {options.map((option, index) => (
                                    <div key={index} onClick={() => handleOptionClick(option)} className="dropdown-item">
                                          {option}
                                    </div>
                              ))}
                        </div>
                  )}
            </div>
      );
}

export default DropdownButton;
