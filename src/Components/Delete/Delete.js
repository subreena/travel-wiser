import React from 'react';
import './Delete.css';
const Delete = ({handleCancel}) => {

    return (
        <div id='delete'>
            <div>
            <h4 className="delete-title">Are you sure you want to delete this packing list?</h4>
            <button className="popup-btn"  onClick={() => handleCancel()} >
                Delete
            </button>
            <button className="cancel-btn" onClick={() => handleCancel()} >
                Cancel
            </button>
            </div>
        </div>
    );
};

export default Delete;