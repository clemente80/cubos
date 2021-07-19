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
    poster_path: string,
    title: string,
    overview: string,
    release_date: number,
    vote_average: number
}

const Content: React.FC = () => {

    const [dataMovie, setDataMovie] = useState<IMovie[]>([])
    const history = useHistory()

    const HandleOpenMovie = useCallback((id) => {
        history.push({
            pathname: `/filme/${id}`,
            state: id
        });
        console.log(id)
    }, [history])

    const HandleSearch = (e:any) => {
        var movieName = e.target.value

        const urlSrch = 'https://api.themoviedb.org/3/search/movie?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=pt-BR&query='+movieName+'&page=1&include_adult=false&year=2021';

        fetch(urlSrch)
        .then(resp => resp.json())
        .then(data1 => {
            if (data1.results !== undefined) {
                setDataMovie(data1.results)
            }
        })
    };

    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_watch_monetization_types=flatrate'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setDataMovie(data.results)

            // var objLength = Object.keys(data).length;

            // for(var i=0; objLength; i++) {
            //     const url2 = 'https://api.themoviedb.org/3/movie/'+data.results[i].id+'?api_key=6d27b243520c3d8bd2325f2289b0cf7d';
                
            //     fetch(url2)
            //     .then(resp => resp.json())
            //     .then(data1 => {
            //         setDataCateg(data1)
            //         // console.log(data1)
            //     })
            // }

        })
        .catch(err => console.error(err))
    }, []);

    // function percentage(vote:any) {
    //     let x = Math.round((vote * 1)/10);     
    // }

    const theme = {
        fg: "palevioletred",
        bg: "white"
    };

    return(
        <ContentSearch>
            <InputSearch placeholder='Busque um filme por nome, ano ou gênero...' onChange={HandleSearch}/>
            {dataMovie.map(myMovie => (
                <CardSearched key={myMovie.id} theme={theme} onClick={() => HandleOpenMovie(myMovie.id)}>
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
                                <li>Action</li>
                                <li>Fiction</li>
                                <li>Adventure</li>
                            </div>
                        </SynopsisCard>
                    </DescriptionCard>
                </CardSearched>
            ))}
        </ContentSearch>
    )
}

export default Content;