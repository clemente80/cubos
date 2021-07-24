import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    margin: 0 auto;
    padding: 50px 0;
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
        height: 508px;
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
    flex: .65;
    padding: 30px;
    heigth: fit-content;
    display: flex;
    flex-direction: column;

    .subTitle {
        font-size: 22px;
        border-bottom: 2px solid #00e8e4;
        font-family: 'Abel', sans-serif;
        color: #116193;
        padding-bottom: 5px;
        margin-bottom: 10px;
    }

    span:nth-child(2) {
        margin-bottom: 30px;
    }

    .genrePercentage {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`

export var Infos = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    section {
        display: flex;
        flex-direction: column;
        // width: 33.33%;
        // font-size: 7px;

        span:first-child {
            font-family: 'Abel', sans-serif;
            color: #116193;
        }

        span: last-child {
            // font-size: 11px;
        }
    }
`

export const Genres = styled.div`
    display: flex;
    flex-direction: row;

    li {
        list-style: none;
        border: 2px solid rgba(17, 97, 147, .5);
        border-radius: 20px;
        background: rgba(255, 255, 255, .6);
        color: #116193;
        padding: 4px 8px;
        margin-right: 6px;
        font-size: 14px;
        font-family: 'Abel', sans-serif;
    }
`

export const Percentage = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    background: #116193;
    color: #00e8e4;
    border-radius: 50%;
    text-align: center;
    font-size: 28px;

    :after {
        content: '';
        position: absolute;
        width: 80%;
        height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 5px solid #00e8e4;
        border-radius: 50%;
    }

    span {
        position: relative;
        top: 30%;
        transform: translateY(-30%);
    }
`

export const PosterMovie = styled.section`
    flex: .35;
    background-size: contain;
    background-repeat: no-repeat;
`

export const ReactPlayer = styled.div`
    height: 500px;
    background: #000;
    margin-top: 50px;
`

export const LoadingComponent = styled.div`
    background: orange;
`