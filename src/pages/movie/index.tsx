import React from 'react'
import { useState, useEffect } from 'react'
import {
    Container,
    MovieId,
    TitleMov,
    ReleaseDate,
    DescrMovie,
    Infos,
    PosterMovie,
    Trailer,
    LoadingComponent
} from './styles'
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
                                    <span>Lançado</span>
                                </section>
                                <section>
                                    <span>Idionma</span>
                                    <span>Inglês</span>
                                </section>
                                <section>
                                    <span>Duração</span>
                                    <span>2h10min</span>
                                </section>
                            </Infos>
                            <Infos>
                                <section>
                                    <span>Orçamento</span>
                                    <span>$ 180.000.000,00</span>
                                </section>
                                <section>
                                    <span>Receita</span>
                                    <span>$ 853.977.000,00</span>
                                </section>
                                <section>
                                    <span>Lucro</span>
                                    <span>$ 673.977.000,00</span>
                                </section>
                            </Infos>
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