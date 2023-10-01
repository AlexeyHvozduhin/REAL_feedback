import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListPageBox = styled.div`
  position: relative;
  background-color: #161f27;
  /* min-height: 100vh; */
  min-height: 100%;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: linear-gradient(#3bdf8d, #ffa600);
    border-radius: 50%;
    transform: translate(-250px, -120px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  }
  &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: linear-gradient(#9763db, #3494e2);
    border-radius: 50%;
    transform: translate(250px, -800px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  }

  ._film_list_box {
    position: relative;
    min-width: 350px;
    min-width: 400px;
    max-width: 600px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    z-index: 10;
    padding: 20px;
    backdrop-filter: blur(25px);
  }
`;

export const TitleElement = styled.h3`
  color: white;
  margin-bottom: 26px;
`;

export const ListHomePage = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ListHomePageElement = styled.li`
  position: relative;
  display: flex;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;

  &:hover {
    background-color: white;
    box-shadow: -15px 30px 50px rgba(0, 0, 0, 0.5);
    transform: scale(1.05) translateX(30px) translateY(-15px);
    z-index: 15;
  }

  & img {
    position: relative;
    border-radius: 10px;
    min-width: 100px;
    overflow: hidden;
    margin-right: 10px;
    object-fit: cover;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
  }

  & div h4 {
    line-height: 1.2em;
    font-weight: 600;
    transition: 0.5s;
  }

  & div p {
    font-size: 0.75em;
    transition: 0.5s;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover div h4,
  &:hover div p {
    color: #333;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #001689;
  text-decoration: auto;

  &:focus,
  &:hover {
    color: orange;
    padding-left: 5px;
  }
`;
