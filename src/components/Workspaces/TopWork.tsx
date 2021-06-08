import React, {FC} from 'react';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizers';
import s from '../media/s.jpg'
import entities from '../media/icons/entities.svg';

const Wrapper = styled.div`
    //background-color: blue;
    height: 16vh;
    margin: 1vh 1vw 1vh 1vw;
    padding: 1vh;
    background-color: white;
    box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
`;

const Contener = styled.div`
    margin-top: 1vh;

    img{
        width: 5vw;
        height: 5vh;
        float: left;
    }
    p{
        padding-top: 1vh;
        padding-bottom: 1vh;
        font-size:${fontSize[20]};
        margin-left: 1vw;
        font-weight: 600; 
        
    }
    span{
        margin-left: 1vw;
    }
`;


const Img = styled.div`
    background-color: red;
    width: 75vw;
    height: 8vh;
    img{
        width: 75vw;
        height: 8vh;
    }
`;

export const TopWork: FC = () => {
    return(
        <Wrapper>
            <Img>
                <img src={s} />
            </Img>
            <Contener>
            <img src={entities} />
            <p>Corporate holdings</p>
            <span>Takie a few minoutes at the most important elements and specities your entities</span>
            </Contener>
            
        </Wrapper>
    );
};