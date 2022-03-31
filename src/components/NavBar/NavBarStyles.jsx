import styled from "styled-components";

export const Nav = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    background-color: ${({darkTheme, theme}) => darkTheme ? "#4a4e69" : theme.palette.standar};
`;