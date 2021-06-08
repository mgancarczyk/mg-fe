import React, {FC} from 'react';
import styled from 'styled-components';

import entities from '../media/icons/entities.svg';
import { fontSize } from '../../styledHelpers/FontSizers';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    //background-color: green;
    height: 14vh;
    width: 19.5vw;
    float: left;
    //display: fixed;
    //margin: auto;
    position: relative;
    margin-top: 2vh;
`;

const Entities = styled.div`
    //background-color: blue;
    width: 17.5vw;
    height: 12vh;
    margin-left: 1vw;
    margin-top: 1vh;
    box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
    img{
        width: 100px;
        height: 100px;
        box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
        float: left;
        padding: 5px 5px 5px 5px;
        margin-left: 1vw;
        margin-top: 1.5vh;
        margin-right: 1vw;
        background-color:${Colors.lightgray};
    }
    p{
        padding-top: 1vh;
        padding-bottom: 1vh;
    }
    span{
        color: red;
    }
`;
const Text = styled.div`
    float: right;
    width: 10.9vw;
    height: 12vh;
    
`;
const TopText = styled.div`
    //background-color: pink;
    margin-top: 2vh;
    font-size:${fontSize[20]};
    font-weight: bold;
    color:${Colors.linkBlue};
    
`;
const BottomText = styled.div`
    //background-color: brown;
    margin-top: 3vh;
    font-size:${fontSize[18]};
    
`;
interface IEntitiesItem {
    label: string;
    text: string;
    photo: string;
  }
export const SimpleEntities: FC<IEntitiesItem> = (props) => {
    return(
        <Wrapper>
            <Entities>
            <img src={props.photo} />
            <Text>
                <TopText>{props.label}</TopText>
                <BottomText>{props.text}</BottomText>
            </Text>
            </Entities>
        </Wrapper>
    );
};