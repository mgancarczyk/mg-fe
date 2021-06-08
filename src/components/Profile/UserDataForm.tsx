import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';

import comment from '../media/icons/commentfas.svg';
import file from '../media/icons/file.svg';
import briefcase from '../media/icons/briefcase.svg';
import x from '../media/icons/x.svg';
import edit from '../media/icons/edit.svg';

import { fontSize } from '../../styledHelpers/FontSizers';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducers } from '../../reducers/usersReducers';
import { IPhotoReducers } from '../../reducers/photosReducers';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 2vh 0;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
`;
const IconBar = styled.div`
    display: flex;
    flex-direction: row;
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 3vh;
        cursor: pointer;
        &:first-child{
            margin-left: auto;
        }
        img{
            width: 25px;
            height: 25px;
            margin-right: 0.5vw;
        }
        p{
            font-size:${fontSize[22]};
            font-weight: bold;
        }
    }
`;
const ProfileData = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3vh 1vw;
    height: 100%;
    p{
        cursor: pointer;
    }
`;
const AvatarWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        border-radius: 50%;
        height: 10vh;
        width: 5vw;
    }
    p{
        margin-top: 1vh;
        color: ${Colors.linkBlue};
        font-weight: bold;
        text-align: center;
        font-size:${fontSize[18]};
    }
`;
const LeftSide = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    min-height: 100%;
    width: 40%;
    &:first-child{
        margin-top: auto;
    }
`;

const LeftSideField = styled.div`
    margin: 1vh 1vw;
    font-size:${fontSize[18]};
`;
const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    min-height: 100%;
    &:first-child{
        background-color: red;
    }
    img{
        width: 25px;
        height: 25px;
        margin-left: 90%;
        cursor: pointer;
    }
`;
const RightSideField = styled.div`
    margin: 1vh.5vh 1vw;
    font-size:${fontSize[18]};
    &:nth-child(2){
        margin-top: auto;
    }
    img{
        margin-right: 15px;
    }
`;

const StyledInput = styled.input`
    font-size:${fontSize[18]};
    border: 1px solid;
`;

export const UserDataForm: FC = () => {
    const { usersList, photosList } = useSelector<IState, IUsersReducers & IPhotoReducers>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    }));

    const tempCurrentUser = usersList[0];

    const [isEditable, setIsEditable] = useState<boolean>(false);

    const [userName, setUserName] = useState<string>();
    const [userCompany, setUserCompany] = useState<string>();
    const [userCity, setUserCity] = useState<string>();
    const [userOccupation, setUserOccupation] = useState<string>();

    const [userMail, setUserMail] = useState<string>();
    const [userPhone, setUserPhone] = useState<string>();

    useEffect(() => {
        setUserName(tempCurrentUser.name);
        setUserCompany(tempCurrentUser.company.name);
        setUserCity(tempCurrentUser.address.city);
        setUserOccupation(tempCurrentUser.company.bs);
        setUserMail(tempCurrentUser.email);
        setUserPhone(tempCurrentUser.phone);

    }, [])

    const setEditing = () => {
        setIsEditable(prevState => !prevState);
    }


    return (
        <Wrapper>
            <IconBar>
                <div>
                    <img src={comment} />
                    <p>Message</p>
                </div>
                <div>
                    <img src={file} />
                    <p>Create a request</p>
                </div>
                <div>
                    <img src={briefcase} />
                    <p>Add to a cluster</p>
                </div>
                <div>
                    <img src={x} />
                </div>
            </IconBar>
            <ProfileData>
                <AvatarWrapper>
                    <img src={photosList[0].url} />
                    <p>See profile</p>

                </AvatarWrapper>
                <LeftSide>
                    {
                        isEditable ?
                            <LeftSideField>
                                <StyledInput type='text' value={userName} onChange={e => setUserName(e.target.value)} />
                            </LeftSideField>
                            :
                            <LeftSideField>
                                {userName}
                            </LeftSideField>
                    }
                    {
                        isEditable ?
                            <LeftSideField>
                                <StyledInput type='text' value={userCompany} onChange={e => setUserCompany(e.target.value)} />
                            </LeftSideField>
                            :
                            <LeftSideField>
                                {userCompany}
                            </LeftSideField>
                    }
                    {
                        isEditable ?
                            <LeftSideField>
                                <StyledInput type='text' value={userCity} onChange={e => setUserCity(e.target.value)} />
                            </LeftSideField>
                            :
                            <LeftSideField>
                                {userCity}
                            </LeftSideField>
                    }
                    {
                        isEditable ?
                            <LeftSideField>
                                <StyledInput type='text' value={userOccupation} onChange={e => setUserOccupation(e.target.value)} />
                            </LeftSideField>
                            :
                            <LeftSideField>
                                {userOccupation}
                            </LeftSideField>
                    }


                </LeftSide>
                <RightSide>
                    <img src={edit} onClick={setEditing} />
                    {
                        isEditable ?
                            <RightSideField>
                                <StyledInput type='text' value={userMail} onChange={e => setUserMail(e.target.value)} />
                            </RightSideField>
                            :
                            <RightSideField>
                                {userMail}

                            </RightSideField>
                    }
                    {
                        isEditable ?
                            <RightSideField>
                                <StyledInput type='text' value={userPhone} onChange={e => setUserPhone(e.target.value)} />
                            </RightSideField>
                            :
                            <RightSideField>
                                {userPhone}

                            </RightSideField>
                    }

                </RightSide>
            </ProfileData>
        </Wrapper>
    )
}
