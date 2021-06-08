import React, {FC} from 'react'
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizers';



const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1vh 0;
    font-size: ${fontSize[18]};
    p{
        margin-left: 0.5vw;
        color: #000046;
    }
    
`;
const Button = styled.div`

    margin-left: auto;
    padding: 3px;
    margin-right: 1vw;

    display: flex;
    align-content: center;
    justify-content: center;

    border: 1px solid #000046;
    border-radius: 5px;
    width: 1.2vw;

    
    
    
`;
const LeftImg = styled.img`
    margin-left: 1vw;
`;

interface INavLinkWithButtonProps  {
    frontImgSrc: string,
    text: string,
    buttonImgSrc: string
}

export const NavLinkWithButton: FC<INavLinkWithButtonProps> = (props) => {
    return (
        <Wrapper>
            <LeftImg src={props.frontImgSrc} />
            <p>{props.text}</p>
            <Button><img src={props.buttonImgSrc} alt={props.text} /></Button>
        </Wrapper>
    )
}
