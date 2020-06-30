import styled from 'styled-components';

export const MenuStyle = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    margin: 20px;
  }
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    
  }
  .icons { 
      width: 90px;
      height: 90px;
  }

  @media(min-width: 768px) {
    flex-direction: row;
    li {
      margin: 0 70px;
    }
  }

`