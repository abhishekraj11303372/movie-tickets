import React, {Component} from 'react';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class OneMovie extends Component {

    state = { movie : {} };
    
    
    componentDidMount() {
        this.setState({movie: {
            id: this.props.match.params.id,
            title: "Some Movie",
            runtime: 150,
        }})
    }

  render() {
    return (
        <>
            <div>Movie: {this.state.movie.title} {this.state.movie.id}</div>
            <table className='table table-compact table-stripped'>
                <thead></thead>
                <tbody>
                <tr>
                    <td><strong>Title:</strong></td>
                    <td>{this.state.movie.title}</td>
                </tr>
                <tr>
                    <td><strong>Run Time:</strong></td>
                    <td>{this.state.movie.runtime} minutes</td>
                </tr>
                </tbody>
            </table>
        </>
      )
  }
}

export default withRouter(OneMovie);