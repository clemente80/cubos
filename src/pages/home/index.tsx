import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import {
        ContentSearch,
        InputSearch,
        CardSearched,
        DescriptionCard,
        PoserCard,
        TitleCard,
        SynopsisCard,
        Pagination
} from './styles'

// import { format } from 'date-fns';

// import { pagination } from './../../components/footer/index'
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

    const [dataMovie, setDataMovie] = useState<IMovie[]>([]);
    const [numPag, setNumPag] = useState(Number);
    const [movieName, setMovieName] = useState(String);
    const history = useHistory();
    let $movieName = ''

    const handleOpenMovie = useCallback((id) => {
        history.push({
            pathname: `/filme/${id}`,
            state: id
        });
    }, [history])

    const handleSearch = (e:any) => {
        setMovieName(e.target.value);
        $movieName = e.target.value;

        const urlSrch = 'https://api.themoviedb.org/3/search/movie?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=pt-BR&query='+$movieName+'&page=1&include_adult=false';

        fetch(urlSrch)
        .then(resp => resp.json())
        .then(data1 => {

            setNumPag(data1.total_pages)
            
            // pagination(movieName, data1.total_pages)

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

    const handlePage = (pag:any) => {

        var pg = document.getElementsByClassName('btn'+pag);
        // var pagination = document.getElementById('Pagination');
        // var pgCurrent = pagination?.getElementsByClassName('active');
        // pgCurrent!.replace('active', '');
        pg[0].className = ' active';

        const url = 'https://api.themoviedb.org/3/search/movie?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=pt-BR&query='+movieName+'&page='+pag+'&include_adult=false';

            fetch(url)
            .then(res => res.json())
            .then(page => {
                console.log(page);
                console.log('Page '+pag+':', page, ' - do filme: ', );
            })

    }

    const numberPagination = (() => {
        
        const row = [];
        // const line:any;
        if(numPag >= 5) {
            for (var p = 1; p <= 3 ; p++) {
                row.push(<li className={'btn'+p} onClick={p => handlePage(p)}>{p}</li>);
            }
            // line.push(<li> prox </li><li className='btnLast' onClick={numPag => handlePage(numPag)}>{numPag}</li>);
            return row
        } else if(numPag !== 0) {
            for (var i=1; i <= 5; i++) {
                return row.push(<li className={'btn'+i} onClick={(i) => handlePage(i)}>{i}</li>)
            }
        } else {
            return row.push(<li>1</li>)
        }
    })

    return(
        <ContentSearch>
            <InputSearch placeholder='Busque um filme por nome, ano ou gênero...' onChange={handleSearch}/>
            {dataMovie.map((myMovie, key) => (
                <CardSearched key={key} theme={theme} onClick={() => handleOpenMovie(myMovie.id)}>
                    <PoserCard>
                        <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${myMovie.poster_path})`}}></div>
                    </PoserCard>
                    <DescriptionCard>
                        <TitleCard><span>{myMovie.title}</span><span>{Math.round(myMovie.vote_average/0.1)}%</span></TitleCard>
                        <SynopsisCard>
                            {/* <Moment format="DD/MM/YYYY">{myMovie.release_date}</Moment> */}
                            {/* <div className='dateRelease'>{format(new Date(myMovie.release_date), 'dd/MM/yyyy')}</div> */}
                            <div className='dateRelease'>{myMovie.release_date}</div>
                            <div className='synopsisMovie'>{myMovie.overview}
                            </div>
                            <div className='categoriesMovie'>
                                {myMovie.genre_ids.map((categ, key) => (
                                    <li key={key}>{searchGenres(categ)}</li>
                                ))}
                            </div>
                        </SynopsisCard>
                    </DescriptionCard>
                </CardSearched>
            ))}
            <Pagination>
                {numberPagination()}
            </Pagination>
        </ContentSearch>
    )
}

export default Content;