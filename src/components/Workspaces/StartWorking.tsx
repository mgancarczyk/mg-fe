import React, {FC} from 'react';
import styled from 'styled-components';

import { fontSize } from '../../styledHelpers/FontSizers';

import { SimpleWork } from './SimpleWork';

import entities from '../media/icons/entities.svg';
import publications from '../media/icons/publications.svg';
import people from '../media/icons/people.svg';

const Wrapper = styled.div`
    //background-color: red;
    height: 30vh;
    width: 80vw;
    margin-bottom: 3vh;
    margin-top: 3vh;

    p{
        padding-top: 1vh;
        font-size:${fontSize[20]};
        margin-left: 1vw;
        font-weight: 600; 
    }
    b{
        padding-top: 1vh;
        font-size:${fontSize[20]};
        margin-left: 1vw;
        font-weight: 600; 
        color: lightgray;
    }
`;

const Container = styled.div`
    //background-color: green;
    height: 20vh;
    width: 26.6vw;
    float: left;
    //display: fixed;
    //margin: auto;
    position: relative;
    margin-top: 7vh;
`;

export const StartWorking: FC = () => {
    return(
        <Wrapper>
            <p>Start working on corporate matters</p>
            <Container>
                <SimpleWork label="Explore your entities" text="Takie a few minoutes at the most important elements and specities your entities." photo={entities}/>
            </Container>
            <Container>
                <SimpleWork label="Structure the ownership" text="Get a clear view of rhe ownership by looking at the relations between induviduals and entities." photo={publications}/>
            </Container>
            <Container>
                <SimpleWork label="Define the celendar" text="Prepare future events by creating detailed plans around the life of uour enitiy." photo={people}/>
            </Container>
        </Wrapper>
    );
};