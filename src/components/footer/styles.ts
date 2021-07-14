import styled from "styled-components";

export const FooterPages = styled.div`
    background: #fff;
    width: 1024px;
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
        margin-right: 20px;
        font-size: 22px;

        :last-child {
            margin-right: 0;
        }
    }

    .active {
        position: relative;
        background: #116193;
        width: 55px;
        height: 55px;
        font-size: 26px;
        color: #00e8e4;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

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
    }
`