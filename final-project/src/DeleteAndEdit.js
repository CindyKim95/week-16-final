// After submitting, DeleteAndEdit.js will display the name and comment along with Edit and Delete Button
import React from "react";
import './index.css';

const DeleteAndEdit = ({id, nameOfComment, bookComment, deleteButton}) => {
    const handleDelete = () => {
        deleteButton(id);
    }

    return (
        <div className='comment-data'>
            <div className='name-comment-section'>
                <span id='name-style'>{nameOfComment}</span>
                <p>{bookComment}</p>
            </div>

            <form>
                <button className='btn btn-dark'>Edit</button>
                <button onClick={handleDelete} className='btn btn-dark' id='delete-button'>Delete</button>
            </form>
            <hr />
        </div>
    )
}

export default DeleteAndEdit;