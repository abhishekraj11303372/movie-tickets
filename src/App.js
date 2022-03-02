import React from 'react';
import { BrowserRouter,Routes, Route, Link, useParams} from "react-router-dom";
import Home from './components/Home';
import Admin from './components/Admin';
import Movies from './components/Movies';
import Categories from './components/Categories';

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
              <Link to="/by-category">Categories</Link>
              </li>
              <li className="list-group-item">
              <Link to="/admin">Movie Catalog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-md-10">
          <Routes>  
          <Route path="/" element={<Home />} ></Route>
            <Route path="/movies" element={<><Movies /></>} ></Route>
            <Route path="/movies/:id" element={<><Movie /></>} ></Route>
            <Route exact path="/by-category/*" element={<CategoryPage />} >
              <Route path="action" element={<p>Action page</p>}/>
              <Route path="comedy" element={<p>Comedy Page</p>}/>
              <Route path="drama" element={<p>Drama page</p>}/>
            </Route>
            <Route exact path="/by-category/drama" element={<Categories title={`Drama`}/>} />
            <Route exact path="/by-category/comedy" element={ <Categories title={`Comedy`}/>}  />
            <Route exact path="/by-category/action" element={<Categories title={`Action`}/>} />
            {/* <Route exact path="/by-category/drama" render={(props) => <Categories {...props} title={`Drama`}/>}  element={<Categories />}></Route>
            <Route path="/by-category/comedy" render={(props) => <Categories {...props} title={`Comedy`}/>} element={<><Categories /></>} ></Route>
            <Route path="/by-category/action" render={(props) => <Categories {...props} title={`Action`}/>} element={<><Categories /></>} ></Route> */}
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

function CategoryPage() {

  return (
    <div>
      <h2>Categories</h2>
      
      <ul>
        <li><Link to="action">Action</Link></li>
        <li><Link to="comedy">Comedy</Link></li>
        <li><Link to="drama">Drama</Link></li>
        {/* <Outlet/> */}
        
      </ul>
    </div>
  ) 
}

// function MovieCategorised() {
  
//   return <h2>Category: {this.props.title}</h2>  
// }