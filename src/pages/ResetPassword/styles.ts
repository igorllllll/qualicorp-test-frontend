import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackground from '../../assets/background-sign-in.jpg';


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 700px;
`;



const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    } to {
        opacity: 1;
        transform: translateX(0);
    }

`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 1s;

    form {
        margin: 80px 0;
        width: 340px;

        h1 {
            margin-bottom: 24px;
            margin-left: 15%;
        }

        a {
            color: #000;
            display: block;
            margin-top: 24px;
            margin-left: 25%;
            text-decoration: none;
            transition: color 0.2s;

            &:hover{
                color: ${shade(0.2, '#595b5e')};
            }
        }
    }

    > a {
            color: #B96800;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            display: flex;
            align-items: center;

            svg{
               margin-right: 16px;
            }

            &:hover{
                color: ${shade(0.2, '#B96800')};
            }
    }
`;



export const Background = styled.div`
    flex: 1;
    background: url(${signInBackground}) no-repeat center;
    background-size: cover;
`;
