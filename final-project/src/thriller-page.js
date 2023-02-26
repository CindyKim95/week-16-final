// Thriller page will display books and use CommentApi component
import React from "react";
import CommentApi from "./comment-api";

export default function Thriller() {
    return (
        <div className='thriller-page-first-div'>
            <div>
                <h2 id='thriller-page-h2'>Welcome to the Thriller Page</h2>
                <hr className='hr-style' />
            </div>

            <div id='card-test-book'>
                <div className='woman-window-book'>
                    <img src="https://media1.popsugar-assets.com/files/thumbor/c7Tp8jd87AgDnh_fp72hhnLrOFc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/04/04/057/n/45930776/tmp_ziDb7A_2551fd50cd382ebb_woman_in_the_window.jpg" id='book-test' />
                    <p className='book-description'>This book is about a woman who works from home and has agoraphobia that keeps her from going outside. She then witnesses a murder in her neighbors home. How will she save her neighbor?</p>
                    <CommentApi />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://m.media-amazon.com/images/I/71g8IPfxrTL._AC_UF1000,1000_QL80_.jpg" id='book-test' />
                    <p className='book-description'>A woman detective trying to solve a case as she ends up connecting well with a suspect. Who will she believe?</p>
                    <CommentApi />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1458854462i/29437949.jpg" id='book-test' />
                    <p className='book-description'>Marriage couple looks perfect on the outside, but truthfully, a woman is held prisoner by her so called amazing husband.</p>
                    <CommentApi />
                </div>

                <div className='woman-window-book2'>
                    <img src="https://www.pluggedin.com/wp-content/uploads/2020/01/gone-girl-cover.jpg" id='book-test' />
                    <p className='book-description'>Husband is being held responsible for the disappearance of his wife Amy.</p>
                    <CommentApi />
                </div>
            </div>
        </div>
    )
}