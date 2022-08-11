import styled from 'styled-components'

export const MainContainer = styled.main`
    padding: 2rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 34rem;

    border: 1px solid red;
`;

export const SectionContent = styled.section`
    h1 {
        font-family: 'Baloo 2', cursive;
        line-height: 130%;
        font-size: 3rem;
    }

    span {
        font-size: 1.25rem;
    }
`;

export const IconWithInfo = styled.div`
    padding-top: 2rem;
    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 1.25rem;
        margin-top: 4.125rem;
    }
`;