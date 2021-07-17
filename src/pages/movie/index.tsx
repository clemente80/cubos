import React from 'react'
import { useState, useEffect } from 'react'
import {MovieId, LoadingComponent} from './styles'
// import LoadingComponent from './.../../../../components/loading'
// import useToast

const Movie: React.FC = () => {

    interface IMovie {
        backdrop_path: string,
        budget: number,
        genres: [],
        homepage: string,
        id: number,
        imdb_id: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        release_date: number,
        revenue: number,
        runtime: number,
        spoken_languages: [],
        status: string,
        tagline: string,
        title: string,
        video: false,
        videos: [],
        vote_average: number,
        vote_count: number
    }

    const [movieDetail, setMovieDetail] = useState<IMovie>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        let id = document.URL.substring(document.URL.lastIndexOf('/') + 1)
        let url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=pt-BR'
        
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setMovieDetail(data)
            setLoading(false)
        })

    }, [])

    return (
        <MovieId>
            {!loading?
                <>
                <span>{movieDetail?.id}</span>
                <span>{movieDetail?.title}</span>
                </>
                :
                <LoadingComponent/>
            }
        </MovieId>
    )
}

export default Movie