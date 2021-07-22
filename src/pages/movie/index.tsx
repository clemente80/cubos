import React, { useState, useEffect } from 'react'
import { toFixedReplaces } from '../../utils/numberFormat';
import {
    Container,
    MovieId,
    TitleMov,
    ReleaseDate,
    DescrMovie,
    Infos,
    Genres,
    Percentage,
    PosterMovie,
    Trailer,
    LoadingComponent
} from './styles'
// import LoadingComponent from './.../../../../components/loading'

const Movie: React.FC = () => {

    interface IMovie {
        backdrop_path: string,
        budget: number,
        genres: [{
            name: string
        }],
        homepage: string,
        id: number,
        imdb_id: string,
        original_title: string,
        overview: string,
        original_language: string,
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

    const [movieDetail, setMovieDetail] = useState<IMovie>();
    const [loading, setLoading] = useState(true);
    // const [value, setValue] = useState(Number);

    useEffect(() => {
        let id = document.URL.substring(document.URL.lastIndexOf('/') + 1);
        let url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=pt-BR'
        
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setMovieDetail(data)
            setLoading(false)
        })

    }, [])

    return (
        <Container>
            {!loading?
                <>
                <MovieId>
                    <div className='movieTitle'>
                        <TitleMov>{movieDetail?.title}</TitleMov>
                        <ReleaseDate>{movieDetail?.release_date}</ReleaseDate>
                    </div>
                    <div className='contentMovie'>
                        <DescrMovie>
                            <span className='subTitle'>Sinopse</span>
                            <span>{movieDetail?.overview}</span>
                            <span className='subTitle'>Informações</span>
                            <Infos>
                                <section>
                                    <span>Situação</span>
                                    <span>{movieDetail?.status}</span>
                                </section>
                                <section>
                                    <span>Idioma</span>
                                    <span>{movieDetail?.original_language}</span>
                                </section>
                                <section>
                                    <span>Duração</span>
                                    <span>{movieDetail?.runtime}</span>
                                </section>
                                <section>
                                    <span>Orçamento</span>
                                    <span>{toFixedReplaces(movieDetail?.budget)}</span>
                                </section>
                                <section>
                                    <span>Receita</span>
                                    <span>{toFixedReplaces(movieDetail?.revenue)}</span>
                                </section>
                                <section>
                                    <span>Lucro</span>
                                    <span>{toFixedReplaces(movieDetail!.budget - movieDetail!.revenue)}</span>
                                </section>
                            </Infos>
                            <div className='genrePercentage'>
                                <Genres>
                                    {movieDetail?.genres.map((categ, key) => (
                                        <li key={key}>{categ.name}</li>
                                    ))}
                                </Genres>
                                <Percentage><span>{Math.round(movieDetail!.vote_average/0.1)}%</span></Percentage>
                            </div>
                        </DescrMovie>
                        <PosterMovie style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}')`}}></PosterMovie>
                    </div>
                </MovieId>
                <Trailer />
                </>
                :
                <LoadingComponent/>
            }
        </Container>
    )
}

export default Movie