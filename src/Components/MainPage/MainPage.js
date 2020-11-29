import React, { useState } from 'react';
import down from '../images/down.png';
import right from '../images/right.png';
import { Row } from 'react-bootstrap';
import './MainPage.css';
import ClothesSection from '../ClothesSection/ClothesSection';
import Delete from '../Delete/Delete';
import Create from '../Create/Create';

const MainPage = () => {
    const [show, setShow] = useState(false)
    // cancel button function in delete popup
    const handleDeleteCancel = () => {
        if (show === false) {
            document.getElementById('deletePopUp').style = 'display: block'
            setShow(true);
        }
        if (show === true) {
            document.getElementById('deletePopUp').style = 'display: none'
            setShow(false);
        }
    }
    // cancel in create pop up
    const handleCreateCancel = () => {
        if (show === true) {
            document.getElementById('createPopUp').style = 'display: none'
            document.body.style = 'background: #fff'
            setShow(false);
        }
    }
    // delete function
    const handleDelete = () => {
        if (show === false) {
            document.getElementById('deletePopUp').style = 'display: block'
            setShow(true);
        }
        if (show === true) {
            document.getElementById('deletePopUp').style = 'display: none'
            setShow(false);
        }
    }
    // show create popup function
    const handleCreate = () => {
        if (show === false) {
            document.getElementById('createPopUp').style = 'display: block';
            document.body.style = 'background: rgba(0, 0, 0, 0.464)'
            setShow(true);
        }
        if (show === true) {
            document.getElementById('createPopUp').style = 'display: none'
            document.body.style = 'background: #fff'
            setShow(false);
        }
    }
    // show drop down
    const showDropdown = () => {
        if (show === false) {
            document.querySelector('.main-dropdown-menu').style = 'display: block'
            setShow(true);
        }
        if (show === true) {
            document.querySelector('.main-dropdown-menu').style = 'display: none'
            setShow(false);
        }
    }


    return (
        <div id="home">
            <h1 className="mainpage-title">My Packaging Lists</h1>
            <div className="home-header">
                <div>

                    <ul style={{ margin: '0px 10px' }}>
                        <li className="main-dropdown">
                            <p href="#!" className="dropdown-title" onClick={() => showDropdown()}>
                                The complete TravelWiser packing list <img src={down} className="ml-2 mr-2" alt="" />
                            </p>

                            <div className="main-dropdown-menu">
                                <p className="dropdown-menu-item">Warm country packing list</p>
                                <p className="dropdown-menu-item">Cold country packing list</p>
                                <p className="dropdown-menu-item">My very own beautiful packing list</p>
                                <p className="dropdown-menu-item">Adam’s list</p>
                                <p className="dropdown-menu-item">Made for Asia</p>
                            </div>
                        </li>
                    </ul>

                </div>
                <span className="d-flex">
                    <button className="primary-btn" onClick={() => handleCreate()}>
                        Create New
                </button>
                    <button className="primary-btn" onClick={() => handleDelete()}>
                        Delete this Packaging list
                </button>
                </span>
            </div>
            <div className="PopUp" id="deletePopUp" style={{ display: 'none' }}>
                <Delete handleCancel={handleDeleteCancel}></Delete>
            </div>
            <div className="PopUp" id="createPopUp" style={{ display: 'none' }}>
                <Create handleCancel={handleCreateCancel}></Create>
            </div>
            <div className="ml-3">
                <h2 className="item-title">
                    Clothes <img src={down} className="ml-2 mr-2" alt="" />
                </h2>

                <Row className="mt-4 mb-4 position-relative">
                    <div className="col-12 col-md-6 col-lg-3">
                        <ClothesSection></ClothesSection>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <ClothesSection></ClothesSection>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <ClothesSection></ClothesSection>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <ClothesSection></ClothesSection>
                    </div>
                </Row>
                <h2 className="item-title">
                    Toiletries/hygiene <img src={right} className="ml-2 mr-2" alt="" />
                </h2>
                <h2 className="item-title">
                    Travel essentials <img src={right} className="ml-2 mr-2" alt="" />
                </h2>
                <h2 className="item-title">
                    Others <img src={right} className="ml-2 mr-2" alt="" />
                </h2>
            </div>
        </div>
    );
};

export default MainPage;