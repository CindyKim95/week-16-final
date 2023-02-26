// Using MockApi to create fake name & comments
// MockApi link https://63f431f8fe3b595e2eeeddf3.mockapi.io/bookCommentApi
import React, {useEffect, useState} from 'react';
import AddApiComment from './AddApiComment';
import DeleteAndEdit from './DeleteAndEdit';

const CommentApi = () => {
    const [bookCommentApi, setUsers] = useState([]);
    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = async () => {
        await fetch('https://63f431f8fe3b595e2eeeddf3.mockapi.io/bookCommentApi')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
            console.log(err);
        });
    };
    
    const addComment = async (nameOfComment, bookComment) => {
        await fetch('https://63f431f8fe3b595e2eeeddf3.mockapi.io/bookCommentApi', { 
            method: 'POST',
            body: JSON.stringify({
                nameOfComment: nameOfComment,
                bookComment: bookComment
            }),
    
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })

        .then((res) => {
            if (res.status !== 201) {
                return;
            } else {
                return res.json();
            }
        })

        .then((data) => {
            setUsers((books) => [...bookCommentApi, data]);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const deleteButton = async (id) => {
        await fetch(`https://63f431f8fe3b595e2eeeddf3.mockapi.io/bookCommentApi/${id}`, {
            method: 'DELETE',
        }) .then((res) => {
            if(res.status !== 200) {
                return;
            } else {
                setUsers (
                    bookCommentApi.filter((user) => {
                        return user.id !== id;
                    })
                );
            }
        })

        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className='CommentApi'>
            <AddApiComment addComment={addComment} />

            <div>
                {bookCommentApi.map((commentapi) => (
                    <DeleteAndEdit
                        id={commentapi.id}
                        key={commentapi.id}
                        nameOfComment={commentapi.nameOfComment}
                        bookComment={commentapi.bookComment}
                        deleteButton={deleteButton}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommentApi;

