import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import {
        ContentSearch,
        InputSearch,
        CardSearched,
        DescriptionCard,
        PoserCard,
        TitleCard,
        SynopsisCard
} from './styles'
// import Moment from 'react-moment'

interface IMovie {
    id: number,
    genre_ids: [],
    poster_path: string,
    title: string,
    overview: string,
    release_date: number,
    vote_average: number
}

const Content: React.FC = () => {

    const [dataMovie, setDataMovie] = useState<IMovie[]>([])
    // const [numToGenre, setNumToGenre] = useState();
    const history = useHistory()

    const HandleOpenMovie = useCallback((id) => {
        history.push({
            pathname: `/filme/${id}`,
            state: id
        });
    }, [history])

    const HandleSearch = (e:any) => {
        var movieName = e.target.value

        const urlSrch = 'https://api.themoviedb.org/3/search/movie?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=pt-BR&query='+movieName+'&page=1&include_adult=false';

        fetch(urlSrch)
        .then(resp => resp.json())
        .then(data1 => {
            if (data1.results !== undefined) {
                setDataMovie(data1.results)
            }
        })
        .catch(err => console.error(err))
    };

    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_watch_monetization_types=flatrate'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDataMovie(data.results)
        })
        .catch(err => console.error(err))
    }, []);

    const theme = {
        fg: "palevioletred",
        bg: "white"
    };

    function searchGenres(num:any) {
        let genre;

        if(num === 12) genre='Aventura'
        if(num === 14) genre='Fantasia'
        if(num === 16) genre='Animação'
        if(num === 18) genre='Drama'
        if(num === 27) genre='Terror'
        if(num === 28) genre='Ação'
        if(num === 35) genre='Comédia'
        if(num === 36) genre='História'
        if(num === 37) genre='Faroeste'
        if(num === 53) genre='Thriller'
        if(num === 80) genre='Crime'
        if(num === 99) genre='Documentário'
        if(num === 878) genre='Ficção Científica'
        if(num === 9648) genre='Mistério'
        if(num === 10402) genre='Música'
        if(num === 10749) genre='Romance'
        if(num === 10751) genre='Família'
        if(num === 10752) genre='Guerra'

        return genre
    }

    return(
        <ContentSearch>
            <InputSearch placeholder='Busque um filme por nome, ano ou gênero...' onChange={HandleSearch}/>
            {dataMovie.map((myMovie, key) => (
                <CardSearched key={key} theme={theme} onClick={() => HandleOpenMovie(myMovie.id)}>
                    <PoserCard>
                        <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${myMovie.poster_path})`}}></div>
                    </PoserCard>
                    <DescriptionCard>
                        <TitleCard><span>{myMovie.title}</span><span>{Math.round(myMovie.vote_average/0.1)}%</span></TitleCard>
                        <SynopsisCard>
                            {/* <Moment>{myMovie.release_date}</Moment> */}
                            <div className='dateRelease'>{myMovie.release_date}</div>
                            <div className='synopsisMovie'>{myMovie.overview}
                            </div>
                            <div className='categoriesMovie'>
                                {myMovie.genre_ids.map((categ, key) => (
                                    // <li key={key}>{() => getCategories(categ)}</li>
                                    <li key={key}>{searchGenres(categ)}</li>
                                    // <li key={key}>{categ}</li>
                                ))}
                            </div>
                        </SynopsisCard>
                    </DescriptionCard>
                </CardSearched>
            ))}
        </ContentSearch>
    )
}

export default Content;