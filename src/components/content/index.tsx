import React, { useState,useEffect } from 'react'
// import poser1 from './../../assets/cartaz01.png'
// import poser2 from './../../assets/cartaz02.png'
// import poser3 from './../../assets/cartaz03.png'
import {
        ContentSearch,
        InputSearch,
        CardSearched,
        DescriptionCard,
        PoserCard,
        TitleCard,
        SynopsisCard
} from './styles'

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

    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_watch_monetization_types=flatrate'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDataMovie(data.results)
        })
        .catch(err => console.error(err))
    }, []);

    // function percentage(vote:any) {
    //     let x = Math.round((vote * 1)/10);     
    // }

    return(
        <ContentSearch>
            <InputSearch placeholder='Busque um filme por nome, ano ou gênero...' />
            {dataMovie.map(myMovie => (
                <CardSearched key={myMovie.id}>
                <PoserCard>
                    <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${myMovie.poster_path})`}}></div>
                </PoserCard>
                <DescriptionCard>
                    <TitleCard><span>{myMovie.title}</span><span>{Math.round(myMovie.vote_average/0.1)}%</span></TitleCard>
                    <SynopsisCard>
                        <div className='dateRelease'>{myMovie.release_date}</div>
                        <div className='synopsisMovie'>{myMovie.overview}
                        </div>
                        <div className='categoriesMovie'>
                            <li>Ação</li>
                            <li>Aventura</li>
                            <li>Fantasia</li>
                        </div>
                    </SynopsisCard>
                </DescriptionCard>
            </CardSearched>
            ))}            
        </ContentSearch>
    )
}

export default Content;