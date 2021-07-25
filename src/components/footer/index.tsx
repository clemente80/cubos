import React from 'react'
import {FooterPages} from './styles'

export const pagination = (name:any) => {
    console.log(name);
}

const Footer:React.FC = () => {
    var nameMovie = pagination((e:any) => e)

    const handlePage = (pag:any) => {

        const url = 'https://api.themoviedb.org/3/search/movie?api_key=6d27b243520c3d8bd2325f2289b0cf7d&language=pt-BR&query='+nameMovie+'&page='+pag+'&include_adult=false';

            fetch(url)
            .then(res => res.json())
            .then(page => {
                console.log('Page '+pag+':', page, ' - do filme: ', nameMovie);
            })

    }

    
    return(
        <FooterPages>
            <li className='active' onClick={() => handlePage(1)}>1</li>
            <li onClick={() => handlePage(2)}>2</li>
            <li onClick={() => handlePage(3)}>3</li>
            <li onClick={() => handlePage(4)}>4</li>
            <li onClick={() => handlePage(5)}>5</li>
        </FooterPages>
    )
}

export default Footer;