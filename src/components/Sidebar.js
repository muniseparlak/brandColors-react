import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { GrClose }  from "react-icons/gr"

function Sidebar() {

const [modalIsOpen, setmodalIsOpen] = useState(false)


const toggleModal = () => {
    setmodalIsOpen(!modalIsOpen)
}

  return (
    <>
        <aside className='sidebar'>
      <div className='logo'>
      <a>Brand<b>Colors</b></a>
      </div>
      <div className='description'>
        The biggest collection of official brand colors codes around. Curated by @brandcolors and friends.
      </div>
      <nav className='menu'>
        <ul>
            <li>
                <a onClick={toggleModal}>About BrandsColors</a>
            </li>
        </ul>
      </nav>
      </aside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
           overlayClassName="about-modal-overlay"
      >
        
        <button className='modal-close' onClick={toggleModal}><GrClose/></button>
        
        <h3>About BrandColors</h3>
        <p>BrandColors was created by DesignBombs. The goal was the create a helpful reference for the brand color codes that are needed most often</p>
        <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pages view. There are now over <b>600 brands</b> with <b>1600 colors</b> and the collection is always growing.</p>
      </Modal>
    </>
  )
}

export default Sidebar
