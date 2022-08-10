import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
    }

    body {
        background: ${(props) => props.theme['brown-100']};
        color: ${(props) => props.theme['brown-700']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }


`;
/*
font-family: 'Baloo 2', cursive;
font-family: 'Roboto', sans-serif; 
*/