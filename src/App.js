import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter,Routes, Route, Link} from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <div className="row">
        <h1 className="mt-3">
          Book Movie Tickets
        </h1>
        <hr className="mb-3"></hr>
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <ul className="list-group">
              <li className="list-group-item">
              <Link to="/">Home</Link>
              </li>
              <li className="list-group-item">
              <Link to="/movies">Movies</Link>
              </li>
              <li className="list-group-item">
              <Link to="/admin">Movie Catalog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-md-10">
          <Routes>
          <Route path="/" element={<><Home /></>} ></Route>
            <Route path="/movies" element={<><Movies /></>} ></Route>
            <Route path="/admin" element={<><Admin /></>} ></Route>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

function Home () {
  return <h1>Home</h1>
}

function Movies () {
  return <h1>Movies</h1>
}

function Admin () {
  return <h1>Manage Catalogue</h1>
}