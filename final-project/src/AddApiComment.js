// This page will return inputs for users to enter their name and comment
// The submit will display name and comment below
import React from "react";
import './index.css';

const AddApiComment = ({ addComment }) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addComment(e.target.nameOfComment.value, e.target.bookComment.value);
        e.target.nameOfComment.value = '';
        e.target.bookComment.value = '';
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <h6>Share your thoughts and comment below!</h6>
                Enter your name: <br></br>
                <input name='nameOfComment' /> <br></br>
                Enter comment: <br></br>
                <input name='bookComment' /> <br></br>
                <button onSubmit={handleOnSubmit} className='btn btn-dark' id='api-add-button'>Submit</button>
                <hr />
            </form>
        </div>
    );
};

export default AddApiComment;