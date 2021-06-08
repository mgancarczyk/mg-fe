import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ISingleUser } from '../../../entities/users';

import message from '../../media/icons/commentfas.svg'
import profile from '../../media/icons/userfas.svg'
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizers';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${Colors.mainBackgroundColor};
    margin: 0.2vh 2vw;
`;
const Name = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1vh 3vw 1vh 1vw;
    width: 15vw;
    font-size: ${fontSize[18]};
    color: ${Colors.textDarkBlue};
    font-weight: 550;

    img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 1vw;
    }
`;
const Field = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5vw;
    cursor: pointer;
    &:nth-child(2){
        margin-left: auto;
    }
`;
const FieldText = styled.p`
    height: 25px;
    width: 25px;
    margin-top: 1vh;
    
`;
const FieldIcon = styled.img`
    height: 25px;
    width: 25px;
    margin-right: 0.5vw;
`;

interface ICorrespondant {
    img: string;
    user: ISingleUser;
}

export const Correspondant: FC<ICorrespondant> = (props) => {
    
    return (
        <Wrapper>
            <Name>
                <img src={props.img} />
                {props.user.name}
            </Name>
            <Field>
                <FieldIcon src={message} />
                <FieldText>
                    Message
                </FieldText>
            </Field>
            <Field>
                <FieldIcon src={profile} />
                <FieldText>
                    Profile
                </FieldText>
            </Field>
        </Wrapper>
    )
}
