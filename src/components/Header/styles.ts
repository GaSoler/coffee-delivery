import styled from 'styled-components'

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 10rem;

    height: 6.5rem;

    nav {
        display: flex;
        gap: 0.5rem;
    }
`;

export const BaseButton = styled.button`
    padding: 0.5rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.375rem;
    border: 0;

    gap: 0.25rem;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
`;

export const GeoLocaleButton = styled(BaseButton)`
    background: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-700']};

    svg {
        color: ${(props) => props.theme['purple-500']};
    }
`;

export const CartButton = styled(BaseButton)`
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-700']};

    svg {
        color: ${(props) => props.theme['yellow-500']};
    }
`;