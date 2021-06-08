import React, {FC} from 'react'
import styled from 'styled-components';

import {fontSize} from '../../../styledHelpers/FontSizers';



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
const LeftImg = styled.img`
    margin-left: 1vw;
`;

interface MenuButtonProps  {
    frontImgSrc: string,
    text: string
}

export const MenuButton: FC<MenuButtonProps> = (props) => {
    return (
        <Wrapper>
            <LeftImg src={props.frontImgSrc} />
            <p>{props.text}</p>
        </Wrapper>
    )
}