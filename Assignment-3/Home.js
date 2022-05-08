
import React, { Component } from 'react'
import axios from 'axios';

class Home1 extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716')
            .then((res) => {
                this.setState({
                    movies: [...res.data.results]
                })
            })


    }

    render() {

        return (
            <>
                <h1> popular movies </h1>
                <div id='movieWrapper'>
                    {this.state.movies.map((movie, i) => {
                        return (
                            <div key={i} className='movieData'>
                                <img className='moviePic' src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt="" />
                                <h2 className='movieTitle'>{movie.title}</h2>
                            </div>
                        )
                    })
                    }
                </div>
            </>
        )
    }
}

export default Home1