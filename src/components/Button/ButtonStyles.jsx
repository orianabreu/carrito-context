import styled, { css } from "styled-components";

export const buttonTypes = {
    callToAction: css`
        background-color: ${({theme}) => theme.palette.callToAction};
        color: white;
    `,
    standar: css`
        background-color: ${({theme}) => theme.palette.standar};
        color: ${({theme}) => theme.palette.primary};
    `,
    login: css`
        background-color: ${({theme}) => theme.palette.login};;
        color: white;
    `,
}

export const MyButton = styled.button`
    border-radius: 15px;
    padding: 8px;
    font-size: ${({theme}) => theme.sizes.paragraph};

    ${({styleType}) => styleType && buttonTypes[styleType]}
`;