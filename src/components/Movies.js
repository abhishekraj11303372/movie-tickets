import React, {Component} from 'react'
import { Link, useParams } from 'react-router-dom';

export default class Movies extends Component {

    state = {movies: [] };

    componentDidMount() {
        this.setState({
            movies: [
                {id: 1, title: "Dunes 2021", runtime: 142},
                {id: 2, title: "Witcher 2021", runtime: 192},
                {id: 3, title: "John Wick", runtime: 178},
            ]
        })
    }

  render() {
    return (
        <>
            <h2>Choose a Movie</h2>
            <div>
                <ul>
                    {this.state.movies.map( (m) => (
                        <li key={m.id} >
                            <Link to={`/movies/${m.id}`}> {m.title}</Link></li>
                    ))}
                </ul>
            </div>
        </>
      )
  }
}