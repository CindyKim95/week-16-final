// Romantic page will display books and use CommentApi component
import React from "react";
import CommentApi from "./comment-api";

export default function Romantic() {
    return (
        <div>
            <div>
                <h2 id='romantic-page-h2'>Welcome to the Romantic Page</h2>
                <hr className='hr-style' />
            </div>

            <div className="testThis" id='card-test-book'>
                <div className='woman-window-book'>
                    <img src="https://m.media-amazon.com/images/I/71ODaT072wL.jpg" id='book-test' />
                    <p className='book-description'>Noami is a runaway bride who finds herself in a small unfamiliar town while her life falls apart.</p>
                    <CommentApi />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://m.media-amazon.com/images/I/51TziXvwncL.jpg" id='book-test' />
                    <p className='book-description'>This story centers on a relationship spanning over five decades, their love endures an uncertain beginning.</p>
                    <CommentApi />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://m.media-amazon.com/images/I/51Bq8crzo+L.jpg" id='book-test' />
                    <p className='book-description'>A love story between an ice skater who in the beginning could not stand a certain hockey player. After a while, maybe she will give him a chance.</p>
                    <CommentApi />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1358259032i/11505797.jpg" id='book-test' />
                    <p className='book-description'>Two people who didn't plan to fall in love. One person doesn't believe in relationships and the other just wants to escape her past.</p>
                    <CommentApi />
                </div>
            </div>
        </div>
    )
}