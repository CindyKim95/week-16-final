// Nonfiction page will display books and use the CommentApi component
import React from "react";
import CommentApi from "./comment-api";

export default function NonFiction() {
    return (
        <div>
            <div>
                <h2 id='nonfiction-page-h2'>Welcome to the Non-Fiction Page</h2>
                <hr className='hr-style' />
            </div>

            <div id='card-test-book'>
                <div className='woman-window-book'>
                    <img src="https://cdn.shopify.com/s/files/1/0506/8970/4134/products/9780593492307_360x.jpg?v=1676441060" id='book-test' />
                    <p className='book-description'>This book is about our inability to stop the climate and ecological crisis is as a result of an ongoing failure by the media regarding global warming and drastic lifestyle changes necessary to avert disaster.</p>
                    <CommentApi />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/512k-8w2UdL.jpg" id='book-test' />
                    <p className='book-description'>This book is considered the book that started the global grassroots environmental movement that focuses on the negative effects of chemical pesticides that were, at the time, a large part of US agriculture.</p>
                    <CommentApi />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://m.media-amazon.com/images/I/51NVRXSH9fL.jpg" id='book-test' />
                    <p className='book-description'>This book applies rational economic analysis to everyday situations, from online dating to buy a house.</p>
                    <CommentApi />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630683326i/10534.jpg" id='book-test' />
                    <p className='book-description'>This book is about how to pick the right time and place for your conflict to occur, if necessary. Sun Tzu's teachings can be applied to one's personal battles by helping us appreciate that self-improvement isn't just a matter of sheer willpower.</p>
                    <CommentApi />
                </div>
            </div>
        </div>
    )
}