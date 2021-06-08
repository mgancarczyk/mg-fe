import React, {FC} from 'react';
import styled from 'styled-components';

import entities from '../media/icons/entities.svg';

const Wrapper = styled.div`
    //background-color: blue;
    height: 16vh;
    margin: 1vh 1vw 1vh 1vw;
    padding: 1vh;
    background-color: white;
    box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
    img{
        width: 5vw;
        height: 5vh;
    }
    p{
        padding-top: 1vh;
        padding-bottom: 1vh;
        
    }
    span{
        margin-left: 1vw;
    }
`;
interface IWorkItem {
    label: string;
    className?: string;
    text: string;
    photo: string;
  }

export const SimpleWork: FC<IWorkItem> = (props) => {
    return(
        <Wrapper>
            <img src={props.photo} />
            <p>{props.label}</p>
            <span>{props.text}</span>
        </Wrapper>
    );
};