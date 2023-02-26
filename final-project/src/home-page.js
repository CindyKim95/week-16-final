// Home page houses cards with links within the cards
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <div>
                <h2 id='thriller-page-h2'>Welcome to the Home Page</h2>
                <hr className='hr-style' />
            </div>
            <div id='entire-card-decks'>
                <div className='row' id='top-row'>
                    <div className='col'>
                        <div className="card">
                            <div className="card-body text-center">
                            <Link to='/'>Home</Link>
                            <p className="card-text">Our Home page displays links to navigate through different genres of books that people are currently reading, buying or selling. Enjoy!</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <div className="card-body text-center">
                            <Link to='non-fiction'>Non-Fiction</Link>
                            <p className="card-text">Come see what people are reading and what they're saying in our Non-Fiction page.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <div className="card-body text-center">
                            <Link to='thriller'>Thriller</Link>
                            <p className="card-text">Want to catch some adrenaline from reading? Check out our Thriller page to see what is currently being read!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row' id='bottom-row'>
                    <div className='col' id='romantic-card'>
                        <div className="card">
                            <div className="card-body text-center justify-content-center">
                            <Link to='romantic'>Romantic</Link>
                            <p className="card-text">Who doesn't love a good love story? Let's see what people are reading these days.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src='http://www.clker.com/cliparts/e/c/1/1/119542307725783745open_book_john_olsen_01.svg.hi.png' id='home-book-image'></img>
                <img src='https://media.istockphoto.com/id/530986279/vector/stack-of-five-books.jpg?s=612x612&w=0&k=20&c=G1uSrBE8LPA9nes0tuF6GJb5fftgvCg3jgrv3pFll-k=' id='home-book-image2'></img>
            </div>
        </div>
    )
}
