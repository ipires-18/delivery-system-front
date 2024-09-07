import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    justify-content: center;
    gap: 32px;
    width: 100%;
    max-width: 1216px;
    margin: 0 auto;
    padding: 16px;
    box-sizing: border-box;
    max-height: fit-content;

    @media (max-width: 768px) {
        main {
            flex-direction: column;
            gap: 16px;
        }
    }
`;
