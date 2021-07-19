import styled from 'styled-components'

export const ContentSearch = styled.div`
  flex: 1;
  position: relative;
  background: #fff;
  color: #000;
  max-width: 1024px;
  width: 100%;
  margin: 0px auto;
  padding: 50px;
  height: 100%;
  box-sizing: border-box;
`

export const InputSearch = styled.input`
  background: #ebebeb;
  position: relative;
  width: 100%;
  border: 0;
  border-radius: 20px;
  color: #116193;
  padding: 10px 20px;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  font-size: 18px;
  outline: none;

  ::placeholder {
    color: #91b2c7;
  }
`

export const CardSearched = styled.section`
  width: 100%;
  height: 308px;
  background: ${props => props.theme.fg};
  margin-top: 50px;
  display: flex;
  cursor: pointer;
  transition: .4s ease-in-out;
  animation: animeCard .24s;


  :hover {
    box-shadow: 0 5px 15px rgba(17, 97, 147, .35);
  }

  @keyframes animeCard {
    from {
      transform: scale(.95);
      opacity: .5;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`

export const PoserCard = styled.div`
  width: 205px;
  height: 308px;
  overflow: hidden;

  div {
    background: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 100%;
    transition: .4s ease-in-out;
    cursor: pointer;

    ${CardSearched}:hover & {
      transform: scale(1.05);
    }
  }
`

export const DescriptionCard = styled.div`
  background: #ebebeb;
  width: 78%;
  heigth: 100%;
  overflow: hidden;
`

export const TitleCard = styled.div`
  position: relative;
  height: 20%;
  background: #116193;
  color: #00e8e4;
  font-family: 'Abel', sans-serif;
  line-height: 50px;

  span {
    position: absolute;
    bottom: 5px;
    left: 100px;
    width: fit-content:
    height: fit-content;
    font-size: 35px;
  }

  span:last-child{
    position: absolute;
    width: 75px;
    height: 75px;
    bottom: -38px;;
    left: 2.5%;
    transform: translateX(-4%);
    background: #116193;
    border-radius: 50%;
    color: #00e8e4;
    text-align: center;
    line-height: 75px;
    font-size: 24px;

    :after {
      content: '';
      position: absolute;
      width: 82.5%;
      height: 82.5%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: transparent;
      border: 4px solid #00e8e4;
      border-radius: 50%;
    }
  }
`

export const SynopsisCard = styled.div`
  position: relative;
  height: 80%;
  background: transparent;

  .dateRelease {
    position: absolute;
    left: 100px;
    font-size: 19px;
    color: #999;
  }

  .synopsisMovie {
    position: relative;
    padding: 50px 30px 15px 30px;
    margin-bottom: 10px;
    height: 130px;
    font-family: 'Lato';
    font-size: 17px;
    // background: rgb(17,97,147);
    overflow: hidden;

    :after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50px;
      background: linear-gradient(transparent, #ebebeb);
    }
  }

  .categoriesMovie {
    display: flex;
    padding-left: 30px;
    
    li {
      list-style: none;
      background: red;
      padding: 3px 6px;
      margin-right: 10px;
      border: 1px solid #116193;
      border-radius: 25px;
      background: #fff;
      font-size: 14px;
      color: #116193;
    }
  }
`