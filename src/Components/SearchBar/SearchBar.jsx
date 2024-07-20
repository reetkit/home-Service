import React from 'react'
import './SearchBarStyle.css'
import { useState } from 'react';
import { Modal } from 'antd';
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function SearchBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

  return (
    <section className="s-wrapper">
        <div className="innerWidth s-container">
            <div className="locationBox" onClick={showModal}>
                <div className="location">
                    <span><CiLocationOn /></span>
                    <span>1 No Bijay Nagar</span>
                </div>
                <IoIosArrowDown />

            </div>
            <Modal open={isModalOpen} title="Title" onCancel={handleCancel} footer={[]}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <div className="searchbox">
            <div className="inputBox">
            <div class="input-container">
                <form onsubmit="event.preventDefault();" role="search">
                <label for="search">Search for stuff</label>
                <input id="search" type="search" placeholder="Search..." autofocus required />
                <button className="goButton" type="submit">Go</button>    
                </form>
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default SearchBar