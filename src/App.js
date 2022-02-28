import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter,Routes, Route, Link, useParams} from "react-router-dom";
import Home from './components/Home';
import Admin from './components/Admin';
import Movies from './components/Movies';

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
            <Route path="/movies/:id" element={<><Movie /></>} ></Route>
            <Route path="/admin" element={<><Admin /></>} ></Route>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

function Movie() {
  let { id } = useParams();
  return <h2>Movie id {id}</h2> 
}
