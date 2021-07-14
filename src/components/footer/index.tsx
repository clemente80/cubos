import React from 'react'
import {FooterPages} from './styles'

const Footer:React.FC = () => {
    return(
        <FooterPages>
            <li>1</li>
            <li>2</li>
            <li className='active'>3</li>
            <li>4</li>
            <li>5</li>
        </FooterPages>
    )
}

export default Footer;