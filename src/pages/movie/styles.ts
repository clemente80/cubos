import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    margin: 0 auto;
    padding: 50px;
    max-width: 1024px;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
`

export const MovieId = styled.div`
    background: #f2f2f2;
    width: 100%;
    height: fit-content;

    .movieTitle {
        display: flex;
        height: 60px;
        background: #e6e6e6;
        justify-content: space-between;
        align-items: center;
        font-family: 'Abel', sans-serif;
    }

    .contentMovie {
        display: flex;
        height: fit-content;
        justify-content: space-between;


    }
`
export const TitleMov = styled.div`
    font-size: 32px;
    padding: 8px 35px;
    font-weight: 500;
    color: #116193;
`

export const ReleaseDate = styled.div`
    width: fit-content;
    color: #999;
    padding: 0 35px 0 0;
    font-size: 20px;
`

export const DescrMovie = styled.section`
    flex: .6;
    padding: 30px;
    heigth: fit-content;
    display: flex;
    flex-direction: column;

    .subTitle {
        font-size: 22px;
        border-bottom: 2px solid cyan;
        font-family: 'Abel', sans-serif;
        color: #116193;
        padding-bottom: 5px;
        margin-bottom: 10px;
    }

    span:nth-child(2) {
        margin-bottom: 30px;
    }
`

export var Infos = styled.div`
    display: flex;
    
`

export const PosterMovie = styled.section`
    flex: .4;
    height: 508px;
    background-size: cover;
    backg
`

export const Trailer = styled.div`
    height: 500px;
    background: #000;
    margin-top: 50px;
`

export const LoadingComponent = styled.div`
    background: orange;
`