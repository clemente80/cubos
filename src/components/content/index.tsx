import React from 'react'
import poser1 from './../../assets/cartaz01.png'
import poser2 from './../../assets/cartaz02.png'
import poser3 from './../../assets/cartaz03.png'
import {
        ContentSearch,
        InputSearch,
        CardSearched,
        DescriptionCard,
        PoserCard,
        TitleCard,
        SynopsisCard
} from './styles'

const Content: React.FC = () => {  

    return(
        <ContentSearch>
            <InputSearch placeholder='Busque um filme por nome, ano ou gênero...' />
            <CardSearched>
                <PoserCard style={{backgroundImage: `url(${poser1})`}}/>
                <DescriptionCard>
                    <TitleCard><span>Thor: Ragnarok</span><span>75%</span></TitleCard>
                    <SynopsisCard>
                        <div className='dateRelease'>25/10/2017</div>
                        <div className='synopsisMovie'>
                        Thor está aprisionado do outro lado do universo, sem seu martelo, e se vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a destruição de seu lar e o fim da civilização asgardiana que está nas mãos de uma nova e poderosa ameaça, a terrível Hela. Mas primeiro ele precisa sobreviver a uma batalha de gladiadores que coloca contra seu ex-aliado vingador, o Incrível Hulk.
                        </div>
                        <div className='categoriesMovie'>
                            <li>Ação</li>
                            <li>Aventura</li>
                            <li>Fantasia</li>
                        </div>
                    </SynopsisCard>
                </DescriptionCard>
            </CardSearched>
            <CardSearched>
                <PoserCard style={{backgroundImage: `url(${poser2})`}}/>
                <DescriptionCard>
                    <TitleCard><span>Mulher-Maravilha</span><span>73%</span></TitleCard>
                    <SynopsisCard>
                        <div className='dateRelease'>30/05/2017</div>
                        <div className='synopsisMovie'>
                        Treinada desde cedo para ser uma guerreira imbatível, Diana Prince (Gal Gadot) nunca saiu da paradisíaca ilha em que é reconhecida como Princesa das Amazonas. Quando o piloto Steve Trevor (Chris Pine) se acidenta e cai numa praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa de que pode parar o conflito. Lutando para acabar com todas as lutas, Diana percebe o alcance de seus poderes e sua verdadeira missão na Terra.
                        </div>
                        <div className='categoriesMovie'>
                            <li>Ação</li>
                            <li>Aventura</li>
                            <li>Fantasia</li>
                        </div>
                    </SynopsisCard>
                </DescriptionCard>
            </CardSearched>
            <CardSearched>
                <PoserCard style={{backgroundImage: `url(${poser3})`}}/>
                <DescriptionCard>
                    <TitleCard><span>Os Vingadores: The Avengers</span><span>77%</span></TitleCard>
                    <SynopsisCard>
                        <div className='dateRelease'>25/10/2012</div>
                        <div className='synopsisMovie'>
                        Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.
                        </div>
                        <div className='categoriesMovie'>
                            <li>Ficção Científica</li>
                            <li>Aventura</li>
                            <li>Fantasia</li>
                        </div>
                    </SynopsisCard>
                </DescriptionCard>
            </CardSearched>
        </ContentSearch>
    )
}

export default Content;