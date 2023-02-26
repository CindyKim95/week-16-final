// App.js is the main page that holds the BrowserRouter, Routes, Route and Link
// App.js also houses the navbar
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./home-page";
import NonFiction from "./non-fiction-page";
import Thriller from "./thriller-page";
import Romantic from "./romantic-page";

function App() {
  return (
    <BrowserRouter>
    {/* Div below holds header-list-routes */}
      <div>

        {/* Div below holds Title h2 and Nav List */}
        <div className='header'>
          <h2 className='book-club'>The Reading Nook</h2>

          <nav>
            <ul className='navbar-ul-list'>
              <li className="link-list">
                <Link to='/'>Home</Link>
              </li>

              <li className="link-list">
                <Link to='non-fiction'>Non-Fiction</Link>
              </li>

              <li className="link-list">
                <Link to='thriller'>Thriller</Link>
              </li>

              <li className="link-list">
                <Link to='romantic'>Romantic</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='non-fiction' element={<NonFiction />} />
          <Route path='thriller' element={<Thriller />} />
          <Route path='romantic' element={<Romantic />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
