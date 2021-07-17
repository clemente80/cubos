import styled from "styled-components";

export const FooterPages = styled.div`
    background: #fff;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 50px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    

    li {
        list-style: none;
        font-family: 'Abel';
        color: #116193;
        margin-right: 5px;
        font-size: 22px;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border: 1px solid transparent;
        border-radius: 50%;
        transition: .2s ease-in-out;

        :hover {
            background: #ebebeb;
        }
    }

    .active {
        position: relative;
        width: 55px;
        height: 55px;
        font-size: 26px;
        background: #116193;
        color: #00e8e4;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: default;

        :after {
            content: '';
            position: absolute;
            width: 75%;
            height: 75%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            border: 4px solid #00e8e4;
            border-radius: 50%;
        }

        :hover {
            background: #116193;
        }
    }
`