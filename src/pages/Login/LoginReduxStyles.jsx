import styled from "styled-components";
import { MyButton } from "../../components/Button/ButtonStyles";

export const InputForm = styled.input`
    border: 1px solid ${({theme}) => theme.palette.primary};
    border-radius: 20px;
    padding: 15px;
    width: 40%;
    font-size: 1rem;
    color: ${({theme}) => theme.palette.primary};
    margin-bottom: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    min-height: 100vh;
`;

export const LoginBtn = styled(MyButton)`
    width: 20%;
    margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
    font-size: ${({theme}) => theme.sizes.subtitle};
    color: ${({theme}) => theme.palette.red};;
`;

