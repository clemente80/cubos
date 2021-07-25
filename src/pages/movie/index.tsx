import React, { useState, useEffect } from 'react'
// import { useCallback } from 'react';
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
    LoadingComponent
} from './styles'
import ReactPlayer from 'react-player'

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
        videos: {results: [{
            key: string
        }]},
        vote_average: number,
        vote_count: number
    }

    const [movieDetail, setMovieDetail] = useState<IMovie>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let id = document.URL.substring(document.URL.lastIndexOf('/') + 1);
        let url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=pt-BR&append_to_response=videos'
        
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setMovieDetail(data)
            setLoading(false)
        })

    }, [])

    function swapStatus(getStatus:any) {
        let newStatus;

        if(getStatus === 'Released') newStatus ='Lançado'

        return newStatus
    }

    function swapLang(idiom:any) {
        let xch;

        if(idiom === 'en') xch ='Inglês'
        if(idiom === 'pt') xch ='Português'
        if(idiom === 'es') xch ='Espanhol'
        if(idiom === 'fr') xch ='Francês'
        if(idiom === 'de') xch ='Alemão'
        if(idiom === 'es') xch ='Espanhol'

        return xch
    }

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
                                    <span>{swapStatus(movieDetail?.status)}</span>
                                </section>
                                <section>
                                    <span>Idioma</span>
                                    <span>{swapLang(movieDetail?.original_language)}</span>
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
                    <ReactPlayer
                        className='player'
                        url= {'https://www.youtube.com/watch?v='+ movieDetail!.videos.results[0].key}
                        width= '100%'
                        height= '600px'
                        playing= {true}
                        loop= {true}
                        style={{marginTop:'50px'}}
                    />
                </>
                :
                <LoadingComponent/>
            }
        </Container>
    )
}

export default Movie