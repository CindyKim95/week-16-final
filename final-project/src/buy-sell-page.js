// Buy/Sell page will display books that users are selling along with their name, email, and book description
import React from "react";
import CommentApi from "./comment-api";
import CommentSection from "./comment-section";

export default function BuySell() {
    return (
        <div>
            <div>
                <h2 id='romantic-page-h2'>Welcome to the Buy & Sell Page</h2>
                <hr className='hr-style' />
            </div>

            <div className="testThis" id='card-test-book'>
                <div className='woman-window-book'>
                    <img src="https://m.media-amazon.com/images/I/71ODaT072wL.jpg" id='book-test' />
                    <p>Seller: Lisa Sawyer</p>
                    <p>Contact: lisa.sawyer@hotmail.com</p>
                    <p className='book-description'>Hey everyone! This book is for sale $14.99.</p>
                    <CommentSection />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://cdn.shopify.com/s/files/1/0506/8970/4134/products/9780593492307_360x.jpg?v=1676441060" id='book-test' />
                    <p>Seller: Tom Anderson</p>
                    <p>Contact: andersontom@gmail.com</p>
                    <p className='book-description'>Could not put this book down. Worth every penny. Selling this at $20.00.</p>
                    <CommentSection />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://m.media-amazon.com/images/I/51Bq8crzo+L.jpg" id='book-test' />
                    <p>Seller: Melissa Lee</p>
                    <p>Contact: melissa.lee23@yahoo.com</p>
                    <p className='book-description'>I loved this book! I am wanting to sell it for $16.00.</p>
                    <CommentSection />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1458854462i/29437949.jpg" id='book-test' />
                    <p>Seller: Sally Smith</p>
                    <p>Contact: sallys234@outlook.com</p>
                    <p className='book-description'>Selling this for $12.99.</p>
                    <CommentSection />
                </div>
            </div>
        </div>
    )
}

