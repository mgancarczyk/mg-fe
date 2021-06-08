import React, { FC } from 'react';
import styled from 'styled-components';

import logo from '../media/profil.png';
import userPlus from '../media/icons/user-plus.png';
import network from '../media/icons/network.png';
import publications from '../media/icons/publications.png';
import plus from '../media/icons/plus.png';

import { fontSize } from '../../styledHelpers/FontSizers'
import { NavLinkWithButton } from './NavLinkWithButton';

import { useSelector } from 'react-redux';

import { IState } from '../../reducers';
import { IUsersReducers } from '../../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //border-radius: 5px;
    background-color: #fff;
    width: 80%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

    margin: 0 5% 0 5%;

`;
const SmallWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1vh 0.5vw;

`;
const Logo = styled.img`
    width: 75px;
    height: 75px;

    border-radius: 50%;
    margin-top: 2vh;
`;
const SmallLogo = styled.img`
    width: 25px;
    height: 25px;
    align-self: center;
`;
const Name = styled.p`
    margin-top: 1vh;
    font-size: ${fontSize[18]};
    
    color: darkblue;
`;
const SmallName = styled.p`
    font-size:${fontSize[16]};
`;
const CompactRight = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1vw;
    

    span{
        margin-top: 0.5vh;
        font-size:${fontSize[12]};
        color: ${Colors.linkBlue};
        font-weight: bold;
    }
`;
const Company = styled.p`
    margin-top: 0.5vh;
    color: grey;
    font-size: ${fontSize[12]};
`;
const Line = styled.div`
    border-top: 1px solid lightgray;
    width: 98%;
    margin: 1vh 0;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.linkBlue};
`;

interface IProfileResume {
    compact: boolean;
}

export const ProfileResume: FC<IProfileResume> = (props) => {

    const { usersList } = useSelector<IState, IUsersReducers>(globalState => globalState.users);
    return (
        <>
            {(props.compact) ?

                <SmallWrapper>
                    <SmallLogo alt="Avatar" src={logo} />
                    <CompactRight>
                        <SmallName>{usersList[0].name}</SmallName>
                        <StyledLink to={'/profile'}><span>See profile</span></StyledLink>
                    </CompactRight>
                </SmallWrapper>
                :
                <Wrapper>
                    {console.log(usersList)}
                    <Logo alt="Avatar" src={logo} />
                    <Name>{usersList[0].name}</Name>
                    <Company>{usersList[0].company.name}</Company>
                    <Line />
                    <NavLinkWithButton frontImgSrc={network} text="Your network" buttonImgSrc={userPlus} />
                    <NavLinkWithButton frontImgSrc={publications} text="Your publications" buttonImgSrc={plus} />
                </Wrapper>
            }
        </>
    )
};