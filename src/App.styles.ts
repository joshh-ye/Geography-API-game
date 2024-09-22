import styled, { createGlobalStyle } from 'styled-components';
import NewBGImage from './pexels-pixabay-37403.jpg'; // Change to your new image path

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-image: url(${NewBGImage});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  > p {
    color: #333;
    font-size: 1.2rem;
  }

  .score {
    color: #444;
    font-size: 2.5rem;
    margin: 10px 0;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 60px;
    font-weight: 700;
    color: #444;
    text-align: center;
    margin-bottom: 30px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #76c7c0, #4caf50);
    border: none;
    color: white;
    font-size: 1rem;
    padding: 10px 50px;
    margin: 20px 0;
    border-radius: 20px;
    transition: background 0.3s ease, transform 0.2s ease;
    
    &:hover {
      background: linear-gradient(180deg, #4caf50, #76c7c0);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(2px);
    }
  }

  .start {
    max-width: 220px;
  }
`;

export const StyledButton = styled.button`
  background: linear-gradient(180deg, #76c7c0, #4caf50);
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(180deg, #4caf50, #76c7c0);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;
