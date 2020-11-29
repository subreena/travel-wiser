import React from 'react';
import './Create.css';
const Create = ({handleCancel}) => {
    return (
        <div id="create">
            <div className="text-center">
            <h4>Create a New packing List</h4>
            <form action="">
                <input type="text" name="text" id="" className="create-input" placeholder="Name"/>
           <input type="text" name="text" id="" className="create-input" placeholder="Use as template"/>
            </form>
            <span className="mt-4">
            <button className="popup-btn"  onClick={() => handleCancel()} >
                Create New
            </button>
            <button className="cancel-btn" onClick={() => handleCancel()} >
                Cancel
            </button>
            </span>
            </div>
        </div>
    );
};

export default Create;